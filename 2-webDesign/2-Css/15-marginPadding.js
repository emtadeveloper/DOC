/**
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

برای موقعی استفاده میشه که بخایم به لیست هامون استایل پیش فرض اشونو بگریم

list-style =  [ <'list-style-type'> || <'list-style-position'> || <'list-style-image'> ]

list-style-type =  none   /  circle  / square    ....                  ظاهر و نوع علامت هایی که در پشت آیتم های یک لیست قرار می گیرند را مشخص می کند

list-style-position =  none  /inside / outside* / inherit    تعیین می کند که نشانه گر آیتم های یک لیست بیرون از باکس اصلی عنصر یا داخل آن باشد

list-style-image = none /  url('images/img.png');   می توان برای نشانه گر آیتم های یک لیست تصویر قرار دا د

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

z-index : ترتیب قرار گرفتن عناصر موقعیت دار را تنظیم میکند    //      cursor: pointer;

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Padding & Margin :  top   right   bottom   left        Padding & Margin  top / bottom    left / right

margin collapsing :  این رفتار موقعی اتفاق میوفته که ما میایم و مثلا به فرزندان یک پرنت ای مارجین میدیم و یهویی اون پرنت میاد و از بالا یک مارجین یا ارتفاعی رو میگیره و دلیل این اتفاق
هم دیگه هستند کدوم یکی شون مارجین بیشتری داره و همون رو اعمال میکنه sibling  رفتاری هستش که مرورگر ها انجام میدهد و به این شکل کار میکنه که میاد و نگاه میکنه که دو تا المانی که 
و اگر مقدار منفی بود اون که کوچیک تر هستش رو اعمال میکنه

حالا اگر ما خواستیم همچین خاصیتی رو نداشته باشیم باید چکار بکنیم باید یکی از این موارد زیر رو به پرنت اش اعمال بکنیم رو بیایم و اعمالشون بکنیم

border /  padding / postion / overflow / hidden // flex : این خاصیت برای موقعی هستش که میخایم عناصر فرزند اش بهش استایلی اعمال نشه

اتفاق میوفتند  همچنین یکی از شرایط ایجاد شدن اش این هستش bottom و top هستش همچنین فقط برای مارجین های float و position : absulote  این خاصیت یک استثنا داره که مربوط به 
جلوی اعمال شدن اون رو بگیریم span وجود نداشته باشه داخل اون یعنی میتونیم با اضافه کردن یک تگ  content  که 

برای فهم بهتر این تیکه کد رو در نظر بگیر

       <!-- <p class="outer-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis</p> -->
        <!-- <p class="outer-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis Praesentium omnis</p> -->
        <div class="paper">
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis</p>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis Praesentium omnis</p>
        </div>

.paper {    background-color: mediumslateblue;   color: #ffff;      border: 1px solid  coral;    }

.paragraph {    margin: 1rem 0;   }

.outer-paragraph{    margin: 1rem 0;       }

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
