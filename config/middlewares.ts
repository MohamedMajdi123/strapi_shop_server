module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'], // استبدل بعنوان النطاق الخاص بك
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // تأكد من تضمين الأساليب المطلوبة
      expose: ['Content-Length', 'X-Kuma-Revision'], // إذا كانت هناك رؤوس خاصة تريد تعريضها
      credentials: true, // إذا كنت بحاجة إلى دعم ملفات تعريف الارتباط
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];