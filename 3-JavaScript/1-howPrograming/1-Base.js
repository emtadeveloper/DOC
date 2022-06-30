/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 lanquage انواع زبان ها

      1-   زبان های نشانه گزاری   markup lanquage
            HTML Css به زبان هایی می گویند که کارشون اینه که داده ها رو بیان و نشانه گزاری کنند مثل
              
      2-   زبانه های برنامه نویسی     
           ما به زبانی زبان برنامه نویسی میایم و میگیم که قابلیت تصمیم گیری و تصمیم سازی و محاسبات ریاضی داشته باشه   

invoke : موقعی اتفاق میوفتند که رویداد مثل کلیک بیاد و اتفاق بیوفتد یا هم بیایم و خود تابع رو صدا بزنیم و یا هم در نهایت خود تابع بیاد و خودش رو صدا
بزنه کلن این مفهوم  یعنی صدا زده شدن

declare :  زمانی که یک متغیر را اظهار می کنیم، یعنی آن را استفاده از کلیدواژه ی ور یا .. می سازیم

define : زمانی که یک متغیر رو میایم و مقداردهی میکنیم یا مقداری رو به اون انتساب میدهیم 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

انواع زبان های برنامه نویسی

            1 - compiler زبان های کامپایلری 
             در ابتدا بعد از نوشتن کدهامون میاد و کامپایل می شوند و اگر کد های ما خطای دستوری داشته باشند این کامپایل شدن متوقف میشه و انجام 
             نمیشه حالا موقعی که کامپایل میشوند کد های ما دیگه خطای دستوری ندارند و  همچنین سرعت بالاتری  دارند و به زبان های ماشین نزدیک تر 
             هستند
          
            2 - Interpretive  زبان های تفسیری 
             هر خط کدی که ما میایم و می نویسیم این کد ما در همون مرحله میاد و تفسیر میشه و به کاربرمون نمایش داده میشه و این عملیات تفسیر شدن
             در خود برنامه میاد و اجرا میشه این نوع زبان ها معمولا سرعت کمتری نسبت به زبان های کامپایلری دارند و مقدار مصرف حافظه و رم اشون هم به
             مراتب بالاتر هستش

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

conditional statement   عبارات شرطی

1 -    if ( conditional ) { }  else if ( conditional ) { }  else { }

2 -    if  ..  in :  از این ویژگی میتونیم بیایم و برای چک کردن یک ویژگی در داخل شی امون استفاده بکنیم   if( " color "   in   user)   console.log(user)
       
3-    switch (  expression  )   { 
                                            case x :   
                                                   // code block 
                                                   break ;
                                            case y: 
                                                   // code block
                                                   break;                                                 
                                            default:
                                                   // code block
                                          } 

4-  ternary operator  :  ( conditional )  ?  true :  false ; 

نکته : بهتره در موارد زیر بیایم و کدمون رو به صورت زیر بنویسیم به جای اینکه از شیوه بالایی استفاده بکنیم

const foo  =  a ? a : b ;   //    const foo = a || b ;                                 

const bar  =  c ? true : false ;   //   const bar = !!c ;   اگر مقدارش حتما برابر با درست بود بیا و اجراش کن

const baz =  c ? false : true ;  // const baz = !c;     اگر حتما مقدارش برابر با نادرست بود بیا و اجراش بکن 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

loop حلقه ها 

1- For 

for ( variable  condition  stepper ) {  // code block to be executed  }

for (let i = 0; i < 5; i++) {  text += "The number is " + i + "<br>";  }
  
==================================================================================================

2 - while

while (condition) {   // code block to be executed  }
 
while (i < 10) {  text += "The number is " + i;   i++;  }   داخل خود بلاک حلقه امون قرار میدهیم  stepper 
  
==================================================================================================

3 - Do while

do {   // code block to be executed   }  while ( condition );
  
do {  text += "The number is " + i;   i++;  }  while (i < 10) ;
  
==================================================================================================

4- for in  برای پیمایش بین آبجکت ها آرایه ها

for (key in object) {  // code block to be executed  }
  
// object  
let user = { name : "emad" , age : 22 }
for (key in user) {  console.log( key , user[key])    }
      
// array
let colors = [ "red" , "green" , "blue "]
for (  index in colors ) {    console.log(index , colors [ index ] )      }

برای for ..in  نکته : وقتی ما میایم و مثلا با استفاده از حلقه ی پراپرتی های یک شی رو چاپ میکنیم ترتیب قرارگیری پراپرتی 
های یک شی به این صورت هستش که اعداد و پراپرتی هایی که به صورت عدد هستند چاپ می شوند و بعد بقیه پراپرتی ها
به ترتیب میان و چاپ می شوند 

==================================================================================================
  
5-For of  : رو داشته باشه iterable مخصوص آرایه ها و آیتم ها میدهد  اصطلاحا از اون موقعی استفاده میکنیم که اون کد ما خاصیت 

for (  variable of iterable ) {  // code block to be executed  }
  
let colors = [  "red"  , "green" , "blue " ]
for (item of colors ) {  console.log ( item )    }
      
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

یا حالت  سختگیرانه که وقتی میایم و  ازش استفاده میکنیم برنامه ی ما وارد مرحله سختگیری میشه و باعث میشه که کدی که use strict  استفاده از 
declar می نویسیم باگ و خطای کمتری رو داشته باشه از جمله خطاهایی که به ما میدهد برای مثال این هستش که میاد به متغیر هایی که اون هارو
نکردیم گیر میده و خطا میگره

حالت اول

"use strict";
x = 3.14; // ReferenceError: assignment to undeclared variable x

"use strict";    که برای رفع خطای اون باید بیایم و بنویسیم 
var x = 3.14;

use strict  رو همیشه یا اول اسکریپت امون قرار میدهیم و یا هم اول توابع امون میایم و مینویسیم اش

حالت دوم

"use strict";

var name = "emad";

delete name;  نمیتونیم این کارو انجام بدیم ولی اگه این قابلیت نباشه میتونیم

حالت سوم

function emad() {
    console.log(this);
}

emad ( )


حالت چهارم

مقدار داد: undefined  و  NaN یا فقط‌خواندنی مثل readonly   با حالت سخت‌گیرانه، نمیشه به مقدارهای

function f() {
  "use strict";
  NaN = 8; // TypeError: "NaN" is read-only        }
f();

حالت پنجم

پارامترهای تکراری یک تابع

"use strict";
function foo(x, x) { }
// SyntaxError: duplicate formal argument x

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
