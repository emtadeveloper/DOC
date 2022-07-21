/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

برای مدیرت بهتر فایل هامون تا بتونیم از اون ها بهتر استفاده کنیم

Separation of concepts

export :  وقتی یک متغیر یا یک تابعی رو میخایم بیایم و کاری کنیم باهاش که در بیرون از اون استفاده بکنیم باید این کلمه رو به اول اون بدهیم
ما هر چیزی که در جاوااسکریپت داریم قابلیت اکسپورت شدن رو دارند

export default : پیش فرض وقتی یک تابع استفاده میکنیم نیازی به اسم  ندارد و همون کافی هستش این شیوه میاد اگه چیزی نبود این رو به صورت
پیش فرض برای ما قرار میدهد

export default class {  }

import : برای اضافه کردن این اون تابع یا متغیر باید بیایم و با دادن آدرس  از اون استفاده بکنیم  برای توابع و متغیر هایی که به تعداد زیادی از اون ها داریم

// import multiple importing //   import { sum as total } from "./math.js"

// import Aliasing //    import  Route  as total  from "./math.js"

//import without bindings  //  import "./..........."

قرار بدهیم  همچنین ما نمی تونیم ماژول هارو به طور مستقیم بیایم و استفاده بکنیم و حتما  type="module"   برای استفاده از ماژولار باید در صفحه وب امون
باشند Http باید بیان و تحت پروتوکل  

ها استفاده بکنیم به این صورتnameSpace یک جایگزین برای استفاده از ماژول بندی هستش که بیایم و از 

nameSpace sucsessLog {    export function log(message:string) : void {       }         }
 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

// test.js //

const obj = {
    name : 'reza',
    login(){
        console.log("login");
    }
}

module.exports = obj

// module.js //

const data = require('./test')

console.log(data)

data.login()



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/