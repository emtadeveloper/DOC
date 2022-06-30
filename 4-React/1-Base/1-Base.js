/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

React : A JavaScript library for building user interfaces

1- تولید ظاهر کاربری به شدت راحت تر می شود 
2- نگه داری و توسعه کدها به شدت راحت می شود
3- قوی بودن جامعه کاربری اون
4- راحتی یادگیری و استفاده از اون
5- استفاده مجدد از کدها یا اصطلاحا Reusable Components
6- انجام می شود Virtual Dom دلیل اش هم اینه که هزینه تغیرات زیاد نشه پیدا کردن دام المنت و یا حذف و به روز رسانی اون ها با سرعتی کمتری نسبت به  Virtual Dom به جای RealDOM
7- ابزار های توسعه
8- استفاده از JSX
9- Seo frindly
10- به صورت یک طرفه data binding استفاده از جریان داده های یا به اصطلاح 

11- ( Server side rendering ) SSR پشتیبانی از 

12- spa : single page application  : خوب ما در برنامه نویسی قدیمی وقتی میومدیم و آدرس یک سایت وارد میکردیم یک درخواست به سمت سرور میدادیم و این پاسخ اش به عنوان پاسخ به ما برگشت
یک بار دفعه اول فقط برای لود صفحات درخواست   spa داده می شد و به ازای هر صفحه ای که میخاستیم یک درخواست به سمت سرور  ارسال میکردیم و  این ارتباط بر قرار بود ولی در برنامه نویسی به صورت
ارسال میشه و بعد از اون دیگه ارتباط برای لود صفحات دیگه بر قرار نیستش و قطع میشه و صفحات ما در قالب یک تک صفحه بهمون نمایش داده میشه

ما موقعی بهتر هستش که از این کتابخونه استفاده بکنیم که تعامل کاربرمون بیاد و بره بالا ما وقتی میومدیم و یک کد یا یکسری المان برای صفحه هامون داشتیم معمولا میومدیم و اون ها 
تولید میکردیم و این کار شدیدا طاقت فرسا بود و طول میکشید که میخاستیم بیایم و انجام بدیم HTML رو اصطلاحا با

changes Event Delegation  :  

html   : react 16 تمام رویداد ها اضافه میشده

div  : react 17 میان و به همه روت که ما خودمون معرفی میکنیم اضافه میکنند
  
این حالت میاد و به ما کمک میکنه که بتونیم بیایم  از چند نسخه متفاوت استفاده بکنیم

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

install React

1-  CDN

<CDN babel.js >

<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

بدهیم  ReactDOM حالا کافی است که کامپوننت های ری اکتی امون رو بیایم و به 

ReactDOM.render(Component,document.getElementById('root'))

امون رو همون لحظه برامون jsx این مدل اومدن و پیاده سازی کردن یکسری ایرادات داره از جمله اینکه چون به این شکل اومدیم و بابل رو پیاده سازی  کردیم کدهای مربوط به 
میاد پری پروسس اش میکنه و تبدیل اش میکنه به کد های جاوااسکریپت و این باعث میشه سرعت اجرای برنامه ما بیاد و کم بشه و سرعتش بیاد پایین و ما برای استفاده از امکانات
دیگه ری اکت باید بیایم و اون رو به صورت پکیجی بیایم و نصب بکنیم اون هم یک دلیل اش به خاطر وجود ابزار وب پک هستش که میاد و این ابزار هارو به ما میدهد

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2-  Package 

1- install node js

2- npx create-React-app Example-1   --use-yarn && --use-npm 

3- npm install -g create-react-app      --use-yarn && --use-npm  //  create-react-app nameProject  یک نسخه از پکیج ساخت ری اکت برامون میگره در سیستم و بعد بر اساس اون میاد
و برامون اون رو میسازه این مدل ساختن یک ایرادی که داره اینه که به  آخرین نسخه ری اکت دسترسی نداریم و بهتره از بالایی استفاده بکنیم

Hightlight updates when components render    که در داخل این گزینه در قسمت کامپوننت اش یک گزینه داریم  به نام react developer tools  نکته : ما همین طور که قبلا گفتیم یک گزینه داریم به نام 
که میاد و هر کامپوننت ما که به روز رسانی میشه یک هایلایتی رو اطراف اون نشون میدهد

نکته : کسانی که سایت مارو میان و مشاهده میکنند میتوانند بیان و پوشه پابلیک مارو هم مشاهده بکنند که بهتر هستش که بیایمو عکس هامون رو در داخل این پوشه قرار بدهیم

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
