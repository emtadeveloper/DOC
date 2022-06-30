/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

امون بیایم و چینش اون  هارو درست بکنیم و اگر میومد و تراز عمودی یا بر مبنای browser و یا  container  ما میومدیم و از فلکس باکس استفاده میکردیم وقتی میخاستیم به یک محتوا در راستای عرض 
میکرد برامون  صرفا عناصر فرزند نسبت به والدشون بودنو روی ارتفاع خودش اون فرزند نمیتونست کنترلی رو داشته باشه y محور 

حالا ما از گرید ها استفاده میکنیم برای موقعی که میخایم اون عنصر هم در راستای عرض و هم در راستای ارتفاع امون بیاد و به خوبی بتونه کنترل بکنه و جابه جا بشه و بیشترین استفاده از اون برای موقعی  هست
و یا پنجره ها هستند مثل گالری تصاویر و قابلیت مهم اون این هستش که میتونیم با پراپرتی هایی که به ما میدهد ستون هاشو زیاد و کم بکنیم قابلیتی که فلکس به ما نمیدهد tail که لایه هایی که شبیه به 
 
اگر گالری تصاویری که میخایم بیایم و مجددا پیاده سازیشون بکنیم ابعاد اون ها از لحاظ عرض یکی بود ولی ارتفاع متفاوتی داشتند میشه باز با فلکس باکس اون هارو پیاده سازی کرد ولی اگه هم از لحاظ عرض
اصلاا مشخص نیست ما با استفاده از گرید علاوه بر container و هم از لحاظ ارتفاع متفاوت باشند دیگه باید از گرید ها استفاده بکنیم انگاری از گرید موقعی استفاده میکنیم که طول و عرض المان ما در داخل 
ساختار بحث ریسپانسیو رو هم خیلی راحت میتونیم بیایم و پیاده سازی کنیم

coulmn  row  gap   line (امون شروع می شود و همیشه یک واحد بیشتر از تعداد ستون ها یا ردیف هامون هست gap فضایی که تعداد ستون ها و ردیف هامون رو مشخص میکنه و دقیقا میاد و از وسط )
 
display : grid
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

میتونیم بیایم و بگیریم container  پراپرتی هایی که محتوای

     1- grid-template-columns :   auto   px   %  fr 
      auto  یعنی میخایم عرض یکسانی داشته باشند نسبت به هم دیگه
      columns ما تعداد ستون هایی که تعریف میکنیم بر اساس فرزنداشه و اگر بیشتر از فرزنداش باشه اون فضای خالی رو براش ایجاد

     2- grid-gap  : grid-row-gap / grid-column-gap  برای ایجاد فاصله بین فرزندان میایم و از اون استفاده بکنیم یک جورایی به جای اینکه مارجین به پراپرتی فرزند بدیم از این استفاده میکنیم
       - grid-column-gap :  px فاصله بین ستون های عمودی
       - grid-row-gap  :  px  فاصله بین سطر ها  

     3- grid-template-rows  :  auto  px   %  fr  تعداد ردیف ها و مقدار ارتفاع ردیف هامون رو میتونیم با استفاده از این ویژگی مشاهده بکنیم   
     در نظر میگیرد auto  اگر تعداد ردیف هایی که مشخص میکنیم کم باشد یعنی مثلا ما 4 تا ردیف داشته باشیم ولی دو تا مشخص کردیم ما بقی ردیف هارو میاد و 

     4- justify-content : space-around / space-between / space-evently / center  وقتی از این ویژگی استفاده میکنیم المان امون اندازه محتواش میاد و فضا میگیره

     5- grid-template-area و پیکسل ها نمیتونیم بیایم و استفاده بکنیم و باید بیایم و از یکسری نام استفاده بکنیم auto میتونیم بیایم و تعداد ستون ها و ردیف هامون  رو بسازیم با این تفاوت که دیگه ازمقدار
     بدیهم  grid-area و بعد از مشخص کردن میتونیم به فرزند هامون بیایم و نامی که تایین کردیم رو به عنوان مقدار به 

    grid-template-area  :  ' area area .  .  . ' 
                                        ' area area .  .  . '   میاد و برای ما 5 تا ستون رو میگیره
    grid-area : area که میاد و برای ما به اندازه  دو تا ستون پر میکنه

استفاده بکنیم که مقادیر امون یکی باشه  از لحاظ اندازه auto  استفاده میکنیم خوب کاربرد کجاست وقتی ما میخایم بیایم و از مقدار fr   یا کسر کردن کم کردن که میایم و از   fragstion  مفهوم فرگشن
این کار رو بکنیم برای همین بهتر هستش که از فرگشن ها استفاده بکنیم همچنین اگر دفعات کد ما زیاد بود میتونیم بیایم و از جایگزین زیر auto ولی اگر بخایم بگی که یکی دو برابر دیگری باشه نمیتونیم با 
استفاده بکنیم  grid-template-columns : 1fr  1fr  1fr  1fr   //   grid-template-columns : repeat(4,1fr)
grid-template-columns : minmax(300,auto)   1fr  1fr با استفاده از این تابع میتونیم بیایم و برای ستون ها یا ردیف هامون یک حداقل حداکثر عرض یا ارتفاع رو مشخص بکنیم

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 هامون میدهیم item پراپرتی هایی که میایم و به  

     1- grid-column : grid-column-start / grid-column-end : المان با بیاد و از لاین اول امون شروع بشه و تا آخرین لاین امون میتونیم بهش مقدار بدیم البته اگر بیایم  و بیشتر از تعداد ستون هامون
     بهش مقدار بدیم باعث میشه که بیاد و به تعداد ستون هامون به طور خودکار اضافه بکنه ما کاری که باید بکنیم باید دقت کنیم که چه اعدادی به ستون هامون میدیم  اگر اون عددی که گفتیم اشغال بود میره
     به ردیف بعد و از اون لاین که گفته شروع میکنه

     2- grid-row : grid-row-start / grid-row-end  : دقیقا شبیه به بالایی هستش ولی میتونیم برای ردیف هامون بیایم و از اون ها استفاده بکنیم

     ما با استفاده از دو تا پراپرتی بالا میتونیم المان هامون رو بیایم و جابه جا کنیم و یا اندازه های اون هارو تغیر بدیم

بزرگ شو به اندازه یک ستون حالا اگر بهش عدد بگیم میگه بیا و از کجا به اندازه چند تا ستون و یا ردیف  بیا و شروع کن و فضا بگیر اگر عددی که بهش میدیم بیشتر از تعداد ستون ها باشه span  مفهوم 
grid-column 1 / span 5 میاد و به ستون های ما یکی اضافه میکنه به انداز ه 5 تا ستون بیا و فضا اشغال بکن 
  
     3-  grid-area :  start-row-line / start-column-line / end-row-line / end-column-line  خلاصه شده ی پراپرتی های بالا هستش 
          grid-row : 1 / span 2        grid-column : 1 / span 3        grid-area : 1 / 1 / span 2 / span 3

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 
برای وسط چیندن به  کل المان هامون با استفاده از گرید باید از
کد زیر استفاده بکنیم

.grid {
    display : grid
    place-item : center
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

*/
