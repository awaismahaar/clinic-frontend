export const general = {
  sidebar: {
    dashboard: 'لوحة التحكم',
    reports: 'التقارير',
    contacts: 'جهات الاتصال',
    leads: 'العملاء المحتملون',
    customers: 'العملاء',
    tickets: 'التذاكر',
    fileCenter: 'مركز الملفات',
    whatsapp: 'واتساب',
    instagram: 'دردشة انستغرام',
    email: 'البريد الإلكتروني',
    teamChat: 'دردشة الفريق',
    settings: 'الإعدادات',
    auditLog: 'سجل النشاطات',
    clinicCrm: 'CRM العيادة',
    allRightsReserved: 'جميع الحقوق محفوظة.'
  },
  login: {
    title: 'مرحباً بعودتك!',
    description: 'سجل الدخول إلى حسابك للوصول إلى لوحة التحكم.',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    branch: 'الفرع',
    loginButton: 'تسجيل الدخول',
    selectBranch: 'اختر فرعاً',
  },
  userMenu: {
    profile: 'الملف الشخصي',
    changePassword: 'تغيير كلمة المرور',
    logout: 'تسجيل الخروج',
    switchBranch: 'تبديل الفرع',
  },
  changePassword: {
    title: 'تغيير كلمة المرور',
    description: 'قم بتحديث كلمة المرور الخاصة بك لمزيد من الأمان.',
    oldPassword: 'كلمة المرور القديمة',
    newPassword: 'كلمة المرور الجديدة',
    confirmPassword: 'تأكيد كلمة المرور الجديدة',
    success: {
      title: 'تم تغيير كلمة المرور!',
      description: 'تم تحديث كلمة المرور الخاصة بك بنجاح.',
    },
    errors: {
      mismatch: 'كلمتا المرور الجديدتان غير متطابقتين.',
      length: 'يجب أن تتكون كلمة المرور من 4 أحرف على الأقل.',
      incorrect: 'كلمة المرور القديمة غير صحيحة.',
    },
  },
  actions: {
    cancel: 'إلغاء',
    saveChanges: 'حفظ التغييرات',
    edit: 'تعديل',
    send: 'إرسال',
    close: 'إغلاق',
  },
  languageSwitcher: {
    changeLanguage: 'تغيير اللغة',
  },
  dashboard: {
    title: 'لوحة التحكم',
    description: 'نظرة عامة على نشاط نظام عيادتك.',
    todaysAppointments: "مواعيد اليوم",
    birthdayReminders: 'تذكيرات أعياد الميلاد',
    noAppointments: 'لا توجد مواعيد مجدولة لهذا اليوم.',
    noBirthdays: 'لا توجد أعياد ميلاد قادمة في اليومين المقبلين.',
    birthdayToday: 'عيد ميلاد اليوم! 🎉',
    birthdayTomorrow: 'عيد ميلاد غدًا!',
    birthdayInDays: 'عيد ميلاد بعد {{days}} يوم!',
    updateStatus: 'تحديث الحالة'
  },
  record: {
    comments: 'التعليقات',
    addCommentPlaceholder: 'أضف تعليقًا... استخدم @ للإشارة إلى عضو في الفريق.',
    details: 'تفاصيل',
    notes: 'ملاحظات',
    attachments: 'مرفقات',
    instagram: 'انستغرام',
  },
  export: {
    export: 'تصدير',
    exportToExcel: 'تصدير إلى Excel',
    exportToPdf: 'تصدير إلى PDF',
    includeNotes: 'تضمين الملاحظات الداخلية',
    noDataToExport: 'لا توجد بيانات للتصدير',
  },
  toasts: {
    reminderSent: {
      title: 'تم إرسال التذكير (محاكاة)',
      appointmentDesc: 'تم إرسال تذكير الموعد لـ {{name}}.',
      birthdayDesc: 'تم إرسال تذكير عيد الميلاد لـ {{name}}.',
    },
    exportSuccess: {
      title: 'نجح التصدير',
      description: 'تم تنزيل ملفك.',
      whatsapp: 'تم تصدير سجل واتساب وحفظه في ملفات العميل.'
    },
    exportError: {
      title: 'فشل التصدير',
      description: 'لا توجد بيانات متاحة للتصدير.',
      customerNotFound: 'لم يتم العثور على معلومات العميل.',
      pdfError: 'حدث خطأ أثناء إنشاء ملف PDF.'
    },
    statusUpdated: {
      title: 'تم تحديث الحالة',
      description: 'تم تغيير حالة جهة الاتصال إلى {{status}}'
    },
    contactUpdated: {
      title: 'تم تحديث جهة الاتصال',
      description: 'تم تحديث تفاصيل {{name}}.'
    },
    leadStatusUpdated: {
      title: 'تم تحديث حالة العميل المحتمل',
      description: 'تم نقل العميل المحتمل إلى {{status}}'
    },
    leadUpdated: {
      title: 'تم تحديث العميل المحتمل',
      description: 'تم تحديث العميل المحتمل لـ {{name}} بنجاح.'
    },
    contactAdded: {
      title: 'تمت إضافة جهة اتصال! 🎉',
      description: '{{name}} الآن في جهات اتصالك.'
    },
    leadCreated: {
      title: 'تم إنشاء عميل محتمل! 🚀',
      description: 'تم إنشاء عميل محتمل جديد لـ {{name}}.'
    },
    leadConverted: {
      title: 'تم تحويل العميل المحتمل! ✨',
      description: '{{name}} الآن عميل.'
    },
    noShowAction: {
      title: 'إجراء عدم الحضور',
      description: 'تم نقل {{name}} إلى العملاء المحتملين لإعادة المتابعة.'
    },
    ticketCreated: {
      title: 'تم إنشاء تذكرة! 🎫',
      description: 'تم إنشاء تذكرة جديدة لـ {{name}}.'
    },
    ticketUpdated: {
      title: 'تم تحديث التذكرة',
      description: 'تم تغيير حالة التذكرة إلى {{status}}.'
    },
    customerUpdated: {
      title: 'تم تحديث العميل',
      description: 'تم تحديث {{name}} بنجاح.'
    },
    unknownContact: {
      title: 'جهة اتصال غير معروفة',
      description: 'يرجى إنشاء جهة اتصال لهذا الرقم أولاً.'
    },
    settingsUpdated: {
      title: 'تم تحديث الإعدادات',
      description: 'تم حفظ تغييراتك بنجاح.'
    },
    appointmentRequested: {
      title: 'تم طلب الموعد! ✅',
      description: 'شكرًا لك، {{name}}. لقد تلقينا طلبك وسنؤكده قريبًا.',
    },
    calendarSync: {
      connecting: {
        title: 'جاري الاتصال بالتقويم...',
        description: 'إعادة التوجيه إلى صفحة المصادقة (محاكاة).'
      },
      connected: {
        title: 'تم ربط التقويم! ✅',
        description: 'تم الاتصال بنجاح بتقويم {{provider}}.'
      },
      synced: {
        title: 'تمت مزامنة الموعد! 🗓️',
        description: 'تمت مزامنة موعد {{name}} مع {{calendars}}.'
      }
    },
    backup: {
      started: {
        title: 'جاري النسخ الاحتياطي',
        description: 'يتم إنشاء نسخة احتياطية من بياناتك. قد يستغرق هذا بعض الوقت.',
      },
      success: {
        title: 'اكتمل النسخ الاحتياطي!',
        description: 'جاري تنزيل ملف النسخ الاحتياطي ZIP الخاص بك.',
      },
      error: {
        title: 'فشل النسخ الاحتياطي',
        description: 'تعذر إنشاء نسخة احتياطية. يرجى المحاولة مرة أخرى.',
      },
    },
    autoWhatsapp: {
      title: 'رسالة واتساب آلية',
      description: 'تم إرسال رسالة {{type}} إلى {{name}}.',
    },
    commentAdded: {
      title: 'تمت إضافة تعليق',
      description: 'تم نشر تعليقك.',
    },
    noteUpdated: {
      title: 'تم تحديث الملاحظة',
      description: 'تم تحديث الملاحظة بنجاح.'
    },
    attachmentsUpdated: {
      title: 'تم تحديث المرفقات',
      description: 'تم تحديث المرفقات بنجاح.'
    },
    requiredFields: {
      title: 'الحقول المطلوبة مفقودة',
      description: 'يرجى ملء جميع الحقول المطلوبة.'
    }
  }
};