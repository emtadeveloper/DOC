/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

HOC : Higher Order Component 

 Higher Order function  هستش و جزوی از  ری اکت محسوب نمیشه این  مفهوم در واقع ا لهام گرفته شده از مفهوم  pattern    اصطلاحا   یک مفهوم یا یک الگو یا اصطلاح    HOC
در این مفهوم ما یک تابع داریم که میاد و یک کاپوننت میگیره و در نهایت یک کامپوننت بر میگردونه  بهتر هستش که متناسب با شرایط هامون   بیایم و در مرحله اول از HOF  یا اصطلاحا 
استفاده بکنیم از این مفهوم ما موقعی استفاده میکنیم که بخایم بیایم و یک کلاس کامپوننت رو  طوری بنویسیم که بتونیم بیایم و HOC ها استفاده بکنیم و بعد بیایم و از  custom Hook
ازش یک استفاده مجدد داشته باشیم از این الگو معمولا کتابخونه ها میان  استفاده  میکند که میان و  یک کامپوننت رو به عنوان ورودی میگیرند و بعد از اون استفاده میکنند مثال اصلیشم
در داخل آن استفاده مجدد کنیم همچنین مقادیر پراپسی که به صورت اتوماتیک میتونیم بیایم و از اون   HOC    کامپوننت ما با تبدیل یک کامپوننت به یک connect در ریداکس هستش
لاجیک به کار رفته برای اون تعریف میکنیم این مقادیر میان و به صورت پیش فرض پاس داده می شوند


export default function withControlledInput ( WrappedComponent )  {

return class extends Component {    
  
      state = {  input: ""  };

      handleChanges ( newValue ) {   this.setState ( {  input: newValue  })    }

          render ( )  {  const { foo,...extraProps } = this.props

                 return (    <WrappedComponent    {...extraProps}   value={this.state.input}  handleChanges={this.handleChanges.bind(this)}  />
                 
               );  }  }  }
        
               حالا برای استفاده کافی است فقط در کامپوننت ای که میخایم به شکل زیر در پایین اش قرار دهیم

function TextInput( { value,handleChanges } ) {

return (    <input   type="text"   value={value}  onChange={(e) => handleChanges(e.target.value)}   />    );  }
  
export default withControlledInput(TextInput)
      
رو نباید داشته باشد و فقط یک ورودی و یک خروجی یکسان رو باید بیاد و داشته باشد sideEffect هستش و هیچ نوع  اصطلاحا pure یک کامپوننت خالص  هستش  withControlledInput نکته : در کد بالا 

برای پاس دادن باقی پراپس هامون میتونیم بیایم و از به صورت زیر عمل بکنیم
و حتی میتونیم بیایم و بگیم که مثلا فیلتر بشه و پارامتر اولی پاس داده نشه  {...this.props}  در داخل HOC امون

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

حال هر موقع که خواستیم بیایم و استفاده بکنیم میتونیم بیایم و در داخل کامپوننت اصلی مون طبق مثال زیر بیایم و استفاده بکنیم

export default class App  extends Component {
  render(){
    return  (
                  <> 
                   <TextInput/>  
                   <TextInput/>
                   <TextInput/>
                  </>
    )  }  }
 
داده نمیشه بلکه میاد و به  کامپوننتی که برگشت داده میشه در TextInput خوب حالا در این مرحله اگر قرار باشه بیایم و پراپسی رو پاس بدیم این پراپس دیگه مستقیما به 
داده میشه  withControlledInput 

with  or  get  معمولا از دو تا راه استفاده میکنیم HOC برای نام گزاری 

with زمانی استفاده میکنند که یک فانکشنالیتی رو میاد و اضافه  میکنه
get  زمانی که یک دیتا ای رو پاس میدهند

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
