/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

اضافه میشه که ما میایم و یکسری کد رو اضافه میکنیم و اون فانکشینالیتی اون کدمون رو بهش اضافه میکنیم enhancer میومد و یکسری اطلاعات رو به ما میداد این قابلیت ها توسط react dev tool قابلیت هایی

enhancer : تعریف کردیم رو combineReducer ما هستش که گفتیم بهتر هستش بیایم و اون تابعی که به عنوان rootReducer  ما میاد و 3 تا پارامتر ورودی میگیره اولین مقداری که میگیره createStore تابع 
رو میگیره که میاد enhancer  هامون داده میشه حالا به عنوان پارامتر سوم هم میاد و یک Reducer میگیره که به عنوان مقدار اولیه  preloadedStore  این جا قرارشون بدیم و به عنوان مقدار دوم هم میاد و یک
به ما میده تا هر تغیری که خواستیم createStore اضافه میکنه و در اصل یک تابع است که به عنوان پارامتر ورودی خود تابع Api ما اضافه میکنه و اون مواری که نیاز داریم رو به store و یکسری قابلیت رو به داخل 
رو تغیر بدیم dispatch و getState  روشون انجام بدیم مثلا اگر خواستیم نوع کارکرد 

const  store = createStore( rootReducer ,  preloadedStore , enhancer )

const  enhancer = ( ... arg )=> {  console.log(args ) ; }  رو پاس میده بهش  createStore  خوب ما دقیقا این جا می بینیم که میاد و خود تابع

,و تابعی رو که به عنوان خروجی میاد و به ما پاس میدهد به عنوان خروجی این 3 تا پارامتر خودش رو بر گشت میده

const enhancer = createStore => { 
     return ( rootReducer , preloadedState , enhancer ) => {
          const store = createStore(rootReducer , preloadedState , enhancer )
         بیاریم و یکسری تغیرات رو بهش اضافه بکنیم  store  حالا این جا هر بلایی بخایم میتونیم سر
     }
}

enhancer  اون هارو قرار بدهیم همچنین اگر نیاز داشتیم تعداد زیادی از  addons / enhancer  درست کنیم بهتر هستش که بیایم و در مسیر enhancer نکته : اگر نیاز داشتیم که خودمون بیایم و در برنامه امون یکسری
خود ریداکس استفاده میکنیم compose هارو به پروژه امون اضافه کنیم از تابع

====================================================================================================================================================

 هامون رو بیایم و به شیوه زیر تعریف اشون بکنیم مثال برای نحوه تعریف گزاری preloadedStore نکته : بهتر هستش که 

const  preloadedStore = {  todos : { entities : {   1 : { id : 1 , text : "text 1" , completed : true , color : " red " }, 2 : { id : 2 , text : "text 2" , completed : false , color : " green " }  } } }   

====================================================================================================================================================

ها  enhancer  مثال برای پیاده سازی 

export const logActions = createStore => { 
    
     return ( rootReducer , preloadedState , enhancer ) => {    

         const  store = createStore ( rootReducer , preloadedState , enhancer ) 
       
          function logActions ( action ) {         const result = store.dispatch ( action )     console.log ( action )      return result       }
       
          return { ... store , dispatch : logActions   }       }         }   
  

export const logState = createStore => {

     return (rootReducer, preloadedState, enhancer) => {

        const store = createStore(rootReducer, preloadedState, enhancer)

        function logState( ) {   const state = store.getState()     console.log(state)     return state         }
            
        return { ...store, getState: logState   }     }    }

 const     enhancers     =    compose(logActions, logState)             const store = createStore(rootReducer, preloadedState, enhancers)

====================================================================================================================================================
*/
