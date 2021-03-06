/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

React Router :   Hooks  ,  Component  به طور کلی این کتابخونه اومده و از دو قسمت اصلی تشکیل شده با نام های 

====================================================================================================================================================

1- Component

- Routers   :  like < BrowserRouter >  and < HashRouter >  در واقع میاد و اون فانکشنالیتی اصلی برنامه مارو مشخص میکنه که از چه روشی برای مسیردهی بیاد و استفاده بکنه
BrowserRouter : که وقتی اون رو وارد میکنیم به اول همه لینک هایی که وارد میکنیم اون کلمه میاد و اضافه میشه basename  یک پراپس میگیره به نام 

- Route Matchers : Routers  با استفاده از این کامپوننت ها میایم و مشخص میکنیم که با توجه به آدرس باری که داریم چه کامپوننت یا کامپوننت هایی باید بیان و رندر بشوند 

- Navigation : < link >  , < NavLink > nd < Redirect >  ما رو در غالب یکسری کامپوننت به ما ارائه میدهند HTML این سری از کامپوننت ها میان و اون تک های مربوطه به 

این پکیج در پشت صفحه برای هندل کردن آدرس بار ها میاد و از ریجکس استفاده میکن

2- Hooks  :  میایم و هووک میگویم Path  element  خوب در اینجا به هرچیزی مثل

====================================================================================================================================================

import { BrowserRouter as Router , Routes , Route } from "react-router-dom"

const App = () => {
    return (
        <Router> 
            <Routes>
             <Route path="/" element={<HomePage />} /> <Route path="/Auth" element={<Auth />} />    <Route path="/Blog" element={<Blog />} />
            </Routes>
        </Router>  )   }

element : jsx components  حالت معمولی برای دادن کامپوننت
 
*   نکته : استفاده از ستاره یا 
انتخاب بشه و رندر بشه چیکار کنیم ؟  Route بود true  مقدارش  url.startsWith ( path ) دادیم شروع شده بود یعنی اگر  <Route> ای که به  path  با مقدار URL  اگر بخوایم اون ساختار قبلی رو داشته باشیم که اگر 
path  رندر میشه همچنین توجه کنید که این ستاره فقط در انتهای ProfilePage باز هم کامپوننت /profile/abcd/13  هر چیزی داشته باشیم مثلا  / profile   کافیه از ستاره  استفاده بکنیم که داخل مثال زیر اگر بعد از 
<Route path="/profile/*"  element={ <profilePage/> } />       قابل قبوله و حتما بعد از / میاد، در نتیجه دو تا ساختار زیر معتبر نیستن   

/files/ستاره/cat.jpg                        /files-ستاره

====================================================================================================================================================

Params :    بیایم و یکسری متغیر رو ارسال کنیم و مقادیر اون رو در اون مسری که میخایم بگیریم برای مثال ما اومدیم و این مسیر هارو در اپ امون چیدیمurl  ما میخایم با استفاده از لینک ها بیایم و در داخل 
    
<Routes>     <Route path="/" element={<HomePage />} /> <Route path="/Auth/:slug-auth/:id" element={<Auth />} />    <Route path="/Blog" element={<Blog />} />   </Routes>
میایم و می نویسیم HomePage  تعین کردیم رو براش بیایم و ارسال بکنیم پس در داخل  Auth با استفاده از یک لینک  دو تا پارامی که در اپ برای HomePage  حالا میخایم در داخل 

export default function HomePage() {    return (   <div>     <Link to="/Auth/sample-auth/5">Auth</Link>   </div>   ); }
 
به مقادیر اون دسترسی داشته باشیم useParams  میتوانیم با استفاده از  Auth  حالا در داخل کامپوننت
        
import { useParams } from "react-router-dom";

export default function Auth() {     const params = useParams()   console.log(params)  {params.slug}     {params.id}  return <h1>Auth</h1>        }

====================================================================================================================================================

useNavigate :  شد بیایم و و یا یک درخواست ایجکس زده شد بیایم و وارد یک روت دیگه بشیم برای این کار از این هووک submit  یک موقع هایی هست میخایم وقتی مثلا یک رخداد اومد و اتفاق افتاد و یا یک فرم اومد و 
قرار میدهیم true  اضافه کنیم مقدار آرگومان دومی رو برابر با session history استفاده میکنیم همچنین اگر خواستیم که آدرس به طور کلی  بیاد و جایگزین بشه نه این که مسیر جدید رو به 

export default function Auth() {
    const Navigate = useNavigate();
    return (
        <h1>
            <button  onClick={() => { Navigate("/");   }}  >  Go Home  </button>
            <button  onClick={() => { Navigate("/Blog", { replace: true });  }}  >   Go Blog    </button>
        </h1>
    );
}

Navigate : میاد و کلن صفحه رو تغیر میده و کلن کاربر رو از  یک صفحه به یک صفحه ی دیگه منتقل میکنه از این قابلیت موقعی استفاده میکنیم که میخایم بیایم صفحه لاگین و داشبورد رو به وجود بیاریم

<Route path="/Panel" element={<Navigate replace to="/Login" />} />

====================================================================================================================================================

هم به عنوانپارامتر دوم میتونیم یک آبجکت بنویسیم که در اون   Navigate  در داخل لینک ما یک پراپس به همین نام داریم که میتونیم مقادیری که میخایم رو در اون قرار بدیم و در داخل  state در بحث ارسال
رو قرارشون بدیم  state

<Link to="/Auth/sample-auth/5"  state= {{ fomDashboard : true }}>Auth</Link>

const Navigate = useNavigate();

<button  onClick={() => { Navigate("/Blog", { state : { data : true }  }}  >   Go Blog    </button>

استفاده بکنیم useLocation  دسترسی داشته باشیم کافیه بیایم و از   state  حالا در داخل روت مقصد هم اگه بخایم بیایم و به این مقادیر

const  Location = useLocation()  Location.state

خواهد بود null  که دریافت میشه  state  و... رو بفرستیم، در این صورت مقدار promise  مثل تابع، non-serializable  میشه، پس نمیتونیم داده های  serialize  که میفرستیم state  نکته: مقدار


====================================================================================================================================================

useRoutematch  :  اون چی هستش برای همین از این هوک میتونیم استفاده کنیم که اگر url  حالا یک موقع هستش ما در داخل کامپوننت امون نیاز به این داریم که ببینیم ایا در داخل صفحه ای که هستیم اطلاعات 
حالا اگر بیایم و مقادیری رو بهش پاس بدیم رو  isExact : true /f alse  params  path ( آدرس اصلی ) url ( چیزی که وارد شده در مرورگر )  به اون هیچ آرگومانت ندیدم به ما یک آبجکت رو بر میگردونه که داخل اون
رو برای ما بر میگردونه و یا در غالب یک آبجکت به صورت زیر بیایم و یک آدرس رو پاس بدیم null  میاد و چک میکنه مثلا میخایم بگیم فلان آدرس مچ شده یا نه که اگه نشده باشه مقدار 

const match = useRoutematch({ path : "/ path /:slug " });  برابر نادرست می باشد  isExact  که اگر درست نباشه مقدار

export default function Auth() {
    const match = useRoutematch();  
    return ( <h1> { match && <p> Matched </p> }     </h1>     ); }
        
====================================================================================================================================================    

useLocation :  فرض کنید که ما سمت بک اند نیاز داریم که زمانی که صفحات تغیر کرد ترک کنم و پیگیری کنم که کاربر چه صفحاتی رو اومده و مشاهده کرده هر موقعی که آدرس ما میاد  و عوض میشه میاد و اون 
مقدارشو تغیر میدهد

import { useLocation } from "react-router";

export default function LogViewpage() {

const location = useLocation(); useEffect(() => { console.log(location.pathname);     }, [location]);        return null; }
    
====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
