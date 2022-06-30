/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Meta Programing :
به روش های مختلفی میگویند که برنامه میتواند از جزئیات خودش اطلاع پیدا کند و همچنین میتواند   خودش را دستکاری کند کار جدید رو انجام  بدهیا کار خاصی را به صورت دیگه انجام دهد
  
Reflect Api :
در بازرسی و بررس هامون استفاده میکنیم ک با استفاده از آن ها میتوانیم به   اطلاعات خیلی جزئی در مورد کدهامون دسترسی پیدا کنیم و یا کار خاصی انجام بدیم حال خود رفلکت
یک شی سراسری مانند جی سون و ویندو هستش که شامل تعدادی از متدهای داخلی جاوااسکریپت که در یک جا متمرکز شده هست و خیلی از متد هایی که گفتیم مشابه اش این جا 
هستش   و هدف اصلی اون نظم یا معنا گرایی میباشد و کاربر با استفاده از آن ها میتواند کارهای خیلی جزئی انجام دهد

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 Reflect.apply : apply call bind مشابه متدهای
 let sum = function (a, b) {
   console.log(a + b, this.name);
 };
 let obj = { name: "Emad" };
 Reflect.apply(sum, obj, [1, 2]);

------------------------------------------------

Reflect.constructor
ما قبلا برای نمونه گرفتن از یک تابع سازنده میومدیم و با نیو از اون تابع یک شی میساختیم حال با کمک این متد
که سه تا آرگومنت دارد یک نام تابع سازنده امان دو ارایه از ارگومانت های ارسالی به آن متد

 class Car {
   constructor(name, price) {
     (this.name = name), (this.price = price);
   }
   getInfo() {
     return "my Name is " + this.name + " " + this.price;
   }
 }
 let Benz = Reflect.construct(Car, ["Benz", 2222]);
 console.log(Benz);
 let BMW = new Car("BMW2", 11111);
 console.log(BMW);

------------------------------------------------

ما در داخل جاوااسکریپت همون طور که دیدم یک سری تابع داریم مثل فریز و نمونه  پایینی که جلوی توسعه یک شی رو میتونیم بیایم و با استفاده از اون بگیریم برای این
که ببینیم ایا این شی امون قابلیت توسعه رو دارد یا خیر یا اصلا جلوی اون رو بگیریم میتونیم از توابع زیر استفاده بکنیم


Reflect.isExtensible : برای اینکه بفهمیم آیا یک شی قابلیت توسعه پذیر بودن رو دارد که درست یا غلط رو به ما بر میگرداند

Reflect.preventExtension : برای جلوگیری از توسعه پذیر بودن یک شی استفاده میکنیم

 let empty = {};
 console.log(Reflect.isExtensible(empty));
 Reflect.preventExtensions(empty)
 console.log(Reflect.isExtensible(empty));
 let sealed = Object.seal({});
 console.log(Reflect.isExtensible(sealed));

-------------------------------------------------

Reflect.defineProperty : میتوانیم یک ویژگی جدید اضافه کنیم و یا یک ویژگی شی رو تغیر دهیم
 let obj = { name: "Ali" };
 Reflect.defineProperty(obj, "family", {
   value: "Ta",
   configurable: true,
   writable: true,
 });
 console.log(obj);

-------------------------------------------------

Reflect.getOwnPropertyDescriptor : برای گرفتن مقدار یک شی از آن استفاده میکنیم

let obj = { name: "Ali" };
console.log(Reflect.getOwnPropertyDescriptor(obj, "name"));

-------------------------------------------------

Reflect.deleteProperty : برای پاک کردن یک ویژگی در داخل شی امون که بهتر است جایگزین متد دیلت شود
 let arr = [1, 2, 34, 5];
 Reflect.deleteProperty(arr, 1); => object  index
 console.log(arr);

-------------------------------------------------

Reflect.has : می توانیم وجود یا عدم وجود یک ویژگی رو بررسی کنیم که درصورت وجود درست و غیراین صورت
 let obj = { name: "Ali" };
 console.log(Reflect.has(obj, "name"));

-------------------------------------------------
***************************************

Reflect.ownKeys : آرایه ای از ویژگی هارو برامون برگشت میدهد
 این متد همه ی کی ها حتی سیمبل هارو هم برگشت میدهد

 let obj = {
   foo: 1,
   bar: 2,
   [Symbol.for("benz")]: 3,
 };
 console.log(Reflect.ownKeys(obj));

---------------------------------------------------

Reflect.get : با استفاده از مقدار ویژگی های یک شی رو بر میگرداند

 let obj = {
   foo: 1,
   bar: 2,
   [Symbol.for("benz")]: 3,
 };

console.log(Reflect.get(obj, "foo"));

Reflect.set : اضافه کردن یک ویژگی جدید با یک مقدار جدید
 let arr = ["ff", "cc"];
 Reflect.set(arr,0, "goo");
 console.log(arr);

---------------------------------------------------
***************************************

Reflect.getPrototypeOf : میاد و مقدار پروتایپ شی مورد نظرمون رو بر می گرداند

 class Car {

   constructor(name, price) {
     (this.name = name), (this.price = price);
   }

   getInfo() {
     return "my Name is " + this.name + " " + this.price;
   }

 }
 let BMW = new Car("BMW2", 11111);
 console.log(Reflect.getPrototypeOf(BMW));

Reflect.setPrototypeOf :  با استفاده از این متد میتوانیم یک شی رو به عنوان پروتوتایپ یک شی دیگر
 قرار دهیم

 let obj1 = {
   name: "EMAD",
 };

 let obj2 = {
   getName() {
     return this.name;
   },
 };
 Reflect.setPrototypeOf(obj1, obj2);
 console.log(obj1.getName());
 console.log(obj1);

-----------------------------------------------------------

  1- Reflect Api : یک شی سراسری مانند جی سون و ویندو هستش که شامل تعدادی  از متدهای داخلی جاوااسکریپت  و هدف اصلی اون نظم یا معنا گرایی میباشد
  2- Reflect.apply  : Reflect.apply( function, obj for this, [1, 2]);
  3- Reflect.constructor : جایگزین نیو کردن برای کلاس
  *4- Reflect.isExtensible : چک میکند ایا این شی قابل توسعه هست برامون یا نه
  *5- Reflect.preventExtension  : برای جلوگیری از توسعه پذیر بودن یک شی استفاده میکنیم
  7- Reflect.defineProperty : میتوانیم یک ویژگی جدید اضافه کنیم و یا یک ویژگی شی رو تغیر دهیم
  8- Reflect.getOwnPropertyDescriptor : برای گرفتن مقدار یک شی  از آن استفاده میکنیم
  9- Reflect.deleteProperty : برای پاک کردن یک ویژگی در داخل شی امون که بهتر است جایگزین متد دیلت شود
  *10- Reflect.has : می توانیم وجود یا عدم وجود یک ویژگی رو بررسی کنیم که درصورت وجود درست و غیراین صورت
  *11-Reflect.ownKeys : آرایه ای از ویژگی هارو برامون برگشت میدهد
  12-Reflect.get : با استفاده از مقدار ویژگی های یک شی رو بر میگرداند
  *13-Reflect.getPrototypeOf : میاد و مقدار پروتایپ شی مورد نظرمون رو بر می گرداند
  *14-Reflect.setPrototypeOf :  با استفاده از این متد میتوانیم یک شی رو به عنوان پروتوتایپ یک شی دیگر
 
 */
