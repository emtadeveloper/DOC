/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

redux dev tools : از دو بخش تشکیل شده اولی یک افزونه برای مرورگر و دومی هم یک پکیج برای برنامه امون هستش که باید نصب کنیم که میاد و تاریخچه ی همه اکشن هارو برای ما نگه داری میکنه و میتونیم
امون چگونه میاد و تغیر میکنه رو می بینیم state مسیر هایی که 

npm install --save redux-devtools-extension اولین کار این هستش که بیایم و این پکیج رو افزونه اش رو نصب کنیم و بعد بیایم و اونو به برنامه امون اضافه بکنیم

امون اضافه میکنیم store و بعد میایم و خطوط زیر رو به فایل 

import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools( );  const store = createStore(rootReducer, composedEnhancer);     export default store;

که به ما نشون داده میاد و به ما میگه که چطوری این وضعیت با قبلی اش چه تفاوت هایی داره diff  و با استفاده از اون قسمت     

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

immr js :هامونم وقتی میایم و از اون ها استفاده میکردیم باید طوری شرط هارو قرار   reducer  و نباید تغیر بکنند و داده های ما در داخل   im-mutable  همین طور که گفته شد ما بعضی مقادیری داریم که از نوع 
رو تغیر اش ندیم حالا این سری از پکیج ها اومدن که با یک پرفورمنس بهتر همین کار رو برای ما انجام بدن و حجم کد های مارو کمتر کنند که شیوه کار اون ها به این شکله که مثلا ما state  میدادیم که مستقیما مقدار 
Draft یک نامه داریم که میخایم تغیر اش بدیم اول میایم و یک نسخه کپی میگیرم وبعد اون تغیرات امون رو انجام میدهیم و در نهایت اون رو با نسخه اولیه اش میایم و مقایسه میکنیم حالا این پکیج میاد و یک نسخه 
npm install immer   برامون ایجاد میکنه و ما هر تغیری لازم باشه رو اون میدیم و در نهایت خودش میاد و بهینه سازی و مقایسه رو انجام میده

const { produce } = require ( " immer " )    

رو انجام میدهد State امون رو به عنوان آرگومانت اول بهش میدیم و مقدار دوم هم یک تابع بهش میدیم که میاد و تغیرات رو State روش اول پیاده سازی این هستش که بیایم و یک مقدار اولیه یا 
 
const  baseState = [  { todo : "Learn typeScript" , done : true } , { todo : " Try immr " , done : false } ]
 
const nextState = produce(baseState ,     ( draft ) => { draft.push({ todo: "foo" })     draft [ 1 ].done = true } )       console.log(nextState)

روش دوم هم این هستش که بیایم و به عنوان پارامتر اول یک تابع رو پاس بدهیم برای مثال ما اگر قرار باشه به طور معمولی بیایم و یک تابع بنویسیم که آیتم های یک آرایه در ایندکس هاشون ضرب بکنه  میتونیم
به شیوه زیر عمل بکنیم

const  foo = [1 , 2 , 3 ]      const nextFoo = foo.map ( ( number , index ) => number * index ))   console.log(nextFoo)

حالا اگر بخایم بیایم و از این کتابخونه استفاده بکنیم

const   wrapper = produce(draft , index) => draft * index ))  const nextFoo = foo.map(wrapper)   console.log(nextFoo)

رو تعریف بکنیم به شکل زیر اون رو تعریف میکردیم reducer حالا مثال کاربردی اش اینه که وقتی میخاستیم بیایم و یک 

const initState = {  numbers : [ 1 , 2, 3 ] }

function reducer ( state = initState , action ){  
   switch(action.type)  {  

     case "addNumber" :
        return { ...state , numbers : [ ...state.numbers , action.payload ] 

      default : return state

    } } }

باز نویسی بکنیم  immr  حالا همین کد بالا رو بخایم با استفاده از 

const  immerReducer = produce((state , action) => { 
  switch ( action.type ) {
     case " addNumber " : state.numbers.push(action.payload ) 
    } } )

====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

reselect :  این پکیج توسط خود اعضای ریداکس توسعه داده شده با استفاده از این پکیج ما میتونیم بیایم و یکسری درایو دیتا داشته باشیم یعنی یکسری اطلاعات داخل دیتا داریم میخایم بیایم و یکسری از اون 
هارو فیلتر بکنیم یا محاسبه کنیم تعدادشون چقد هستش که این نوع اطلاعات رو بهشون میگند درایو دیتا که به ما کمک میکنه این موارد رو به صورت بهینه تری بیایم و انتخاب بکنیم در حالت کلی  اگر از این پکیج 
npm install reselect    استفاده بکنیم باعث خوانایی و افزایش پرفورمنس کد های ما می شود و اگر نیازی نباشه این عملیات ها تکرار نشه

  برای مثال ما برای فیلتر کردن به طور معمولی میایم و از این تابع استفاده میکنیم و حالا میخایم بیایم و اون رو یک خورده بهتر و بهینه تر با استفاده از این پکیج بنویسم

  //  به صورت معمولی

export const selectTodoEntities = state => state.todos.entities
 
const selectFilteredTodos = state => { 

  const todos = object.values(selectTodoEntities(state))

  const { state , colors } = state.filters 

  const showAll = status === statusFilters.ALL

  if ( showALL && colors.length === 0 ) {     return todos  } 

  const  showCompleted = status === statusFilters.completed
  return todos.filter(todo => {
    const statusFilter = showAll  ||  todo.completed === showCompleted
    const cololrsFilter = colors.length === 0 || colors.includes(todo.color)
    return  statusFilter &&  cololrsFilter      })   }
 
در اختیار ما قرار میدهد  و میاد و یک سری پارامتر رو به عنوان سلکتور های عادی دریافت میکنه که میتونیم به صورت جدا جدا createSelector این پکیج تابع اصلی اش رو از طریق  یک تابع به نام 
یا به صورت آرایه اون هارو پاس بدیم و بعد تمام خروجی های پارامتر های اولیه رو به عنوان پارامتر به یک تابع پاس میده که به عنوان آخرین پارامتر اون رو دریافت میکنه همچنین ما میتونیم از خروجی
دیگه به صورت تو در تو استفاده بکنیم  createSelector های 

import { createSelector } from "reselect"

selectTodoEntities = state => state.todos.entities

const selectTodos = createSelector(selectTodoEntities, ( todoEntities ) => Object.value(todoEntities )  )

خوبی که داره اگر تغیری نداشته باشیم بدنه تابع دیگه تغیری نمیکنه و آخرین مقدار  هایی که استفاده شده رو میاد و از اون ها استفاده میکنه

const selectedFilterdTodos - createSelector( selecteTodos , state => state.filters , (todos , filters ) => {
  
  const { state , colors } = filters 

  const showAll = status === statusFilters.ALL

  if ( showALL && colors.length === 0 ) {     return todos  } 

  const  showCompleted = status === statusFilters.completed
  return todos.filter(todo => {
    const statusFilter = showAll  ||  todo.completed === showCompleted
    const cololrsFilter = colors.length === 0 || colors.includes(todo.color)
    return  statusFilter &&  cololrsFilter    }) })

export const selectedFilterdTodoIds = createSelecto(   selectedFilterdTodos , filteredTodos = filteredTodos.map(todo => todo.id ) )

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
