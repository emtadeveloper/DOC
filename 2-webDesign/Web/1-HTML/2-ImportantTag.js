/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

a    برای لینک ها    Atribute :    href : url web    target : _blank  /_sefl که پیش فرض روی همون صفحه انجام میدهد

download : اگه مثلا بیایم و در خصوصیت بالایی آدرس یک عکس  بدهیم با فعال کردن این خاصیت با کلیک روی اون عکس رو برای ما دانلود میکند
                                   
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

img    تصاویر       Atribute   :   src   / alt   / useMap
     
استفاده بکنیم به شیوه زیر برای حالت هایی Picture اگر ما یک عکس داشتیم که برای فرمت های مختلف باید اندازه اون میومد و تغیر پیدا میکرد  کافی هستش که بیایم و از تگ 
که ریسپانسیو  هستش 
 
<picture>
   <source media = "(min-width:968px)"  srcset="large_img.jpg">
   <source media = "(min-width:360px)"  srcset="small_img.jpg">
   <img src="default_img.jpg" alt="avatar">
</picture>

تا موقعی که اسکرول کاربر به اون قسمت مورد نظر نرسیده اون رو لود نمیکنه که توی بهبود سرعت سایت خیلی تاثیر داره loading="lazy" نکته : با دادن خاصیت  

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

strong  تاثیر در سئو دارد و برای بولد کردن متون میاد و استفاده می شود 

<p> My brother has <stong > Blue </strong> eyes </p>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

h1 : فقط یک بار و در آنبوردیگ میایم و استفاده میکنیم اندازه اون هم بهتر 40 پیکسل باشه   //   h2 و h3 : عنوان پست های سایت و اندازه اون ها هم میتونه بین 32 و 28 پیکسل باشه

نکته : این که میایم و یک بار از این تگ استفاده میکنیم دلیل اش این هستش که بحث استاندارد نویسی و اینکه تاثیر روی سئو به ما اجازه میده که بیایم و از اون استفاده بکنیم

h4 و h5 و h6 : just footer  و اندازه اون ها به ترتیب 28 و 20 و 16 پیکسل

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ul ... ol  :  برای درست کردن لیست هامون از این ها کمک میگیریم که به صورت مرتب و نامرتب هستش 

<ol start ="50" > <ol>  : لیست های مرتب میگه که از عدد چند بیام و شروع کنم برای شماره بندی کردن 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<p> </p>  paragraph انداره اون هم متوسط 13 پیکسل باشه میتونیم با قرار دادن این بیایم و مشخص کنیم که این

قسمت از متن رو نشه و اومد ترجمه کرد    translate = "no"     

contentEditable باعث میشه که با کلیک به روی اون بشه اون پاراگراف رو مجدد ویرایش کرد

<pre> این تگ یک تگ برادر بالایی هستش و تفاوتی که داره وقتی از تگ بالایی استفاده میکنیم اگر فاصله ای بین متن ها بزاریم اون هارو میاد و به هم دیگه میچسبونه
ولی داخل این تگ هر چه قدر فاصله بزاریم این هارو کنار هم قرارشون نمیده و بیشتر استفاده از اون این هستش که بیایم و کد نشون بدیم

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span>  </span> :  برای جدا کننده ها میایم و استفاده میکنیم

<i> </i>  : این تگ متون مارو به صورت ایتالیک میاد و قرار میدهد

<p> <i> To force  </i>   line breaks </p>

<smal> this is small tag </smal>

<a href= " link " > 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

br عمل میکنه و معمولا میاد و بین پاراگراف ها و به صورت مستقل عمل میکنه و بسته به نوع متن رو میشکونه میره خط بعدی Enter  میاد و منتقل میکنه به خط بعدی  و حالت 

<p> To force  <br>  line breaks </p>

//       hr میاد و یک خط زیر اون ها می کشد        //      button : name value  placeholder

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

abbr :  قرار میدهیم و خود متن امون رو هم جلوش می نویسیم title برای اینکه بیایم و یک تولتیپ رو بنویسیم از این تگ استفاده میکنیم  و توضیحات امون رو در خصوصیت 
 
برامون درست میکند tooltip میتوانیم بیایم و برای بقیه تگ های نوشتاری بیایم و بنویسیم  که میاد و یک جور title نکته : این خصوصیت 
  
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

blockqute : از این تگ برای موقعی استفاده میکنیم که بخایم بیایم و یک نقل قولی رو از یک سایت دیگه اعلام بکنیم

<p> سایت آموزشی فری لرن سایت آموزشی فری لرن سایت آموزشی فری لرن سایت آموزشی فری لرن لرن  </p>

<blockquote cite="https://en.wikipedia.org/wiki/Lionel_Messi">  بود که نوان بهترین بازیکن سال فوتبال جهان شد و اولین توپ طلایش را دریافت کرد  </blockquote> 

<p> سایت آموزشی فری لرن سایت آموزشی فری لرن سایت آموزشی فری لرن سایت آموزشی فری لرن لرن  </p>

q : این تگ هم کاربرد بالایی رو دارد فقط برای نقل قول های کوتاه تر میاد و استفاده میشه 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

bdo :  میاد و به طور کامل جهت یک متن رو عوض میکنه و بر عکس اش میکنه

adress  cite  sub/sup   / del ( این تگ میاد و یک خط روی متن میکشه )  / mark : میاد و با یک بگ کراند زرد اون رو نشون میده  / ins : میاد و یک خط زیر متن امون میکشه

em : ( میاد میگه که روی اون متن تاکید داره و به موتور جست جو این رو میگه)

kbd  : برای اینکه یک کلمه کیبورد رو بیایم و قرار بدهیم  استفاده میکنیم

code : برای قرار دادن کد در صفحه سند امون

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

video   and  audio    :    Atribute  :      control  / src  / loop  / autoplay / width /  height
   
poster ="banner.jpg"  با استفاده از این ویژگی میتونیم بیایم بگیم که قبل از لوود فیلم بیا و این رو نشون بده

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

link : در محل قرار گیری اون جای متا تگ ها هستش و برای اضافه کردن فایل های به یک سند مورد استفاده قرار میگیرد   rel : styleSheet      href : adress file
یکی دیگه از کاربرد های این تگ تاین فیو آیکون صفحه امون هم هستش 

<link rel ="icon"   type= " image/png "  size="96 * 96"  href="assets/landing/images/...."  ما میتونیم چند تا سایز مختلف رو هم به عنوان ریسپانسیو هم قرار بدیم
<link rel ="styleSheet"  type="text/css"  href="assets/landing/images/...."

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

progress  با استفاده از این تگ میتونیم بیایم و یک پروگرس بار برای خودمون درست کنیم و با استایل دهی هم اون رو بهتر کنترل کنیم

<progress class="planets" value="63" max="100"></progress>

meter   میتونیم بیایم و حالت بالایی رو شبیه سازی اش بکنیم
<meter min="0"  max="100" low="30"  heigh="75"  optimum="80" value="50"  />

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Base URL :  برای لینک های مکرری که داریم یکسری مخفف درست کنیم base ما میتونیم بیایم و با استفاده از تگ 

<head> <base href="https://codebyme.com/roadmap" target="_blank"></base> </head>

<body>  <a href="frontend">FrontEnd </a> <a href="frontend">FrontEnd</a>  </body>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

بارگزاری مجدد صفحه یا اصطلاحا رفرش اون ها که میاد  و بعد 3 ثانیه صفحه رو مجدد رفرش میکنه

<Meta http-equiv = "refresh" content = "3" />

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/
