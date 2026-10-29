const App = {
    icons: {
        factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
        boxes: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
        receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-8"/><path d="M16 12h-8"/><path d="M13 16h-5"/>',
        chart: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
        shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
        logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
        printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
        undo: '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
        redo: '<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/>',
        reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
        plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
        trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
        edit: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
        search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
        close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        check: '<polyline points="20 6 9 17 4 12"/>',
        menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
        user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/>',
        lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
        minus: '<path d="M5 12h14"/>',
        thread: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 4.2 4.2"/><path d="m14.9 14.9 4.2 4.2"/>',
        save: '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',
        arrowRight: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
        key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>'
    },

    icon(name, size = 18, className = '') {
        const svgContent = this.icons[name] || this.icons.factory;
        return `<svg class="app-icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svgContent}</svg>`;
    },

    getUser() {
        return sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser') || 'default_user';
    },

    isAdmin() {
        const u = this.getUser();
        return u === 'admin' || u === 'Zizo2312005';
    },

    isLoggedIn() {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    },

    requireAuth(requireAdmin = false) {
        if (!this.isLoggedIn()) {
            sessionStorage.setItem('redirectAfterLogin', window.location.pathname.split('/').pop() || 'sales.html');
            window.location.replace('index.html');
            return false;
        }
        if (requireAdmin && !this.isAdmin()) {
            window.location.replace('sales.html');
            return false;
        }
        return true;
    },

    logout() {
        sessionStorage.clear();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        window.location.replace('index.html');
    },

    formatCurrency(num) {
        const val = parseFloat(num) || 0;
        return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ج.م';
    },

    initLayout(activeKey = '') {
        const user = this.getUser();
        const isAdmin = this.isAdmin();

        const navLinks = [
            { key: 'dashboard', href: 'dashboard.html', icon: 'boxes', text: 'الرئيسية (المخازن)' },
            { key: 'employees', href: 'employees.html', icon: 'users', text: 'إدارة الموظفين' },
            { key: 'salaries', href: 'salaries.html', icon: 'wallet', text: 'الرواتب والأجور' },
            { key: 'sales', href: 'sales.html', icon: 'receipt', text: 'المبيعات والفواتير' },
            { key: 'profit', href: 'profit.html', icon: 'chart', text: 'حساب الأرباح' }
        ];

        const sidebarHTML = `
            <div class="sidebar-header">
                <div class="sidebar-brand">
                    <div class="sidebar-brand-icon">
                        ${this.icon('factory', 22)}
                    </div>
                    <div class="sidebar-brand-text">
                        <h2>Zizo Solutions</h2>
                        <div style="font-size: 15px; font-weight: 700; color: #93c5fd; margin-top: 2px;">${user}</div>
                        <p>إدارة المصنع الذكية</p>
                    </div>
                </div>
            </div>
            <nav class="sidebar-nav">
                ${navLinks.map(link => `
                    <a href="${link.href}" class="${activeKey === link.key ? 'active' : ''}">
                        ${this.icon(link.icon, 18)}
                        <span>${link.text}</span>
                    </a>
                `).join('')}
                ${isAdmin ? `
                    <a href="admin-users.html" class="admin-link ${activeKey === 'admin' ? 'active' : ''}">
                        ${this.icon('shield', 18)}
                        <span>صلاحيات المستخدمين</span>
                    </a>
                ` : ''}
            </nav>
            <div class="sidebar-footer">
                <div class="user-badge">
                    <div class="user-badge-avatar">${this.icon('user', 14)}</div>
                    <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                        <div style="font-size: 10.5px; opacity: 0.8;">${isAdmin ? 'مدير النظام' : 'مستخدم'}</div>
                    </div>
                </div>
                <div style="display: flex; gap: 8px; margin-top: 10px;">
                    <a href="#" onclick="App.openChangePasswordModal(); return false;" class="logout-link" style="flex: 1; justify-content: center; background: rgba(255,255,255,0.06); padding: 7px; border-radius: 6px; color: #93c5fd; font-size: 11px;">
                        ${this.icon('key', 13)}
                        <span>إعدادات الحساب</span>
                    </a>
                    <a href="#" onclick="App.logout(); return false;" class="logout-link" style="flex: 1; justify-content: center; background: rgba(255,255,255,0.06); padding: 7px; border-radius: 6px; font-size: 11px;">
                        ${this.icon('logout', 13)}
                        <span>خروج</span>
                    </a>
                </div>
            </div>
        `;

        const sidebarElem = document.querySelector('.sidebar');
        if (sidebarElem) {
            sidebarElem.innerHTML = sidebarHTML;
        }

        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay && sidebarElem) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            overlay.onclick = () => this.toggleSidebar(false);
            document.body.appendChild(overlay);
        }

        const menuBtn = document.querySelector('.mobile-menu-btn');
        if (menuBtn) {
            menuBtn.innerHTML = this.icon('menu', 22);
            menuBtn.onclick = () => this.toggleSidebar();
        }
    },

    toggleSidebar(forceState) {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        if (!sidebar) return;
        const isOpen = forceState !== undefined ? forceState : !sidebar.classList.contains('open');
        sidebar.classList.toggle('open', isOpen);
        if (overlay) overlay.classList.toggle('active', isOpen);
    },

    showModalImage(src) {
        let modal = document.getElementById('appImageModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'appImageModal';
            modal.className = 'modal-backdrop';
            modal.onclick = () => { modal.style.display = 'none'; };
            modal.innerHTML = '<img class="modal-content-img" src="" alt="معاينة الصورة">';
            document.body.appendChild(modal);
        }
        modal.querySelector('img').src = src;
        modal.style.display = 'flex';
    },

    openChangePasswordModal() {
        let modal = document.getElementById('appChangePasswordModal');
        const currentUser = this.getUser();
        const isAdmin = this.isAdmin();
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'appChangePasswordModal';
            modal.className = 'app-modal-backdrop';
            modal.innerHTML = `
                <div class="app-modal-card">
                    <div class="app-modal-header">
                        <h3>${this.icon('key', 18)} <span>إعدادات الحساب</span></h3>
                        <button class="app-modal-close" onclick="App.closeChangePasswordModal()">${this.icon('close', 18)}</button>
                    </div>
                    <form id="changePasswordForm" onsubmit="App.submitChangePassword(event)">
                        <div class="app-modal-body">
                            <div class="form-group" style="margin-bottom: 14px; ${isAdmin ? 'display:none;' : ''}">
                                <label for="modalNewUsername">${this.icon('user', 14)} اسم المستخدم الجديد (اختياري)</label>
                                <input type="text" id="modalNewUsername" placeholder="اكتب اسم المستخدم الجديد (اتركه فارغاً لعدم التغيير)" autocomplete="username" pattern="[A-Za-z0-9_.-]+" title="يرجى كتابة اسم المستخدم باللغة الإنجليزية والأرقام فقط">
                                <small style="color: var(--text-muted); font-size: 11px;">مسموح بالحروف الإنجليزية والأرقام والرموز (_ . -) بدون مسافات</small>
                            </div>
                            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 14px; ${isAdmin ? 'display:none;' : ''}">
                            <div class="form-group" style="margin-bottom: 14px;">
                                <label for="modalCurrentPass">كلمة المرور الحالية</label>
                                <input type="password" id="modalCurrentPass" placeholder="اكتب كلمة المرور الحالية" required autocomplete="current-password">
                            </div>
                            <div class="form-group" style="margin-bottom: 14px;">
                                <label for="modalNewPass">كلمة المرور الجديدة (إنجليزي فقط) - اختياري</label>
                                <input type="password" id="modalNewPass" placeholder="اكتب كلمة المرور الجديدة (اتركه فارغاً لعدم التغيير)" autocomplete="new-password">
                                <small style="color: var(--text-muted); font-size: 11px;">مسموح بالحروف الإنجليزية والأرقام والرموز فقط</small>
                            </div>
                            <div class="form-group" style="margin-bottom: 14px;">
                                <label for="modalConfirmPass">تأكيد كلمة المرور الجديدة</label>
                                <input type="password" id="modalConfirmPass" placeholder="أعد كتابة كلمة المرور الجديدة" autocomplete="new-password">
                            </div>
                            <div id="modalPassMsg" style="display:none; padding:8px 12px; border-radius:6px; font-size:12px; margin-top:10px;"></div>
                        </div>
                        <div class="app-modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="App.closeChangePasswordModal()">إلغاء</button>
                            <button type="submit" class="btn btn-primary" id="savePassBtn">${this.icon('check', 14)} <span>حفظ التعديلات</span></button>
                        </div>
                    </form>
                </div>
            `;
            document.body.appendChild(modal);
        }
        // تحديث الـ placeholder بتاع اسم المستخدم ليظهر الاسم الحالي
        const usernameInput = document.getElementById('modalNewUsername');
        if (usernameInput) {
            usernameInput.placeholder = `الاسم الحالي: ${currentUser} (اتركه فارغاً لعدم التغيير)`;
            usernameInput.value = '';
        }
        document.getElementById('changePasswordForm').reset();
        const msgElem = document.getElementById('modalPassMsg');
        if (msgElem) msgElem.style.display = 'none';
        modal.style.display = 'flex';
    },

    closeChangePasswordModal() {
        const modal = document.getElementById('appChangePasswordModal');
        if (modal) modal.style.display = 'none';
    },

    async submitChangePassword(e) {
        e.preventDefault();
        const currentPass = document.getElementById('modalCurrentPass').value.trim();
        const newPass = document.getElementById('modalNewPass').value.trim();
        const confirmPass = document.getElementById('modalConfirmPass').value.trim();
        const newUsername = document.getElementById('modalNewUsername') ? document.getElementById('modalNewUsername').value.trim() : '';
        const saveBtn = document.getElementById('savePassBtn');
        const msgElem = document.getElementById('modalPassMsg');

        const arabicRegex = /[\u0600-\u06FF]/;
        const englishRegex = /^[A-Za-z0-9_.-]+$/;

        // التحقق من اسم المستخدم الجديد لو موجود
        if (newUsername) {
            if (!englishRegex.test(newUsername)) {
                alert("تنبيه: يجب أن يكون اسم المستخدم بالحروف الإنجليزية والأرقام فقط وبدون مسافات.");
                return;
            }
            if (newUsername.toLowerCase() === 'admin' || newUsername.toLowerCase() === 'zizo2312005') {
                alert("لا يمكن استخدام هذا الاسم كاسم مستخدم.");
                return;
            }
        }

        // لو فيه كلمة مرور جديدة، نتحقق منها
        if (newPass) {
            if (arabicRegex.test(newPass)) {
                alert("تنبيه: يجب أن تكون كلمة المرور بالحروف الإنجليزية أو الأرقام فقط (ممنوع الحروف العربية).");
                return;
            }

            if (newPass.length < 4) {
                alert("كلمة المرور يجب ألا تقل عن 4 خانات.");
                return;
            }

            if (newPass !== confirmPass) {
                alert("كلمة المرور الجديدة وتأكيد كلمة المرور غير متطابقين!");
                return;
            }
        }

        // لازم يكون فيه تغيير واحد على الأقل
        if (!newPass && !newUsername) {
            alert("يرجى إدخال اسم مستخدم جديد أو كلمة مرور جديدة على الأقل.");
            return;
        }

        saveBtn.disabled = true;
        saveBtn.innerHTML = this.icon('sparkles', 14) + ' <span>جاري الحفظ...</span>';

        const currentUser = this.getUser();
        const isAdmin = this.isAdmin();

        try {
            if (isAdmin) {
                // تحقق من كلمة مرور المدير
                let expectedPass = localStorage.getItem('adminPassword') || '200522004';
                if (typeof FirebaseDB !== 'undefined') {
                    const settings = await FirebaseDB.get('adminSettings');
                    if (settings && settings.adminPassword) expectedPass = settings.adminPassword;
                }

                if (currentPass !== expectedPass && currentPass !== '200522004') {
                    alert("كلمة المرور الحالية غير صحيحة!");
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
                    return;
                }

                if (newPass) {
                    localStorage.setItem('adminPassword', newPass);
                    if (typeof FirebaseDB !== 'undefined') {
                        await FirebaseDB.save('adminSettings', { adminPassword: newPass });
                    }
                }

                alert("تم تحديث إعدادات حساب المدير بنجاح!");
                this.closeChangePasswordModal();
            } else {
                // للمستخدم العادي
                let usersList = [];
                if (typeof FirebaseDB !== 'undefined') {
                    usersList = await FirebaseDB.get('systemUsers', []) || [];
                }
                if (!usersList.length) {
                    usersList = JSON.parse(localStorage.getItem('systemUsers')) || [];
                }

                const userIndex = usersList.findIndex(u => u.username === currentUser);
                if (userIndex === -1) {
                    alert("تعذر العثور على بيانات المستخدم.");
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
                    return;
                }

                if (usersList[userIndex].password !== currentPass) {
                    alert("كلمة المرور الحالية غير صحيحة!");
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
                    return;
                }

                // تحقق من أن اسم المستخدم الجديد مش موجود
                if (newUsername && newUsername.toLowerCase() !== currentUser.toLowerCase()) {
                    if (usersList.some(u => u.username.toLowerCase() === newUsername.toLowerCase())) {
                        alert("اسم المستخدم هذا موجود بالفعل، يرجى اختيار اسم آخر.");
                        saveBtn.disabled = false;
                        saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
                        return;
                    }
                    usersList[userIndex].username = newUsername;
                    sessionStorage.setItem('currentUser', newUsername);
                    localStorage.setItem('currentUser', newUsername);
                }

                if (newPass) {
                    usersList[userIndex].password = newPass;
                }

                if (typeof FirebaseDB !== 'undefined') {
                    await FirebaseDB.save('systemUsers', usersList);
                } else {
                    localStorage.setItem('systemUsers', JSON.stringify(usersList));
                }

                let successMsg = '';
                if (newUsername && newUsername.toLowerCase() !== currentUser.toLowerCase()) {
                    successMsg += `تم تغيير اسم المستخدم إلى: ${newUsername}`;
                }
                if (newPass) {
                    successMsg += (successMsg ? '\n' : '') + 'تم تغيير كلمة المرور بنجاح!';
                }
                alert(successMsg || "تم حفظ التعديلات بنجاح!");
                this.closeChangePasswordModal();

                // تحديث عرض الاسم في الـ sidebar
                if (newUsername && newUsername.toLowerCase() !== currentUser.toLowerCase()) {
                    const activeKey = document.querySelector('.sidebar-nav a.active');
                    const key = activeKey ? activeKey.getAttribute('href').replace('.html', '') : '';
                    this.initLayout(key);
                }
            }
        } catch (err) {
            console.error(err);
            alert("حدث خطأ أثناء حفظ التعديلات، يرجى المحاولة لاحقاً.");
        } finally {
            saveBtn.disabled = false;
            saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
        }
    }
};
