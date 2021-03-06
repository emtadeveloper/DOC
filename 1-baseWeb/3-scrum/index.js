/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

Agile  و   waterfall   به طور کلی دو سبک توسعه نرم افزار داریم به نام های  

waterfall :  یک کانسپت برای مدیریت نرم افزار هستش  که به صورت آبشاری میومدیم و به توسعه نرم افزار امون می پرداختیم و به شکل پایین بود ولی این مدل باید هر مرحله که تموم میشد ما به مرحله بعدی
می رفتیم و کارفرما برای انجام دادن این پروژه زیاد دخیل نبود و یک  تصویر مبهم از آنچه کارفرما در انتهای پروژه انتطار داشت رو بهش میداد  و  برای پروژه های بزرگ اصلا خوب نبود

plane 
           build 
                     Test 
                               deploy ...........


Agile  : اصطلاحا یک متدولوژی یا کانسپت توسعه نرم افزار هستش که میاد و پروژه رو به صورت ریز به ریز و چابک جلو میبره و ارتباط بین توسعه دهند ها مدیر پروژه و کارفرما رو زیاد میکنه و یک استراتژی برای 
برای توسعه نرم افزار امون هستش و باعث سرعت بیشتر در توسعه ی نرم افزار امون می شود

====================================================================================================================================================

scrum :  هستش که از ابزار های اون به حساب میادAgile یک فریمورک یا چهارچوب برای اجرای متدولوژی یا کانسپت 

اهداف اصلی اسکرام  

1- Transparency : یا شفاف سازی که این امکان رو میده مشتری تو اخر هر مرحله یه دمو از کار رو ببینه و اینکه واسش توضیح داده میشه که توی این ماه مثلا این لیست از کار هارو داشتین انجام میدادین
یک مثال از شفافیت شرایط تموم شدن هستش در چی هست مثلا این کارت هایی که داریم توسعه میدیم شرایط تموم شدنش موقعی هستش که بیاد و به صورت ریسپانسیو باشه

2- Inspection : بر اساس نیاز های فعلی شرکت میتونیم بیایم و یکسری تغیرات رو انجام بدیم تا به اون اهدافی که داریم بیایم و نزدیک تر بشیم

3- Adaption : یا انطباق یعنی اگر یک کاری انجام نمی شود بیا و مسیر رو کلن عوض کن که به منظور کاهش خطا هامون هستش

====================================================================================================================================================

کامپوننت های اصلی یا فاکتور های اصلی اسکرام 

1- Roles نقش ها

- product owner  / PO   :   فردی که نماینده کسب و کار در تیم شماست و وظیفه اش بیشینه کردن ارزشی است که در هر اسپرینت ایجاد می‌شود

- scrum master : مدیر پروژه که مطمئن بشه روش اسکرام به طور صحیح و موثر در حال انجام است

- Development Team :  تیم فنی یا برنامه نویسی ها 



2 - events رویداد ها

- sprint : یعنی یک بازه ی زمانی برای انجام دادن که باید یکسری از کار هارو انجام بدیم و معمولش دو هفته ای هستش 
 
- Sprint Planning Meeting : میاد و اتفاق میوفته یعنی می شینیم با هم دیگه و همه ی نقش ها میان و باهم دیگه صحبت میکنند پیرامون پروژه و وظایف هامون و تسک ها Sprint که در ابتدای هر 
بر اساس زمان و ارزش گزاری هاشون انجام میشه و این پوینت ها یا ارزش ها برا اساس فیبوناچی جلو میره و بر اساس پوینت هایی که میگیریم بهره بری ها معلوم میشه و تلاش و کیفیت کار شخص مشخص میشه

- Daily Scrum / daily Standup meeting :  یا همان جلسات ایستاده  که در آن همه حضور دارند و در مورد کارهایی که دیروز انجام دادند وکارهایی که میخواهند امروز انجام دهند صحبت می‌کنند  و همچنین اگر
در موردی گیر کردند از سایر اعضای تیم کمک می‌گیرند و معمولا این جلسه در حد 15 دقیقه هستش
  
- Sprint review meeting :   که در آن تیم فنی، مالک محصول و اسکرام مستر همدیگر را ملاقات می‌کنند تا آنچه که تا آن لحظه در اسپرینت فعلی صورت گرفته است را به نمایش بگذارند که معمولا دو روز آخر هر 
انجام شده رو بیا و به من نشون بده و اگر پروژه اوکی بود بیا و اون رو دپلوی بکن  sprit  هستش که کار هایی که در اون بازه دو هفته   sprit 

- Sprint retrospective meeting :  صحبت کردن پیرامون بالا بردن بهره بری و بررسی اثر بخشی  و کارایی خودمون  



3 - Artifacts :   مصنوعات ابزار هایی که به صورت دستی میایم و از اون ها استفاده میکنیم  ی جورایی شبیه به  زنبیل یا لیست خرید می مونه سه تا مصنوع اصلی داریم

- product backlog : میاد و خاسته هاشو با  اسکرام مستر در میون میزاره و اسکرام مستر هم میگه این PO هستش و useStory  لیستی از کار هایی که در مجموع باید در داخل پروژه انجام بشه و یک جورایی شبیه به 
یک چیز خیلی بزرگ هستش و من باید بیایم و اون هارو تبدیل کنم به یکسری قسمت های کوچیک تر یا تسک تبدیل کنه useStory یک

- sprit backlog :  امون هستش و اون هارو میاد و اسکرام مستر امون برامون امتیاز بندی اش میکنه و به برنامه نویس هاش میده همچنین ما میتونیم اون تسک هامون رو به یکسریuseStory تسک های کوچک تر شده 
ساب تسک هم بیایم و تقسیم اشون بکنیم

- increment task  :  اش توضیح داده شده باشد  که این کار در چه شرایطی باید Definition of Done  تسک هایی هستند که اساسا اونها باید انجام شوند و برای هر تسک بید یک توضیح کامل  و در نهایت اون 
بیاد تموم بشه

====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
