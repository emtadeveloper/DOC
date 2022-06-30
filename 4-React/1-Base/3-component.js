/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

component :    به مجموعه ای از اجزا که کنار هم میان و قرار میگیرند  که به اون اجزای تشکیل دهنده میان و کامپوننت میگویند و کامپوننت ها باید بیان و هی ریز و ریز تر بشن و به اجزای  
رو تقسیم بکنیم به قسمت های مجزا که قابلیت استفاده  UI کوچک  تری تبدیل شوند و  و اصطلاحا از مفهوم اتم میان و استفاده میکنند و کامپوننت ها میان و به ما اجازه می دهند که بیایم و 
مجدد دارند و به صورت ایزوله هستند تبدیل اشون کنیم

نکته : ما اگر بیایم و یک تابع معمولی جاوااسکریپتی رو داشته باشیم که بیاد و یک ری اکت المنت رو برای ما برگردونه رو یک کامپوننت میگویند ما به طور کلی در ری اکت دو مدل کامپوننت داریم 

/////  functional  Component

function HelloWorld () {  return <div>Hello World! <div> }
const element = <HelloWorld/>
ReactDOM.render(element,document.getElementById('root'))

/////  class   Component  ری اکت برای نوشتن کلاس کامپوننت ها دو تا  شرط گزاشته برای انجام دادنش

1- extend React.Component      2- render( )    

classs SigninForm  extends React.Component {  render ( ) {   return <form> </from>   }  }
    
بنویسیم و زمانی که خواستیم بیایم و از camelCase نکته :  هر زمانی که ما میخاستیم که بیایم و المنت های معمولی در جاوااسکیرپت رو بیایم و استفاده  بکنیم اون هارو باید بیایم و به اصطلاحا به صورت  
بنویسیم اگر ما این کار رو نکنیم میاد و کامپوننت ما رو به صورت رشته ارسال میکنه pascal Case کامپوننت ها استفاده بکنیم اون هارو به صورت  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

this  :   به خود کانستراکتور امون اشاره نمیکنه برای همین میگند که اگه نیاز به این کار داشتیم یا اون تابع اتون رو بیاین و به صورت  this  در داخل کلاس کامپوننت هایی که ما میایم و تعریف میکنیم 
اشو بیاین و در داخل کانستراکتور اتون تعریف بکنید  binding  بنویسید یا هم اون قسمت های   arrow func 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------     

onClick و addEventLisitener ها استفاده میکنیم مثل  Event Handler این مشکل معمولا مواقعی اتفاق می افتد که ما مثلا از  
 
راه حل های برای رفع این موضوع

1- this.hanldeClick = this.handleClick.bind(this) که به صورت گلوبال تعریف میکنیم  بهتر هستش این مدل رو بیایم و در داخل کانستراکتور  و استیت هامون  استفاده بکنیم

2- onClick = {( )=> this.handleClick()} این راه حل زیاد توصیه نمیشود دلیل اشم اینه که هر نوبت که کامپوننت ما میاد و دوباره رندر میشه این عملیات و تابع اجرا میشه و پرفورمنس
رو میاره پایین ولی خوب زیاد و محسوس نیست و بهتر از اون استفاده نکنیم

3- handleClick = (event) =>{ } تعریف تابع امون به صورت فلش دار هستش   onClick ={this.handleClick} 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
