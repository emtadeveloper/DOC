/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Form Validation :    1-  Server side
                                 2-  Client  side  

Client Side :   1 -HTML        2- JavaScript

HTML :    1 -Type :  email  ,  number  , url  ,  .....
                2 - required
                3 - length :  minLength ,  maxLength  ,  min  ,  max  
                4 - Pattern  :  regex

 نکته : ما میتونیم بیایم و این ویژگی های بالا رو نیز با استفاده از سودو کلاس هایی که داریم شروع کنیم و تغیر اشون بدیم
 استفاده بکنیم  : valid   : invalid   : required   : inrange   برای این کار کافی هستش که از سودو کلاس های                 

javaScript :  Validation API  :  Constraint validation API   داکیومنت اصلی این مبحث در داخل موزیلا               
دو تا مورد رو میاد و به ما تحویل میدهد اولی یک سری آبجکت یا پراپرتی هایی هستندند که اصطلاحا به صورت API به صورت خیلی کلی این 
میشناسیم که آبجکت هایی هستند که مقدار آن ها به صورت بولین هستش و فقط validity State  هستند  که اون هارو به عنوان  readonly
که زمانی که اینپوت ما یا المنت امون معتبر نباشه میاد و فایر  invalid Event  خواندنی هستند و دومی هم یک رویداد در اختیار ما هستش به نام 
میشه و ما میتونیم بیایم و یکسری هندلر براش تعریف بکنیم

<form>
    <input  type="text"   required    minLength="10">
    <button type="submit">Submit</button>
<form>

<script>

      const form = document.querySelector("form")
      const text = document.querySelector("input")

      console.log(text.validity)  ==>  validity State   //  valid Missing    tooShort  ......
      console.log(form.checkValidity())

      text.addEventListener('input',(e)=>{
          const {target} = e
          if(target.validity.tooShort) {
              target.setCustomValidity ('حداقل تعداد کاراکتر رعایت نشده')
          } else {
              target.setCustomValidity(' ' )
          }
      })

<script>

خوب ما در داخل شرط زیر میتونیم بیایم و چک بکنیم که فرم ما فقط بیاد و مقادیر موبایلی رو بگیره

<input ....................................
<smal hidden ..........................................................

      const phoneNumber = document.querySelector("input")
      const error = document.querySelector("small")

      phoneNumber.addEventListenet('input' , (e)=>{
          const { target }  = e
          error . hidden = true ;
          if( traget.validity.patternMismatch ) {
              error.hidden = false
          }
      })

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
