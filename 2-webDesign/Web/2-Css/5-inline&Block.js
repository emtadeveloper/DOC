/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

display : none کلن المان رو حذف میکنه و جای خالی شو نشون نمید

visibility: hidden هاش غیر فعاله events  المان نشون داده نمیشه ولی جاش حفظ میشه از طرفی هم 

pointer-events : none  و  opacity : 0   اصطلاحا این پراپرتی ترکیبی از 

opacity : 0 هاش فعاله events المان نشون داده نمیشه ولی 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1-inline :  نمیگیره و اگر مقدار دهی کنیم  width height وقتی میایم و همچین موقعیتی میدیم یک سری ویژگی داره اول اینکه
                        اونم فقط در راستای افق میاد و اعمال میشه margin padding بهشون اعمال نمیشه و فقط میتونیم استایل ها 

2-inline-block  : میگیره margin padding width height  میتونیم بیایم و همه حالت ها بهش استایل بدیم و هم 

( باشند خطی میگویندinline-block و inline به عناصری که از نوع )

3-block : width:100% عرض صد درصد میگیره 

4-inline-flex : رفتارعنصر شبیه به اینلاین و عناصر داخلی رو بر حسب فلکس

5-inline-grid : رفتار عنصر شبیه به اینلاین و عناصر داخلی رو بر حسب گرید

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

float  کار اصلی اون این هستش که محتوای بعد اون عنصر بیاد و قرار بگیره برای مثال وقتی مقدارشو برابر با راست قرار میدیم عنصر امون در سمت راست 
قرار میگره و محتوای میاد و دقیقا بعد از اون عنصر قرار میگره

float: right;              float: left;                float: none;           مقدار پیشفرض             float: inherit;

تداخل هایی دارد posotion و  display با ویژگی های   float ویژگی 

display : none    روی آن ها هیچ گونه تاثیری ندارد float

posotion : absolute or fixed  در نظر گرفته می شود none برای آن ها float  نمی توانند شناور شوند و مقدار

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

clear fix کار این ویژگی این است که اطراف عنصر شناور یا فلوت را پاکسازی کند تا عناصر دیگر به پایین عنصر شناور سقوط کنند

.clear-fix::after {
    content : '';
    clear : both;
    display
     : tabel 
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
