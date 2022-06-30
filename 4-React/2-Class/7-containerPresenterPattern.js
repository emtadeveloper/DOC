/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

یک دیزان پترن معروف رو معرفی کرده  dan_abramov  خالق ری اکت آقای

یک الگو هستش برای طراحی کامپوننت هامون که میاد و کامپوننت هامون رو به دو دسته برامون تقسیم میکنه 

1- component presenter  : در داخل خودشون نیستند  و هرآنچه که نیاز دارند رو میان و از طریق  state پروژه امون رو در خودشون ذخیره میکنند و شامل هیچ لاجیکی یا UI کامپوننت هایی هستند که صرفا 
ذخیره سازی components دریافت میکنند و به شدت خوب هستند برای ایجاد تغیرات و یا تست گرفتن و یا استفاده مجدد از اون کامپوننت امون و میتونیم بیایم و اون هارو در داخل یک پوشه به نام props 
Button & Input & RadioInput  بکنیم مثل کامپوننت های
 
2 - component container :  ندارند و میتونند شامل چندین کامپوننت دیگه باشند UI امون رو در داخل خودش برامون ذخیره سازی میکنه  و معمولا state  کامپوننت هایی هستند که میان و اون لاجیک و 
Header Layout  مثل کامپوننت های 


مون هستش  چون که اطلاعات مورد نیاز اش رو میاد و از طریق پراپس هامون دریافت میکنه و ما میتونیم بیایم و در شرایط مختلف از اون استفاده مجدد بکنیم همچنینUI  هدف اصلی از این الگو استفاده مجدد کردن از
میایم و درست میکنیم رو خیلی راحت تر میتونیم بیایم و تست بگیریم  presenter   ما کامپوننت هایی که از نوع

خوب این الگو یکسری معایب هم داره و اون هم این هستش که تعداد کامپوننت هایی که در داخا یک صفحه باید بیایم و رندرشون بکنیم خیلی زیاد میشه 

نکته : یک شیوه استفاده برای فراخوانی کامپوننت ها که قبلا استفاده میکردیم این بودش که میومدیم و هر پوشه ای که در یک کامپوننت درست میکردیم برای مثال لاگین دو تا فایل معمولا تعریف میکردیم به شیوه
با این نوع فراخوانی دیگه وقتی نیاز به لاگین داشتیم کافی بود بیایم و به صورت زیر از اون export { default } from "./Login"  معمولا این لاجیک رو قرار میدادیم  index  که در داخل  فایل  login.js  index.js  
import Login from "../components/Login"   استفاده میکردیم

 درست کن و به شیو زیر همه رو تعریف کن  index حالا روش دوم میگه بیا و در داخل کامپوننت یک فایل 

 export { default  as Login } from "./Login/Login"
.. ... ..  و هر تعداد کامپوننتی که وجود داره

حالا هرجا که خواستیم از این ها استفاده بکنیم به جای آدرس دهی های مستقیم فقط کافیه به شیوه زیر بیایم و اون هارو استفاده بکنیم

import  { Login  } from "../components"

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Presenter  مثال  طراحی یک کامپوننت به نام  
components  :  alert  مثل 

export deafult  function  ButtonWithValue( { handleClick  ,  value } ) {
    return (  <button onClick={handleClick} >{value} </button> )
}


containers  مثال  طراحی یک کامپوننت به نام  
containers : یعنی هر چیزی که قراره بیاد و شامل چندین نوع کامپوننت بشه


export deafult  function  Count(  ) {

    const [ count , setCount  ] = useState(0)

    function increment ( ) {  setCount( c => c + 1 )     }
        
    return (  <button onClick={handleClick} >{value} </button> )

}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
