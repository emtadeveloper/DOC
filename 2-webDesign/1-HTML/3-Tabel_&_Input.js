/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

یکی از کاربرد هاش برای درست کردن فاکتور ها هستش

<table> : برای استفاده از جدول ها
<colgroup>
   <col span="2" style="background-color : red" >
   <col  style="background-color : yellow " >
<colgroup>
<caption> از این تگ برای نمایش عنوان استفاده می شود
<thead>
        <tr>  برای درست کردن ردیف ها       
            <th>Month</th> برای درست کردن هدر جدول
           <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr> برای درست کردن ردیف ها 
            <td>January</td>  برای درست کردن سلول های جدول
            <td>$100</td>
        </tr>
    </tbody>
    <tfooter>
        <tr> برای درست کردن ردیف ها 
            <td>February</td>
            <td>$80</td>
        </tr>
    </tfooter> 
    </table>

.container {    width : 500px    overflow-x : auto     resize horizontile }
 
.table {    width : 100%    tabel layout : fixed }
 
.td , th {   overflow : hidden. text-overflow : ellipsos   white-space : nowrap }
  
استفاده بکنیم tabel layout : fixed نکته هنگام استفاده برای بهتر ریسپانسیو نشون دادن جدول امون بهتر هستش که بیای و از 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

input مهترین تگ 

رو به اینپوت امون بیایم و وابسته اش بکنیم label ما با استفاده از این تگ می توانیم یک متن  

form : برای ارسال و دریافت اطلاعات به سمت سرور  action="#"   method   enctype  onsubmit = "return false"

action="/action_page.php"  از این صفت برای تایین محل ارسال فرم میاد و استفاده می شود که معمولا نام فایل هستش که بیشتر بچه های بک اند درگیر اش می شوند
    
method ="get" / "post" ( قراره یک دیتا بگیره و برگردونه )  میگه دیتا چه کنم بفرستم یا باید یک چیزی برگرده

enctype برای بحث رمز گزاری هستش و فقط موقعی استفاده میکنیم که متد ما به صورت پست هستش و چند تا مقدار داره

    - application / x-www-form-urlencoded : مقادیر رو تبدیل به هگزادسیمال و فاصله هارو تبدیل به پلاس میکنه
    - multipart / form-data : هیچ عملی نمیکنه و رمز نگاری نمیشه و همون رو ارسال میکنه
    - text / plane : رمز نگاری نمیکنه ولی فاصله هارو تبدیل به پلاس میکنه

این تگ کاربردش بیشتر برای مواقعی هستش که ما میومدیم  و به صورت خام و جی اس خام استفاده میکردیم و برای ارسال اطلاعات میومدیم و استفاده میکردیم 

< input type=""  >   :   Atribute type : مهترین صفت که انواع مختلفی ام دارند

    type

        1- range              6-submit         11- text                  
        2- email              7-search          12- file
        3- tel                   8-radio             14- password
        4- checkbox       9-data              15- number
        5- button            10-color           16- url

6-submit  /    5- button   این نوع داده ها استفاده میکنیم که بخایم یک دیتایی رو ارسال بکنیم و زمانی submit  این دو تا تایپ شبیه به هم دیگه هستند و زمانی از 
عمل میکنه که داخل تگ فرم باشه

    accept : برای این که مشخص کنیم اینپوت ما چه فرمت هایی بیاد بگیرد رو مشخص میکنیم
    autoComplete : خودکار پیشنهاد دادن
    autofocus : به طور پیش فرض فعال بودن اینپوت
    checked : به طور خودکار تیک فعالی خوردن
    disable : غیرفعال بودن 
    required : پیغام خطا دادن برای پر نکردن توسط کاربر و اجباری حتما باید پرش بکنی
    readonly : فقط خواندنی کردن اینپوت زمانی که روش کلیک میکنیم کلیک میشه ولی نمیشه بیایم و تغیر اش بدیم
    pattern  : الگو برای استفاده از ریجکس ها برای اعتبار سنجی میتونیم بیایم و استفاده بکنیم
    title  :  عنوان داد برای هشدار
    minlenght ; کمترین تعداد کارکتر ها
    maxlenght :  بیشترین تعداد کاراکتر ها
    placeholder 
    value مقدار اصلی
    multiple : زمانی که این صفت رو بهش میدیم میتونیم بیایم و چند تا اینپوت رو انتخاب بکنیم وقتی که میاد و باز میشه
    spellcheck="true" چک کردن درست یا غلط بودن املایی انگلیسی 

نمونه کد زیر برای درست کردن یک  اینپوت با داشتن چند تا گزینه به صورت پیش فرض هستش  برامون یک جور منو ساده میاد و درست میکنه

        <input type="text" spellcheck="true" placeholder="enter something"  list="planets"/>
        <datalist id="planets">
            <option value="emad"></option>
            <option value="ali"></option>
            <option value="Mobina"></option>
            <option value="kimia"></option>
        </datalist>

<textarea> </textarea> : به معنی ایجاد فیلد با تعداد کاراکتر زیاد مورد استفاده میگیرد و از عناصر مهم در فرم ها هست 

<label> <label>  برای ایجاد یک نوع برچسب  در فرم هامون استفاده میشود

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
