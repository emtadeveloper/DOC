/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
collection :  لیست
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

set   :   مجموعه و یا لیستی از داده ها هستش که مقادیر داخل اون  به صورت یونیک هستند و تفاوت اون با آرایه ها در این هستش که ما در آرایه ها لیست مقادیرمون به صورت
ترتیبی و هر مقداری که قرار میدیم داخل اون یک ایندکس بهش داده میشه ولی در این نوع کالکشن به صورت نامنظم و یونیک داده هامون  میاد و قرار میگره و هیچ گونه ایندکسی
در داخل اون قرار نداره و بهتره موقعی بیایم و اون استفاده کنیم که نیاز به داده های یونیک داشته باشیم همچنین این نوع کالکشن ها میان و فقط مقادیری رو میگیرند که قابلیت پیمایش
کردن رو داشته باشند مثل آرایه ها و رشته ها iterable یا اصطلاحا 

کردن روداشته باشند  iterable ها خیلی شبیه به ارایه ها هستند و نوع اون ها هم آبجکت هستش و تفاوت هاشون در بالا گفته شد همچنین مقادیری رو میگیرند که قابلیت set 

let array = [ 1, 2, 3, 4, 5 ];        let mySet = new Set(array);     // Set (5) {1,2,3,4,5}   new Set ما میتونیم اعضای مجموعه هارو با استفاده از یک آرایه هم بهشون پاس بدیم
  
const letter = new Set("banana");   console.log(letter);      // Set(3) {'b', 'a', 'n'}

حال برای کار کردن بهتر با اون ها یکسری متد هم دارند

1 - add برای اضافه کردن        mySet.add("sokanAcademy");       mySet.add("digiKala");
 
2 - delete برای پاک کردن          mySet.delete("digiKala")

3- clear برای پاک کردن همه ی مقادیرش          mySet.clear();

4-  size برای به دست آوردن طول مقادیر امون      console.log(mySet.size);

5- has برای بررسی این که یک مقدار داخلش وجود دارد یا خیر وجود نداره           console.log(mySet.has(5));

به یک آرایه ما دو تا راه حل مهم داریم set برای تبدیل یک مجموعه یا  کالکشن از نوع 

1- spread  استفاده از 

let fruitsSet = new Set ( ['Apple' , 'Orange' , 'Banana' ] );  // Set {"Apple" , "Orange" , "Banana"}

let fruitsArray = [...fruitsSet];  //  ["Apple" , "Orange" , "Banana"]

2- Array.from استفاده از 

let fruitsSet = new Set(['Apple' , 'Orange' , 'Banana']);   // Set {"Apple" , "Orange" , "Banana"}

let fruitsArray = Array.from(fruitsSet);  //  ["Apple" , "Orange" , "Banana"]

سوال خروجی زیر چی میشود

const users = new Set ( [ { a: 1 }, { a: 1  } ] );      console.log(...users);     // { a: 1 } { a: 1 }  refrence type

سول خروجی زیر چی میشود

const items = new Set([{ a: 1 }, { a: 1 }]);    console.log(items.has({ a: 1 }));   // false   خوب برای این که به این شکل نباشه میتونیم به شکل زیر رفتار کنیم

const obj = { a: 1 }            const items = new Set([obj, { a: 1 }]);                alert(items.has(obj)); // true

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
map :  نوعی خاصی از آبجکت ها هستش و یک نوع دیتا تایپ نیستند و مپ ها در واقع خیلی شبیه به همون آبجکت های ما هستند و برای نگه داری بهتر از لیست ها میان و استفاده
می شوند ولی یکسری تفاوت با آبجکت ها دارند 

let map = new Map(uniqe-key , value)   

در این هستش که ما در آبجکت ها اگر بیایم و یک کلید رو به عنوان آبجکت براش در نظر بگیریم و بعد هم یک کلید دیگه رو به عنوان آبجکت بهش object ها با map حالا تفاوت 
میکند reValue  اضافه کنیم میاد و در تشخیص کلید ها برامون خطا ایجاد میکنه و هر دو تا کلید رو یکی در نظر میگیره و مقادیر اشون رو برامون 

var object1 = {},                  information = { firstName: "Emad" },               job = { title: "developer" };

object1[information] = 1234;  // {   firstName: "Emad"   { object object }  :  1234   }

object1[job] = 5678;    {   firstName: "Emad"    { object object }  :  5678    }

// key  = key

console.log(object1[information]);       //object1[object object]  // 5678     که برای حل این مشکل بهتره بیایم و از  نقشه ها استفاده بکنیم

حال برای کار کردن بهتر با اون ها یکسری متد هم دارند

===========================================================================================================================

1- set

myMap.set(1 ,  'Apple');            ← Map {1 => "Apple"}

myMap.set(1 ,  'Apple').set(2 , 'Orange').set(3 , 'Banana');           ← Map {1 => "Apple", 2 => "Orange", 3 => "Banana"}

کلید های ما باید کاملا به صورت یونیک باشند  و ما برای انتخاب کلید ها هر نوعی رو میتونیم استفاده کنیم و محدودیتی نیست فقط باید حواسمون باشه تکراری نزاریم Map  در استفاده از 

همچنین برای تعریف اون ها میتونیم از آرایه دو بعدی هم استفاده کنیم به شکل زیر

let person = new Map([ ['firstName' , 'Abbas'] , ['lastName' , 'Moqaddam'] , ['age' , 33] ]);   // ← Map {"firstName" => "Abbas", "lastName" => "Moqaddam", "age" => 33}

2- size
 
let person = new Map();               person.set('firstName' ,  'Abbas').set('lastName' , 'Moqaddam').set('age' , 33);              person.size;   // 3

3- get  میتوان مقدار یک عضو رو با استفاده از کلید اون به دست آورد 

let person = new Map();           person.set('firstName' ,  'Abbas').set('lastName' , 'Moqaddam').set('age' , 33);      person.get('lastName');           // "Moqaddam"

4- delete در صورت پیدا کردن عضو با استفاده از کلید آن مقدار بولین درست رو بر میگردونه و در صورت پیدا نکردن مقدار نادرست رو بر میگردونه
5 - clear کل مپ مارو میاد و خالی میکنه

let person = new Map();   

person.set('firstName' ,  'Abbas').set('lastName' , 'Moqaddam').set('age' , 33);  // Map {"firstName" => "Abbas", "lastName" => "Moqaddam", "age" => 33}

person.delete('age');  // true     // Map {"firstName" => "Abbas", "lastName" => "Moqaddam"}

person.delete('weight');  // false       person.clear();  // Map {}

هارو هم با استفاده ازدو روش قبلی تبدیل به به آرایه ها بکنیم ولی خوب به ما یک آرایه دو بعدی تحویل می دهد  Map  ما میتونیم بیایم و 

6- entries( ) لیستی از داده های موجود در مپ رو برمیگردونه

7- forEach(callBack,[thisArg]) برای حلقه زدن روی مپ امون هستش

8- has(key) چک میکنه اون کلید هست یا نه

9- keys( ) لیست یا آرایه از کلید ها میده

10- value( ) لیست یا آرایه ای از داده ها یا مقدار های داخل مپ میاد و به ما میدهد

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
