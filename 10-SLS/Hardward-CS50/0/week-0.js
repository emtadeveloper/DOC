/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

What is computer science?   Computer science is fundamentally problem solving, but we’ll need to be precise and methodical.
علوم کامپیوتر چیست ؟ علوم کامپیوتر اساسا روش حل مسئله است اما باید دقیق و هوشمند باشد

Problem Solveing :  We can think of problem solving as the process of taking some input (a problem we want to solve)
and generate some output (the solution to our problem )

ما میتونیم حل مسئله رو به عنوان فرآیند دریافت مقدار ورودی ( مسئله ای که میخاهیم حل کنیم ) و تولید برخی خروجی ها ( راه حل مشکل خود ) در نظر بگیرم

To begin doing that, we’ll need a way to represent inputs and outputs, so we can store and work with information in a standardized way.
برای شروع انجام این کار ما به راهی برای نمایش ورودی ها و خروجی ها نیاز داریم تا بتوانیم اطلاعات را به روشی استاندارد ذخیره کرده و با آنها کار کنیم

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Representing numbers   ============================================================================================================

1- unary : To count the number of people in a room, we might start by using our fingers, one at a time. This system is called unary
where each digit represents a single value of one
میگویند که  unary برای شمارش تعداد افراد درون یک اتاق ممکن است با استفاده از انگشتان خودمون یکی یکی شروع کنیم به شمارش  به این سیستم شمارش
هر رقم یک مقدار واحد را نشان میدهد

2- decimal : To count to higher numbers, we might use ten digits, 0 through 9, with a system called decimal
این کار رو انجام بدهیم decimal برای شمارش اعداد بالاتر ممکن است از ده رقم 0 تا 9 با سیستمی به نام اعشار 

3- binary :  Computers use a simpler system called binary, with just two digits, 0 and 1
کامپیوترها از سیستم ساده تری به نام باینری استفاده می کنند که فقط دو رقم 0 و 1 دارد.

Each binary digit is also called a bit   که به هر یک از این رقم ها یک بیت میگویند

001  :   numbers 1  / 010 : numbers 2  /   011 : number 3 /   100 :  number 4 / 101: number 5 /  110 : number 6 /  111 : number 7

Since computers run on electricity, which can be turned on or off, we can simply represent a bit by turning some switch on or off to represent a 0 or 1
از آنجایی که رایانه‌ها با برق کار می‌کنند  که می‌توان آن را روشن یا خاموش کرد  می‌توانیم به سادگی با روشن یا خاموش کردن یک سوئیچ برای نمایش ۰ یا ۱  مقداری را نشان دهیم

Inside modern computers, there are billions of tiny switches called transistors that can be turned on and off to represent different values.
در داخل کامپیوترهای مدرن  میلیاردها سوئیچ کوچک به نام ترانزیستور وجود دارد که می‌توان آن‌ها را روشن و خاموش کرد تا مقادیر مختلف را نشان دهد

And the pattern to count in binary with multiple bits is the same as the pattern in decimal with multiple digits.
و الگوی شمارش به صورت دودویی با چند بیت همانند الگوی اعشاری با چندین رقم است

For example, we know the following number in decimal represents one hundred and twenty-three.
به عنوان مثال  می دانیم که عدد زیر در اعشار نشان دهنده صد و بیست و سه است

The 3 is in the ones place, the 2 is in the tens place, and the 1 is in the hundreds place.
3 در مکان یک ها  2 در مکان ده ها و 1 در مکان صدها قرار دارد. So 123 is 100×1 + 10×2 + 1×3 = 100 + 20 + 3 = 123.

Each place for a digit represents a power of ten, since there are ten possible digits for each place. The rightmost place is for 100, the middle one 101, 
and the leftmost place 102 هر مکان برای یک رقم نشان دهنده توان ده است  زیرا ده رقم ممکن برای هر مکان وجود دارد. سمت راست ترین مکان برای 100  وسط 101 و سمت
چپ ترین مکان 102

10 pow 2  /  10 pow 1 / 10 pow 0

25 ÷  2  = 12 - 1 / 12 ÷  2  =  6 - 0  /  6  ÷  2  =  3 -  0 / 3  ÷  2  =  1  - 1 / 1  ÷  2  =  0 -  1

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Text ============================================================================================================================

To represent letters, all we need to do is decide how numbers map to letters. Some humans, many years ago, collectively decided on a standard mapping of
numbers to letters. The letter “A”, for example, is the number 65, and “B” is 66, and so on. In binary, the letter “A” is the pattern
برای نمایش حروف  تنها کاری که باید انجام دهیم این است که تصمیم بگیریم اعداد چگونه به حروف انطباق پیدا کنند. برخی از انسان ها سال ها پیش به طور جمعی تصمیم گرفتند تا نگاشت 
A = 65  B = 66  اعداد به حروف را انجام دهند. به عنوان مثال حرف

A        B        C        D        E        F        G        H        I
65     66       67      68      69      70      71       72     73

file format, different programs can interpret and display the same bits as numbers or text
فرمت فایل، برنامه های مختلف می توانند همان بیت ها را به عنوان اعداد یا متن تفسیر و نمایش دهند

The standard mapping, ASCII, also includes lowercase letters and punctuation اسکی مثل یک نقشه استاندارد هستش که شامل همه حروف از کوچک و بزرگ و علائم نگارشی هست

When we receive a text message, we might be getting patterns of bits that have the decimal values 72, 73, and 33. Those bits would map to the letters HI!.
نگاشت می‌شوند HI وقتی یک پیام متنی دریافت می‌کنیم، ممکن است الگوهایی از بیت‌ها دریافت کنیم که دارای مقادیر اعشاری 72، 73، و 33 هستند. این بیت‌ها به حروف 

And the sequences of bits we receive would look like 01001000, 01001001, and 00100001, with 8 bits for each character
و دنباله بیت هایی که دریافت می کنیم مانند 01001000، 01001001، و 00100001 خواهند بود، با 8 بیت برای هر کاراکتر

And we might already be familiar with using bytes as a unit of measurement for data, as in megabytes or gigabytes, for millions or billions of bytes
و ممکن است قبلاً با استفاده از بایت ها به عنوان واحد اندازه گیری داده ها، مانند مگابایت یا گیگابایت، برای میلیون ها یا میلیاردها بایت، آشنا باشیم

Other characters, such as letters with accent marks and symbols in other languages, are part of a standard called Unicode, which uses more bits than 
ASCII to accommodate all these characters.

ASCll  : یک استاندارد امریکایی برای تبادل اطلاعات هستند

ASCII کاراکترهای دیگر، مانند حروف با علائم تاکیدی و نمادها در زبان‌های دیگر، بخشی از استانداردی به نام یونیکد هستند که از بیت‌های بیشتری نسبت به
برای قرار دادن همه این کاراکترها استفاده می‌کند.

When we receive an emoji, our computer is actually just receiving a number in binary that it then maps to the image of the emoji based on
the Unicode standard.
وقتی یک ایموجی دریافت می کنیم، کامپیوتر ما در واقع فقط یک عدد را به صورت باینری دریافت می کند که سپس بر اساس استاندارد یونیکد به تصویر ایموجی نگاشت می شود

And it turns out that different companies that create software for their devices will have slightly different images that represent each emoji, since
only the descriptions have been standardized
و به نظر می رسد که شرکت های مختلف که نرم افزاری برای دستگاه های خود ایجاد می کنند، تصاویر کمی متفاوت دارند که نشان دهنده هر ایموجی است، زیرا فقط توضیحات
استاندارد شده است

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Images, video, sounds =============================================================================================================

With bits, we can map numbers to colors as well. There are many different systems to represent colors, but a common one is RGB, which represents colors by
indicating the amount of red, green, and blue within each color
است که رنگ ها را با نشان دادن مقدار قرمز، سبز RGB  بیت ها می توانیم اعداد را به رنگ ها نیز نگاشت کنیم. سیستم های مختلفی برای نمایش رنگ ها وجود دارد، اما یکی از رایج ترین آنها  
و آبی در هر رنگ نشان می دهد

For example, our pattern of bits earlier, 72, 73, and 33 might indicate the amount of red, green, and blue in a color. (And our programs would know those bits 
map to a color if we opened an image file, as opposed to receiving them in a text message)

به عنوان مثال، الگوی بیت های قبلی ما، 72، 73، و 33 ممکن است میزان قرمز، سبز و آبی را در یک رنگ نشان دهد
(و برنامه های ما اگر یک فایل تصویری را باز کنیم، به جای دریافت آنها در پیام متنی، آن بیت ها را به یک رنگ می شناسند )

Each number might be 8 bits, with 256 possible values, so with three bytes, or 24 bits, we can represent millions of colors.
Our three bytes from above would represent a dark shade of yellow:

هر عدد ممکن است 8 بیت با 256 مقدار ممکن باشد، بنابراین با سه بایت یا 24 بیت، می توانیم میلیون ها رنگ را نشان دهیم. سه بایت ما از بالا نشان دهنده سایه تیره زرد است

The dots, or squares, on our screens are called pixels, and images are made up of many thousands or millions of those pixels as well. So by using three bytes to
represent the color for each pixel, we can create images. We can see pixels in an emoji if we zoom in, for example:

نقطه ها یا مربع های روی صفحه نمایش ما پیکسل نامیده می شوند و تصاویر نیز از هزاران یا میلیون ها پیکسل تشکیل شده اند. بنابراین با استفاده از سه بایت برای نمایش رنگ برای 
هر پیکسل، می‌توانیم تصاویری ایجاد کنیم. برای مثال، اگر بزرگنمایی کنیم، می توانیم پیکسل ها را در ایموجی ببینیم

Videos are sequences of many images, changing multiple times a second to give us the appearance of motion, as a flipbook might.
ویدئوها دنباله‌ای از بسیاری از تصاویر هستند که چندین بار در ثانیه تغییر می‌کنند تا ظاهر حرکت را به ما ببخشند، همانطور که یک تلنگر ممکن است

Music can be represented with bits, too. MIDI is one such format which represents music with numbers for each of the notes and their duration and volume.
یکی از این فرمت ها است که موسیقی را با اعداد برای هر یک از نت ها و مدت زمان و حجم آنها نشان می دهد. MIDI موسیقی را می توان با بیت ها نیز نمایش داد

So all of these ideas are just zeroes and ones, interpreted and used by software we’ve written to interpret them in the ways that we want.
بنابراین همه این ایده‌ها فقط صفر و یک هستند که توسط نرم‌افزاری که ما نوشته‌ایم برای تفسیر آن‌ها به روشی که می‌خواهیم تفسیر و استفاده می‌شوند

There are other formats, some of which use compression (mathematical ways to represent some data with fewer bits), or some which 
might be containers that store multiple types of data together.

فرمت های دیگری نیز وجود دارد که برخی از آنها از فشرده سازی استفاده می کنند یا برخی که ممکن است محفظه هایی باشند که چندین نوع داده را با هم  ذخیره
(روش های ریاضی برای نمایش برخی داده ها با بیت های کمتر)،  می کنند

And since there are many companies and groups developing software, we have lots of different file formats in existence, each with their
own ways of representing data. But there are also organizations that work on some consensus, like the one responsible for maintaining
the Unicode standard

و از آنجایی که شرکت‌ها و گروه‌های زیادی در حال توسعه نرم‌افزار هستند، ما فرمت‌های فایل مختلف زیادی داریم که هر کدام روش‌های خاص خود را برای نمایش داده‌ها دارند
اما سازمان هایی نیز وجود دارند که بر روی برخی اجماع کار می کنند، مانند سازمانی که مسئول حفظ استاندارد یونیکد است

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Algorithms =======================================================================================================================

Now that we can represent inputs and outputs, we can work on problem solving. The black box that transforms inputs to outputs contains algorithms,
step-by-step instructions for solving problems:

اکنون که می‌توانیم ورودی‌ها و خروجی‌ها را نشان دهیم، می‌توانیم روی حل مسئله کار کنیم. جعبه سیاهی که ورودی ها را به خروجی تبدیل می کند شامل الگوریتم ها، 
دستورالعمل های گام به گام برای حل مسائل است

We might have an application on our phones that store our contacts, with their names and phone numbers sorted alphabetically. The old-school equivalent 
might be a phone book, a printed copy of names and phone numbers. 

ممکن است برنامه‌ای در تلفن‌هایمان داشته باشیم که مخاطبین ما را با نام و شماره تلفن آنها بر اساس حروف الفبا مرتب می‌کند. معادل مدرسه قدیمی ممکن است یک دفترچه تلفن
یک نسخه چاپی از نام ها و شماره تلفن باشد
 
We might flip through the book two pages at a time, but this algorithm will not be correct since we might skip the page with our name on it

ممکن است کتاب را هر بار دو صفحه ورق بزنیم، اما این الگوریتم صحیح نخواهد بود زیرا ممکن است صفحه ای را که نام خود را روی آن درج شده است رد کنیم

Another algorithm would be opening the phone book to the middle, decide whether our name will be in the left half or right half of the book
because the book is alphabetized  and reduce the size of our problem by half. We can repeat this until we find our name, dividing 
the problem in half each time

الگوریتم دیگر این است که دفترچه تلفن را تا وسط باز کنید، تصمیم بگیرید که نام ما در نیمه چپ یا نیمه راست کتاب باشد (چون کتاب حروف الفبا است)،
و اندازه مشکل ما را به نصف کاهش دهید. می توانیم این کار را تا زمانی که نام خود را پیدا کنیم تکرار کنیم و هر بار مشکل را به نصف تقسیم کنیم

We can visualize the efficiency of each of those algorithms with a chart

ما می توانیم کارایی هر یک از آن الگوریتم ها را با یک نمودار تجسم کنیم

Our first algorithm, searching one page at a time, can be represented by the red line: our time to solve increases linearly as
the size of the problem increases. n is a number representing the size of the problem, so with n pages in our phone books,
we have to take up to n steps to find a name.

اولین الگوریتم ما جستجوی یک صفحه در یک زمان، را می توان با خط قرمز نشان داد: زمان ما برای حل به صورت خطی با افزایش اندازه مسئله افزایش می یابد
مرحله را برای یافتن یک نام طی کنیم n صفحه در دفترچه تلفن ما باید تا n عددی است که اندازه مشکل را نشان می دهد، بنابراین با  n

The second algorithm, searching two pages at a time, can be represented by the yellow line: our slope is less steep, but still linear. 
Now, we only need (roughly) n / 2 steps, since we flip two pages at a time.

n/2  الگوریتم دوم، جستجوی دو صفحه در یک زمان، را می توان با خط زرد نشان داد: شیب ما کمتر تند است، اما همچنان خطی است. اکنون، ما فقط به
مرحله (تقریباً) نیاز داریم، زیرا هر بار دو صفحه را ورق می زنیم

Our final algorithm, dividing the phone book in half each time, can be represented by the green line, with a fundamentally different
relationship between the size of the problem and the time to solve it. If the phone book doubled in size from 1000 to 2000 pages, 
we would only need one more step to find our name.

الگوریتم نهایی ما که هر بار دفترچه تلفن را به نصف تقسیم می‌کند، می‌تواند با خط سبز نشان داده شود، با یک رابطه اساسی متفاوت بین اندازه مشکل
و زمان حل آن. اگر اندازه دفترچه تلفن از 1000 به 2000 صفحه دو برابر می شد، برای یافتن نام خود تنها به یک مرحله دیگر نیاز داریم

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
