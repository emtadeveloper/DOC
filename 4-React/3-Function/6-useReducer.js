/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

هستش یا اصطلاحا نوع مدیریت اشون هستش  ما هر موقع  که میایم و از state شبیه به هم دیگه هستند و یک کار رو انجام میدهند ولی یک سری تفاوت ها دارند و اون هم نحوه ی تغیر دادن useReducer و  useState 
امون رو تغیر state امون رو تغیر بدیم و هرچی رو به عنوان ارگومنت بهش بدیم میاد و اون state و دومی تابع یکه ما باهاش بتونیم بیایم و state استفاده میکنیم دو تا مقدار رو میاد و برای ما برگشت میدهد اولی useState
میدهد  

های ما به هم دیگه وابسته هستند یعنی اگر یک کدومشون تغیر کرد بهتره که یک کدوم state ما پیچیده هستند و یا اینکه state  ها استفاده بکنیم زمانی که مقادیر  useReducer  نکته : چه زمانی بهتر هستش که بیایم و از 
دیگه اشونم بیاد و تغیر بکنه بهتره که از این ها استفاده بکنیم

چطوری نمایش بده state  هستند که باید به ما نمایش داده بشه که به ما میگه state و دومی action رو تولید بکنیم که دو تا مقدار میگیره اولی userAction اول بدونین که باید بیایم و یک   useReducer  برای درک بهتر 

function  userAction (state , action ) {
    switch ( action.type ) {
        case  actionTypes.GET_POST_SUCCESS :
            return {   ...state ,  toast : {  t ype : "success"  , message : action.message  } ,  title : action.title   ,   loading : false  }
        case  actionTypes.GET_POST_REQUEST :
            return {   ...state ,  postId : action.postId  ,   loading : true  }
        default :
            break;    
    }
}

اشون بکن override یعنی بیا و تمام مقادیر قبلی قرار بده و بعد اون چیزایی که من نوشتم رو بیا و اصطلاحا   ...state  :  نکته   

خوب الان تابعی که اومدیم و نوشتیم رو اگر نگاه بکنین ما هر موقع اون دو نوع اکشن رو داشته باشیم میاد و یک آبجکتی که ما میخایم رو برامون  برگشت میدهد 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

useReducer : ما باید چگونه باشه و ایا لازم state رو دریافت میکنه  و تصمیم گیری میکنه که به بر اساس اکشنی که دریافت میکنه وضعیت  userAction  و یک  state  تابعی هستش که به عنوان پارامتر ورودی میاد و یک 
side Effect  هستند به این معنا که وقتی یک ورودی رو به اون پاس میدهیم یک خروجی  یکسانی رو دریافت میکنیم و ما نمیتونیم بیایم و در آن ها از pure Function  ها درواقع Reducer هستش که بیاد و تغیر بکنه یا نه   
هامون استفاده بکنیم ورودی های یکسان باید خروجی یکسان رو داشته باشیم حالا چرا باید اینجوری باشه چونکه اکشن های ثابت کاربر یکسری خروجی های یکسانی داره برای مثال کد بالا یک اکشن ثابت خروجی ثابت به ما 
میدهد

const  [ state ,  dispatch ] = useReducer( userAction , initState )

امون میاد و ازش استفاده میکنه userAction  امون اون اکشن هایی هستش که تابع   dispatch   خوب ما در اینجا 

اولیه از اون میتونیم استفاده میکنیم  state میتونه یک پارامتر اسومی هم بگیره که برای مقدار دهی  useReducer 

const init = (initState) => {  return initState }

const  [ state ,  dispatch ] = useReducer( userAction , initState, init )

کاری رو بیاد و انجام بده میتونیم بیایم و از اون استفاده بکنیم initState  بر اساس ورودی   init   حالا هر موقع که خواستیم داخل تابع 

برای مثال میتونیم بیا م و به صورت زیر استفاده بکنیم

const init = () => {  return { toast : { type : "info"  ,  message :  "  "  } ,  title : " "  , postId : 1  ,    loading : true  } }

const  [ state ,  dispatch ] = useReducer( userAction , undefined , init )

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const   initState = {   toast : { type : "info"  ,  message :  "  "  } ,  title : " "  , postId : 1  ,    loading : true  }
 
const actionTypes = {  GET_POST_SUCCESS : " get-post-success"  ,  GET_POST_REQUEST  :   "get-post-request"   }

function  userAction (state , action ) {
    switch ( action.type ) {
        case  actionTypes.GET_POST_SUCCESS :
            return {   ...state ,  toast : {  type : "success"  , message : action.message  } ,  title : action.title   ,   loading : false  }
        case  actionTypes.GET_POST_REQUEST :
            return {   ...state ,  postId : action.postId  ,   loading : true  }
        default :
            break;    
    } 
}

const  [ state ,  dispatch ] = useReducer( userAction , initState )

state : امون هستش که اومدیم و از اون استفاده کردیم هستش state دسترسی به مقادیر اولیه 

میاد و در اختیار ما قرار میگیرد state نوشتیم به عنوان  initState اولین بار که کامپوننت ما میاد و رندر میشه هرچیزی که به عنوان 

const  [ { postId , toast , title ,  loading } ,  dispatch ] = useReducer( userAction , initState )

useEffect( ()=> {
    fetch( ` https : // jsonplacehoder.typicode.com/posts/${state.postId}` )
    //fetch( ` https : // jsonplacehoder.typicode.com/posts/${postId}` )
    .then ( response => response.json( ) )
    .then( post => { 
           dispatch ( {  type :  actionTypes.GET_POST_SUCCESS  , title : post.title  ,   message : ` Post with id  ${ postId } loaded ` } )
    })
} , [ postId ])  // 1 

function handleLoading ( e ) {  
             dispatch ( { type:   actionTypes.GET_POST_REQUEST' , postId :  e.target.value  } ) 
         }    

نکات :          

وارد نکردیم دلیل اشم این هستش که ری اکت تضمین داده بین رندر هایی که اتفاق میوفته مقدار  dependence array // 1  استفاده کردیم ولی اون رو به عنوان پارامتر  dispatch  خوب ما در بالا اومدیم و از  
ثابت باشه و لازم نباشه اون رو به عنوان پارامتر های وابسته بیایم و پاس بدیم dispatch  

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
