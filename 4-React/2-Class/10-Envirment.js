/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

فرض کنید یکسری درخواست رو داخل کامپوننت هامون به سمت سرور ارسال میکنیم خوب زمانی که ما روی  سیستم خودمون داریم این کار رو میکنیم داریم به  یک  آدرس دیگه این کار رو انجام میدهیم و زمانی که این پروژه میاد و مستقر میشه
روی سرور و کاربر ها از اون استفاده کنند لازم هستش که از یک آدرس دیگه بیایم و استفاده بکنیم و از این جور موارد که بهشون  یکسری متغیر ها یا پارامتر ها میان و میگویند  که بستگی داره به اون محیطی که برنامه ما داره اجرا میشه و ما باید  
خوب بعد از نصب ما میتونیم .env از  یکسری ساز کار استفاده بکنیم که وقتی برنامه تغیر کرد نیازی به تغیرات به صورت جز به جز نباشه برای این راه حل ما باید بیایم و از یکسری پکیج استفاده بکنیم که معروف ترین اون ها مثلا استفاده  از پکیج 
باید بیان و شروع بشوند  همچنین خودش یک متغیر هم به REACT_APP_  درست کنیم خوب ما باید بیایم و در حالت اول متغیر هایی که میایم و در این فایل قرارشون  میدهیم  حتما باید بیان و با کلمه کلیدی  .env بیایم و یک فایل با پسوند 
از اون استفاده بکنیم  process.env.REACT_APP_NOT ..  و هر موقع هم که لازم داشتیم باید بیایم و به صورت NODE_ENV صورت پیش فرض میاد و میسازه به نام 

آن ها هم میاد و متفاوت میشه NODE_ENV استفاده میکنه و همچنین متغیر .env  در داخل 3 تای اولی ما اگر بیایم و هر کدوم رو اجرا بکنیم   در واقع داره میاد و از یکسری فایل های 

"start": "react-scripts start",   npm start
"build": "react-scripts build",  npm run build  // production 
"test": "react-scripts test",   npm test 
"eject": "react-scripts eject",

npm start : .env.development.local   .env.local    .env.development   .env
npm run build   : .env.production.local   .env.local    .env.production   .env
npm test  : .env.test.local    .env.test   .env

درجه اهمیت این ها از سمت چپ به راست هستش

میکنه برامون embed  میگیریم میاد و تمام متغیر هایی که نوشتیم رو  build  هنگامی که ما میایم و از پروژه خودمون اصطلاحا 

قرار ندهیم  env  نکته : سعی کنید متغیر هایی که سکرت هستند رو در داخل متغیر 


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
