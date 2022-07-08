/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
===========================================================================================================================

Compiling source code into machine code is actually made up of four smaller steps:
کد ماشین در واقع از چهار مرحله کوچکتر تشکیل شده است source code کامپایل 

preprocessing : در داخل این مرحله تمام توابع و فایل هایی که از کتابخونه هایی که فراخوانی کردیم رو استفاده کردیم رو میاد و اضافه میکنه به بروژه امون

compiling : این مرحله ای هستش که میاد و برنامه ما کدهاشو به اسمبلی ترجمه میکنه اسمبلی دقیقا چیزی هستش که سیستم ما اون رو درک میکنه و می فهمه

assembling  تبدیل کردن کد های اسمبل شده به باینری 

linking : در این مرحله فایل های مختلفی که تا مرحله قبلی رفتن رو میاد و با هم دیگه یکی شون میکنه برای مثال شامل پیوند کردن کتابخانه ها به باینری برنامه هستش

===========================================================================================================================

مشخص دارند ولی بعد از اون limited نکته خیلی مهم : چهار عمل اصلی در داخل برنامه نویسی معمولا یک حد خواستی برای درست بودن عملکرد خودشون دارند یعنی یک 
دیگه نمیتونند به خوبی این کار هارو انجام دهند  و به درستی این کار رو نمیکنند برای همین باید خودمون دست به کد شیم و یکسری توابع رو شروع کنیم به نوشتن براشون
از قبل نوشته شدند و میتونیم بیایم و از اون ها استفاده بکنیم safeSum مثل safe البته یک سری توابع به اصطلاح 

===========================================================================================================================

Debugging

۱- در داخل بروژه امون در هر مرحله متوجه اشتباهات امون بشویم console.log و یا printf بیایم با استفاده از توابع 

2- بیایم و این کار رو انجام بدیم VsCode خود Debugger با استفاده از 

۳- بشینی خودت با خودت صحبت کنی و به مشکل کدت بی ببری

===========================================================================================================================

Array: is used to hold values of the same type at contiguous memory location. They are used to organize data of set of values

آرایه: برای نگهداری مقادیر از یک نوع در محل حافظه پیوسته استفاده می شود. آنها برای سازماندهی داده های مجموعه ای از مقادیر استفاده می شوند

هدف ذخیره سازی مقادیر در آرایه ذخیره سازی مقدار حافطه مون نیستش بلکه هدف اون حذف نام های متغیر متعدد هستش

Array first element of array is located at index 0 and while the last index is (n – 1)

است (n - 1) اولین عنصر آرایه آرایه در شاخص 0 قرار دارد و در حالی که آخرین شاخص 

To declare an array, you need to tell The type, which kind of variable each element in the array will be. The name, what name you want to call 
your array and The Size, how many element will you like your array to contain

برای اعلام یک آرایه، باید به نوع بگویید هر عنصر در آرایه چه نوع متغیری خواهد بود نام، نامی که می خواهید آرایه خود را صدا بزنید و اندازه، دوست
دارید آرایه شما حاوی چند عنصر باشد

Scope is a characteristics of a variable that defines where it can be accessed or used in a program

مشخصه ای از یک متغیر است که تعیین می کند کجا می توان به آن دسترسی داشت یا در یک برنامه از آن استفاده کرد Scope

We have the Local Variable and Global Variable   ما به دو صورت کلی اسکوپ داریم لوکال و گلوبال 

Local Variable are variable that can only be accessed within functions in which they are created while Global Variables can be
accessed by any function in the program. They are usually created above main();

متغیر محلی متغیرهایی هستند که فقط در توابعی که در آن ایجاد شده اند قابل دسترسی هستند در حالی که متغیرهای جهانی توسط هر تابعی در برنامه
main () ; قابل دسترسی هستند. آنها معمولاً در بالای

===========================================================================================================================

رشته ها در اصل آرایه ای از کاراکتر ها هستند و هر کاراکتر نمایش های دودویی اعداد هستش

null : 00000000

در داخل آن  null ذخیره سازی یک رشته به  این صورت هستش که به ازای هر کاراکتر یک بایت رو ذخیره میکنه و در نهایت هم یک بایت اضافه به عنوان بایت نگه دارند که مقدار 
H i ! \0 = 4 byte   در داخل 4 بایت میاد و ذخیره میشه H i !   ذخیره میشه رو قرار میدهد انگار کلمه 

cipher برای رمز نگاری متون معمولا به شیوه زیر عمل میشود که یک متن ساده به همراه یک کلید رو به یک تابع به عنوان ورودی میدهیم و این تابع میاد و در داخل خودش 
رو به عنوان خروجی میگیره cipher text یا عملیات تبدیل اون به رمز رو انجام میده و در نهایت یک متن رمز نگاری شده 

===========================================================================================================================
*/
