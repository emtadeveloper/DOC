/*

====================================================================================================================================================  

Active Link - nav Link  :  همون لینک هامون هستند و میخایم وقتی اومدیم و وارد اون صفحات شدیم بیاین و مثلا یک استایل خاص و متفاوت تری رو بگیرند که برای این کار از این ها استفاده میکنیم
داره که یک مقدار بولین برای اعمال شدن یا نشدن استایل هامون هستش isActive که ورودی این پراپس ها یک آبجکت که یک مقدار style و  className  که میان و دو تا پراپس میگیرن به نام های 

<NavLink to="/Blog" className={({ isActive }) => (isActive ? "activeNav" : "")}>   Blog           </NavLink>

====================================================================================================================================================          
      
Relative Link :  یعنی ما نیاز داریم که بیایم و دو تا آدرس یا مسیر جدید رو با استفاده از لینک ها در دوتا کامپوننت دیگه به وجود بیاریم برای این منظور  از این ویژگی استفاده میکنیم که فقط کافیه دیگه مسیر هارو با  
به وجود نیاریم  / 

            <div>
            <Link to="Panel">Panel</Link>     Blog / Panel
            <Link to="Login">Login</Link>      Blog / Login
            <h1>Blog</h1>
           </div>

====================================================================================================================================================

Nested Routes & Outlet : یعنی ما بیایم و یک سری از مسیر هامون رو به صورت تو در تو بنویسیم به طوری که آدرس پرنت به عنوان پرنت یا قبل  مسیر فرزند اش بیاد و قرار میگره

<Route path="/Login" element={<Login />}>     <Route path="Emad" element={<Emad />} />  </Route>
             
export default function Login() {    return (     <h1>     Login <Outlet />         </h1>     ); }      جایگزین میشه  Outlet    که دقیقا کامپوننت عماد میاد و  در داخل 
 
====================================================================================================================================================

Not Found Page :  برای درست کردن همچین صفحه ای فقط کافیه یک مسیر درست کنیم به صورت کد پایین 

<Route path=" * " element={ < NotFoundpage />} />

====================================================================================================================================================

Multiple sets of Routes :   هاشون یکیه و میتونن به صورت مستقل و جدا از هم اجرا بشن path ما در داخل یک کامپوننت میتونیم بیایم و چندین مسیر داشته باشیم که 

<div>  <aside> <Routes> <Route path="/" element={<Home />}>     <Route path="/Panel" element={<Panel />} /> </Route> </Routes> </aside>
<main> <Routes> <Route path="/" element={<Blog />}>  <Route path="/Emad" element={<Emad />} />   </Route>   </Routes> </main>  </div>        ) }
 
استفاده میکنیم index  با هم دیگه اجرا می شوند حالا اگر بخایم که در این مسیر ها مسیر های فرزندش که مثلا چند تا هستند یکی به صورت پیش فرض بیاد و اجرا بشه میایم و از  Blog و هم  Home  که در این مثال هم 

<Routes>
<Route path="/" element={<Blog />}>
      <Route index  element = { < Panel /> } />
      <Route path="/Panel" element={<Panel />} /> 
      <Route path="/Emad" element={<Emad />} /> 
</Route>  
</Routes>

====================================================================================================================================================
*/
