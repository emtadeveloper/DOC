/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var   let  const   ما به طور کلی در جاوا اسکریپت به 3 مدل میتونیم بیایم و متغیر تعریف کنیم  که اون هم تعریف به صورت متغیر های 

let   متغیر هایی که به این صورت تعریف میشوند یکسری ویژگی دارند که به شرح پایین هستش 

       - 1 -   اون متغیر محدود به حلقه میشه scope تعریف بکنیم  for  در داخل حلقه هامون مثل   let اگر بیایم و یک متغیر رو با استفاده از 
       - 2 -   در دسترس نیستند global scope window تعریف می شوند در داخل let متغیر هایی که با استفاده از 
       - 3 -   تعریف میکنیم نداریم let همچنین اجازه تعریف مجدد متغیر ایجاد شده در همون اسکوپ رو وقتی با 
       - 4 -  شدن رو ندارند Hoisted تعریف می شوند امکان  let  متغیر هایی که با استفاه از 

آن ها بلوک است یعنی در همان بلوکی تعریف شده است  scope  تعریف میکنیم محدوده  const  و let  نکته : ما متغیر های که میایم   و با استفاده از 
اگر درون یک بلوک داخلی یک تابع نیز تعریف شود در همه قسمت‌های تابع قابل استفاده است  در محدوده یک تابع تعریف var معتبر است در حالی که 
می‌شود  
 
تعریف کنیم میتونیم بیایم و مقدار اون رو عوض کنیم و یا اینکه مجدد ا اون رو تعریف کنیم  var  ما اگر بیایم و یک متغیر رو به شکل 

let Winner = false;     let Point = 50;   if (Point > 40) {  let Winner = true;  console.log(Winner);    }    console.log(Winner);

var Winner1 = false;   var Point1 = 50;  if (Point1 > 40) {  var Winner1 = true;   console.log(Winner1);    }   console.log(Winner1);

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

اگه یک متغیر توی حوزه سراسری تعریف شده باشه، تا زمانی که برنامه فعال هست، قابل دسترسی هست برای مثال توی صفحات وب، یک متغیر سراسری تا زمانی
که صفحه باز  هست، وجود داره اما یک متغیر  با حوزه دید محلی طول عمر کوتاه‌ تری داره اونها فقط زمانی تعریف میشن که تابع صدا زده بشه  و زمانی که کار تابع 
تموم  شد از بین میرن

let counter = 0;        function jump ( ) {       counter++;     }       jump();       jump();        jump();          console.log(counter);   // 3

function jump ( ) {   let counter = 0;   counter++;   console.log( counter )   return counter;     }

jump( );         jump( );        jump( );         console.log(jump( ) );      //1

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    

میان let تعریف می شوند اینه که متغیر هایی که به صورت let  و const   یک تفاوت در نحوه ی اجرا توسط موتور جاوااسکریپت برای متغیر هایی که به شیوه های 
فقط یک مقدار در حافظه دارند و به مقدار قبلی const اون هارو پاک نمیکنه ولی  GC  و تعریف می شوند میتونند به مقدار قبلی شون در حافظه دسترسی داشت و 
شون دسترسی نیستش 

let name = "mohammad";
let hossein = name;
name = "ali";
let Emad = name

console.log(hossein, name,Emad);  //   mohammad  ali  ali
 
==================================================================================

let arrayOfLetters = ["a", "b"];

const cloneOfArrayOfLetters = arrayOfLetters;
arrayOfLetters = [];

const cloneOfArrayOfLetters2 = arrayOfLetters;

console.log(cloneOfArrayOfLetters, cloneOfArrayOfLetters2);

// // [‘a’, ‘b’ ]  [ ]

==================================================================================

let info = { name: "ali", age: 20 };

const aliInfo = info;
info ={}

console.log(aliInfo);  //  { name: "ali", age: 20 };

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/