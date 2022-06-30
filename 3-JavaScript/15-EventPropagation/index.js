/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Event Propagation :  Event : رویداد   Propagation : گسترش

میایم و ضمیمه onClick  چطوری میاد و در داخل صفحه امون گسترش پیدا میکنه برای مثال وقتی یک المنت یا یک رویداد مثل   Event خوب به طور خلاصه یعنی اینکه یک رویداد یا
میاد و میگه که این تحت تاثیر قرار  Event Propagation  ما فقط روی اون المنت اتفاق نمی افتاه بلکه میاد و یکسری المنت دیگه هم تحت تاثیر قرار میده حالا Event می کنیمش این 
دادنه به چه شکل هستش و باید اتفاق بیوفته ک 

داریم  Event Propagation  دو نوع  DOM خوب حالا ما در داخل 

=======================================================================================================================

1-Event Bubbling : به صورت پیش فرض هستش و از المنت داخلی به سمت المنت بیرونی هستش

//HTML CSS 

 <div id="div"   style="background-color: red; height: 200px; width: 200px"  >
      <p id="p"   style="background-color: green; height: 100px; width: 100px" > emad </p>
</div>         
 
// js
          
document.querySelector("div").addEventListener("click", function () {   console.log("I'm a div");   });
   
document.querySelector("p").addEventListener("click", function () {     console.log("I'm a p!");  });

click Tag div  :  log  :  I'm a div                        click  Tag  P    :  log  :   I'm a p  
                                                                                                                 I'm a div

=======================================================================================================================

2-Event Capturing : دقیقا برعکس رویداد قبلی عمل میکنه یعنی از المنت بیرونی به سمت المنت داخلی میاد و برای فعال کردنش هم باید بیایم و آرگومنت سوم متد
قرار دهیم true رو برابر با مقدار addEventListener  

//HTML CSS 

 <div id="div"   style="background-color: red; height: 200px; width: 200px"  >
      <p id="p"   style="background-color: green; height: 100px; width: 100px" > emad </p>
</div>         
 
// js
          
document.querySelector("div").addEventListener("click", function () {   console.log("I'm a div");   },true);
   
document.querySelector("p").addEventListener("click", function () {     console.log("I'm a p!");  },true);

click Tag div  :  log  :  I'm a div                        click  Tag  P    :  log  :   I'm a div 
                                                                                                                 I'm a p  

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

event.stopPropagation ( ) :   اون المنت  رو برای سطح های بعدی بیایم و بگیریم  Event Propagation  این خاصیت برای این استفاده میشه که بیایم و جلوی
کلیک کردیم اون دو تا لاگ رو برامون نگیره و فقط بیاد و لاگ خودشو بگیره برای همین کافی هستش p برای مثال بالا اگر بخایم بیایم و توضیج بدیم میخایم وقتی روی تگ 
نوشتیم این متد رو استفاده بکنیم div که بیایم و برای تابع که برای تگ 

document.querySelector ( " div " ).addEventListener ( " click ", function ( ) {   console.log( " I'm a div " );  event.stopPropagation ()  }, true );

=======================================================================================================================

event.preventDefault ( ) : اعمال میشه مانع ثبت form این متد وقتی میاد و روی یک المنت اعمال میشه میاد و مانع عملکرد ذاتی اون المنت میشه  برای مثال وقتی روی یک 
باعث میشه که اون لینک دیگه کار نکنه a  اون میشه و یا اگر روی یک

استفاده بکنیم که به ما یک مقدار بولین بر میگردونه event.defaultPrevented نکته : اگر لازم شد که ببنیم این ویژگی رو یک المان اعمال شده یا میتونیم بیایم و از متد 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

که هر کدوم یک رفتاری دارند که میایم و هر کدوم رو توضیح میدهیم event.currentTarget  و  event.target  دو تا رویداد مهم داریم به نام های 

event.target :وقتی میایم و روی یک المانت پرنت اعمالش میکنیم روی هر تگی که اعمال کنیم اون رو برامون لاگ میگیره برای مثال

        <div onclick="getElement(event)">
            <p>Tag P LOG
                <button>BUTTON LOG</button>
            </p>
        </div>

        <script>
            function getElement(event) {
                alert(event.target.tagName);        }  
        </script>  کلیک کنیم اون رو برای مون لاگ میگیره button  کلیک کنیم اون  رو برامو  لاگ میگیره و اگر بیایم و روی p  اگر بیایم و روی
        
event.currentTarget :تعریف شده رو برامون بر میگردونه   onclick روی هر کدوم که بیایم و کلیک رو میاد و تگی که رویداد 

به اون نمایش داده می شود onclick رو نمایش می دهد که رویداد  div خوب دقیقا اگر بیایم روی هر کدوم از  تگ های بالا که گفته شده کلیک کنیم  تگ 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------        
*/
