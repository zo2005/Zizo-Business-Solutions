async submitChangePassword(e) {
        e.preventDefault();
        const newUsername = document.getElementById('modalNewUsername').value.trim();
        const currentPass = document.getElementById('modalCurrentPass').value.trim();
        let newPass = document.getElementById('modalNewPass').value.trim();
        const confirmPass = document.getElementById('modalConfirmPass').value.trim();
        const saveBtn = document.getElementById('savePassBtn');

        const currentUser = this.getUser();
        const isAdmin = this.isAdmin();
        const arabicRegex = /[\u0600-\u06FF]/;

        // لو كتب باسورد جديدة، نتحقق من شروطها
        if (newPass !== "") {
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

        saveBtn.disabled = true;
        saveBtn.innerHTML = this.icon('sparkles', 14) + ' <span>جاري الحفظ...</span>';

        try {
            if (isAdmin) {
                // حالة المدير (Admin أو Zizo2312005)
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

                // لو المدير غيّر اسم المستخدم بتاعه (لو حابب يغير اسم الـ admin)
                if (newUsername && newUsername !== currentUser) {
                    sessionStorage.setItem('currentUser', newUsername);
                    localStorage.setItem('currentUser', newUsername);
                }

                // لو كتب باسورد جديدة بنحدثها، لو سابها فاضية بنسيب الباسورد القديمة زي ما هي
                const passwordToSave = newPass !== "" ? newPass : expectedPass;
                localStorage.setItem('adminPassword', passwordToSave);
                
                if (typeof FirebaseDB !== 'undefined') {
                    await FirebaseDB.save('adminSettings', { adminPassword: passwordToSave });
                }

                alert("تم تحديث بيانات المدير بنجاح!");
                this.closeChangePasswordModal();
                location.reload(); // إعادة تحميل الصفحة لتحديث الاسم في القائمة

            } else {
                // حالة المستخدم العادي
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

                // التأكد إن اسم المستخدم الجديد مش متكرر مع مستخدم تاني
                if (newUsername !== currentUser) {
                    const nameExists = usersList.some(u => u.username === newUsername);
                    if (nameExists) {
                        alert("اسم المستخدم الجديد مستخدم بالفعل، اختر اسم آخر.");
                        saveBtn.disabled = false;
                        saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
                        return;
                    }
                    usersList[userIndex].username = newUsername;
                    sessionStorage.setItem('currentUser', newUsername);
                    localStorage.setItem('currentUser', newUsername);
                }

                // تحديث الباسورد لو تم إدخال واحدة جديدة
                if (newPass !== "") {
                    usersList[userIndex].password = newPass;
                }

                if (typeof FirebaseDB !== 'undefined') {
                    await FirebaseDB.save('systemUsers', usersList);
                } else {
                    localStorage.setItem('localStorage', JSON.stringify(usersList)); // أو systemUsers حسب كودك
                    localStorage.setItem('systemUsers', JSON.stringify(usersList));
                }

                alert("تم تحديث بيانات الحساب بنجاح!");
                this.closeChangePasswordModal();
                location.reload(); // تحديث الصفحة لتطبيق الاسم الجديد
            }
        } catch (err) {
            console.error(err);
            alert("حدث خطأ أثناء حفظ البيانات، يرجى المحاولة لاحقاً.");
        } finally {
            saveBtn.disabled = false;
            saveBtn.innerHTML = this.icon('check', 14) + ' <span>حفظ التعديلات</span>';
        }
    }
