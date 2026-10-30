/**
 * إعدادات وربط Firebase بقاعدة بيانات Cloud Firestore
 * تطبيق Zizo Solutions لإدارة المصانع
 */

const firebaseConfig = {
  apiKey: "AIzaSyDgw9kzBt0m3ZN1PV2ygFSqRJUTwSfJJPI",
  authDomain: "zizo-ec9ab.firebaseapp.com",
  projectId: "zizo-ec9ab",
  storageBucket: "zizo-ec9ab.firebasestorage.app",
  messagingSenderId: "699661031543",
  appId: "1:699661031543:web:a1d0eac43c3f6f24a38e72",
  measurementId: "G-C45DCC83G2"
};

// تهيئة Firebase
let db = null;
let isFirebaseReady = false;

try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    
    // تفعيل وضع التخزين غير المتصل لتحسين السرعة والأداء
    try {
      db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        if (err.code === 'failed-precondition') {
          console.warn('Firebase persistence failed: multiple tabs open');
        } else if (err.code === 'unimplemented') {
          console.warn('Firebase persistence not supported in this browser');
        }
      });
    } catch (e) {}

    isFirebaseReady = true;
    console.log("تم تهيئة Firebase بنجاح!");
  } else {
    console.warn("مكتبة Firebase SDK غير محملة.");
  }
} catch (error) {
  console.error("فشل في تهيئة Firebase:", error);
}

// محرك التعامل مع قاعدة البيانات
const FirebaseDB = {
  db: db,
  isReady: isFirebaseReady,
  status: 'connecting', // 'connecting', 'online', 'offline', 'syncing'
  statusListeners: [],

  onStatusChange(callback) {
    if (typeof callback === 'function') {
      this.statusListeners.push(callback);
      callback(this.status);
    }
  },

  setStatus(newStatus, message = '') {
    this.status = newStatus;
    this.updateStatusBadge(newStatus, message);
    this.statusListeners.forEach(cb => {
      try { cb(newStatus, message); } catch(e) {}
    });
  },

  updateStatusBadge(status, customMsg = '') {
    const badge = document.getElementById('firebaseStatusBadge');
    if (!badge) return;

    let dotColor = '#10b981'; // green
    let text = 'سحابي متصل';

    if (status === 'syncing') {
      dotColor = '#3b82f6'; // blue
      text = customMsg || 'جاري المزامنة...';
    } else if (status === 'offline' || status === 'error') {
      dotColor = '#ef4444'; // red
      text = customMsg || 'وضع غير متصل';
    } else if (status === 'online') {
      dotColor = '#10b981';
      text = customMsg || 'متصل بـ Firebase ⚡';
    }

    badge.innerHTML = `
      <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${dotColor}; margin-left:6px; box-shadow: 0 0 6px ${dotColor};"></span>
      <span style="font-size: 11px; font-weight: 600;">${text}</span>
    `;
  },

  /**
   * حفظ بيانات مفتاح معين سحابياً ومحلياً
   */
  async save(key, data) {
    // 1. الحفظ الفوري محلياً لضمان السرعة الفائقة
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("خطأ في التخزين المحلي:", e);
    }

    // 2. إذا كانت Firebase غير مفعلة، نكتفي بالمحلي
    if (!db) {
      this.setStatus('offline');
      return true;
    }

    this.setStatus('syncing', 'جاري الحفظ بالسحابة...');

    try {
      const payload = {
        json: JSON.stringify(data),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        localUpdatedAt: Date.now(),
        updatedBy: localStorage.getItem('currentUser') || 'system'
      };

      await db.collection('app_data').doc(key).set(payload, { merge: true });
      this.setStatus('online', 'متصل بـ Firebase ⚡');
      return true;
    } catch (err) {
      console.error(`خطأ في رفع البيانات للمفتاح [${key}]:`, err);
      this.setStatus('offline', 'تم الحفظ محلياً فقط');
      return false;
    }
  },

  /**
   * حذف مستند كامل نهائياً سحابياً ومحلياً لتفريغ المساحة
   */
  async delete(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}

    if (!db) return true;

    try {
      await db.collection('app_data').doc(key).delete();
      return true;
    } catch (err) {
      console.warn(`فشل حذف المستند [${key}] من السحابة:`, err);
      return false;
    }
  },

  /**
   * جلب بيانات مفتاح معين
   */
  async get(key, defaultValue = null) {
    let localData = defaultValue;
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        localData = JSON.parse(stored);
      }
    } catch (e) {}

    if (!db) return localData;

    try {
      const doc = await db.collection('app_data').doc(key).get();
      if (doc.exists && doc.data().json) {
        const cloudData = JSON.parse(doc.data().json);
        localStorage.setItem(key, JSON.stringify(cloudData));
        this.setStatus('online');
        return cloudData;
      } else {
        // المستند غير موجود في السحابة
        return defaultValue;
      }
    } catch (err) {
      console.warn(`فشل جلب المفتاح [${key}] من السحابة، تم استخدام المحلي:`, err);
      this.setStatus('offline');
    }

    return localData;
  },

  /**
   * اشتراك في التحديثات اللحظية (Real-time Listener)
   * يتم استدعاء callback فور وصول أي تعديل جديد من أي جهاز
   */
  subscribe(key, onDataUpdate, defaultValue = null) {
    // 1. تطبيق البيانات المحلية فوراً حتى تظهر الشاشة للمستخدم بدون أي تأخير
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        onDataUpdate(JSON.parse(stored));
      } else if (defaultValue !== null) {
        onDataUpdate(defaultValue);
      }
    } catch (e) {}

    if (!db) return () => {};

    // 2. الاستماع اللحظي إلى مستند Firestore
    let isInitial = true;
    const unsubscribe = db.collection('app_data').doc(key).onSnapshot((doc) => {
      this.setStatus('online', 'متصل بـ Firebase ⚡');

      if (doc.exists && doc.data().json) {
        const cloudJson = doc.data().json;
        const currentLocal = localStorage.getItem(key);

        // إذا كانت البيانات السحابية مختلفة أو هذا التحميل الأولي
        if (currentLocal !== cloudJson || isInitial) {
          try {
            const parsed = JSON.parse(cloudJson);
            localStorage.setItem(key, cloudJson);
            onDataUpdate(parsed);
          } catch (e) {
            console.error('خطأ في معالجة بيانات السحابة:', e);
          }
        }
      } else {
        // المستند غير موجود أو تم حذفه من السحابة
        try {
          localStorage.removeItem(key);
        } catch(e) {}
        onDataUpdate(defaultValue);
      }
      isInitial = false;
    }, (error) => {
      console.warn(`خطأ في الاشتراك اللحظي للمفتاح [${key}]:`, error);
      this.setStatus('offline', 'وضع غير متصل');
    });

    return unsubscribe;
  }
};
