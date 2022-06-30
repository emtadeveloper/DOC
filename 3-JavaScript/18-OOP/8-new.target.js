/*

new.target این ویژگی اصطلاحا یک متاپراپرتی هستش

1 - ما با استفاده از این پروپرتی می توانیم متوجه شیم که تابع به صورت مستقیم صدا زده شده یا به عنوان یک سازنده اومده و نیو شده است
که می تونیم بیایم و بفهمیم که این تابع امون اینووک شده یا مثلا نیو  شده

2- می توانیم در ارث بری در شی گرایی امون هم بیایم و بفهمیم که فرزند ما از کدوم پدرش اومده و ارث بری کرده است  

function Person ( ){    this.name = name;    console.log ( new.target )        }

let test1 = Person("mehrdad")   console.log( test1)       let test2 = new Person('M2')      console.log(test2)

  
ما به صورت تعریف نشده هست و در حالت دومی که اومدیم new.target  در مثال بالا وقتی که ما میایم و تابع امون رو به صورت عادی اومدیم و اینوک کردیم تابع 
و اون رو به صورت نیو صدا کردیم و یک شی ساختیم اون تابع اومده و کل تابع سازنده رو برای ما برگردونده

این تابع عملا میاد و در رفتار شی گرایی استفاده میشه و می تونیم از تابع به عنوان شی گرایی استفاده میکنیم یا به عنوان یک تابع معمولی 


مثال بالا  متناسب با یک شرط گزاری 

function Person(){
    console.log(new.target)
    if(new.target){
        this.name = name
        return this;
    }
      this name;
    }
    let test1 = Person("mehrdad")
    let test2 = new Person('M2')
    console.log(test1)
    console.log(test2)

حتی ما با یک تغیر می تونیم شرط بزاریم که این تابع فقط باید
بیاد  و به صورت نیو یا سازنده استفاده بشه

function Person(){
    console.log(new.target);
    if(!new.target){
        throw "Person is a constructor and you cant invoke it"
    }
      this name;
    }
    let test1 = Person("mehrdad")
    let test2 = new Person('M2')
    console.log(test1)
    console.log(test2)

که می تونیم بیایم و بفهمیم که این تابع امون اینووک شده یا مثلا نیو  شده



3 - استفاده از این تابع در کلاس ها که مشخص میکنه کدوم یک از کانستراکتور هامون اومده و نیو شده و میتونیم در کلاس پدر ما اسم فرزند امون رو ببینیم و این قابلیت رو ما در هیچ زبان
دیگه ای نداریم

class Person {
        constructor(name) {   this.name = name;      console.log(new.target.name);       }       }

class Employee extends Person {}

class Employer extends Person  {}

      let t1 = new Person("T1");

      let t2 = new Employee("T2");

      let t3 = new Employer("T3");

حال ها ما میتونیم بفهمیم که این پدر ما کدوم فرزندانش داره میاد و صدا زده باشه و ما بر اساس نیاز امون می تونیم بیایم و استفاده کنیم یکی از استفاده در استفاده از لاگ کردن



*/
