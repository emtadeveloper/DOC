/*

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

فعلی مون رو با مقدار قبلی اون بیایم و چک بکنیمش خوب در شرایط واقعی ما در داخل فانکشنال کامپوننت ها به این هادسترسی نداریم state  فرض کنید ما یک شرایطی رو داریم که قرار هستش که بیایم و اون مقدار
برای همین نمیتونیم این کار رو انجام بدهیم و باید یک  روش و راهکار دیگه رو انجام  بدهیم

useRef :    return   Object 
 
رو برامون تعیین میکنه خوب ما چون از فانکشنال کامپوننت ها استفاده میکنیم state فک کنید که ما یک درخواستی رو داریم که به سمت سرور هستش و بعد که درخواست امون میاد و هندل میشه یک تابع داریم که میاد و مقدار جدید 
به آخرین مقدار دسترسی نداریم و همیشه به مقداری دستری داریم که قبل از درخواست ارسال شده است و اون مقدار مسلما آخرین مقدار نیستش خوب حالا برای مثال ما میخایم که بیایم و به یک تابع رو درست کنیم که چندین کلیک 
بشه روش انجام داد و ما میخایم که بیایم و به آخرین مقدار عددی یا آخرین کلیکی شده دسترسی داشته باشیم ولی خوب برای ما میاد و تمام اون ها لاگ گرفته میشه برای تثبیت این موضوع بیاین و کد زیر رو بررسی کنید

export default function Counter ( ) {  
  const  [count , setCount] = useState(0);
  useEffect ( ( ) => {    setTimeout(() => { console.log(count)  }, 2000);  });
  return (
      <div>
        <p style={{ color: "#fff" }}> click count is {count}</p>
        <button onClick={() => setCount(count + 1)}>Click !</button>
      </div>  
 )}
 
خوب داخل کد بالا اگر ما بیایم و به تعداد مثلا 6 بار بیایم و کلیک کنیم روی دکمه امون بعد از دو ثانیه می بینیم که تمامی مقادیر 1 تا 6 رو برامون لاگ گرفته ولی خوب در حال حاضر ما نیاز داریم که به آخرین مقدار امون دسترسی داشته باشیم
هستش که برای ما  یک آبجکت رو میاد و بر میگردونه و ویژگی که داره این هستش که میاد و به  آخرین مقدار امون همیشه اشاره میکنه و useRef  که برای این کار باید از یک راه حل دیگه استفاده بکنیم و اون استفاده از یک هووک به نام 
مقدار جدید رو اجرا نمیکنه دلیل نشون دادن آخرین مقدار این هستش که زمانی که اجرا می شود یک بار بیشتر داخل حافظه نمیاد و قرار نمیگیرد و هر دفعه اجرا نمیشه و هر دفعه میادو به اون در داخل  حافظه اشاره میکند این خاصیت یک
ویژگی عجیب غریب نیستش و  از قبل هم داخل جاوااسکریپت همچین خاصیتی رو داشتیم و حتی میتونیم مثال زیر رو بیایم و با استفاده از یک آبجکت هم دوباره تست بکنیم  ولی چون ما با هر بار اجرا کامپوننت امون میاد و مجدد رندر میشه
برامون یک خونه در حافظه اجرا میکنه و همیشه هم داخل اون  useRef باعث میشه که اون آبجکت امون بیاد و دوباره درست بشه و از مقدار  قبلی خودش اطلاعی رو نداشته باشه  ذات این دو یکی ولی به خاطر رندر ها  اشتباه نشون داده میشه 
برامون مقادیر رو قرار میده 

 
export default function Counter ( ) {

    const  [count , setCount] = useState(0);
    const countRef = useRef(count)
    const latestCount = {  current : count }

  useEffect ( ( ) => {
    countRef.current = count
    setTimeout(() => { 
      console.log( `countRef : ${ countRef.current }  `) 
      console.log( ` latestCount : ${ latestCount.current } `) 
     }, 2000);  });

  return (
      <div>
        <p style={{ color: "#fff" }}> click count is {count}</p>
        <button onClick={() => setCount(count + 1)}>Click !</button>
      </div> 
        )}

حال طبق مثال های بالایی ما دسترسی به آخرین مقدار رو بررس کردیم و حالا میخایم بیایم و دسترسی به مقدار قبلی رو با استفاده از این ویژگی جلو بریم

قبل از این که بیایم و اون رو مقدار دهی مجدد کنیم به مقدار قبلی اون دسترسی داریم useRef برای دسترسی به مقدار قبلی با استفاده از 

  useEffect ( ( ) => {
      console.log( countRef.current ) 
       countRef.current  = count
      console.log( countRef.current ) 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

تفاوت مفاهیم  useRef  &  createRef

useRef :  وقتی اون رو فراخوانی میکنیم فقط اولین بار میاد و در اولین رندر اون  رو برامون در داخل آبجکت قرار میدهد و در دفعه های بعدی این کار دیگه برامون نمیکنه و هر دفعه همون آبجکت قبلی ریترن میکنه و  ما به
یک شی واحد همیشه دسترسی داریم

createRef : خاصیت بالایی نداره و هر موقع که فراخوانی میشود یک شی جدید  رو برامون میاد و قرار میده و به شی های قدیمی دسترسی نداریم ما معمولا این تابع رو در  داخل کانستراکتور ها قرار میدهیم و اون ها فقط
یک بار میان و اجرا می شوند و این عملیات بیشتر به درد استفاده در کلاس کامپوننت ها میخوره و در فانکشنال ها به دلیل  این که با هر بار رندر میان و یک بار اجرا می شوند به درد ما دیگه نمیخورن زیاد تفاوت دوم این تابع
با بالایی در این هستش که این تابع مقدار وروردی رو دریافت  نمی کند 

میتونیم انجام بدهیم useRef میتونیستیم انجام بدیم رو با استفاده از   createRef  شباهت  :  ما هر کاری که با 

رفتیم برای فوکوس به صورت خودکار که بیاد و انجام بده createRef حالا مثال قبلی که برای 

export default function Counter ( ) {     

 const userNameRef = useRef ( )

  useEffect ( ( )=> {   userNameRef.current.focus( )  })

     return(
          <div>
          <input type="text"  ref={userNameRef} />           
          </div>
       )
   }
  
معرفی سایت  loader.io

React - Toastify  معرفی پکیج 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
