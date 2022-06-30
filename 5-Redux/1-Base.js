/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================
 
Data Flow : در داخل کامپوننت امون نگه داری میکردیم و اگر نیاز بود که چند تا کامپوننت از اون استفاده میکردند state به معنی جریان داده ای هستش ما خوب قبلا وقتی از ریداکس استفاده نمیکردیم میومدیم و 
و باعث کندی برنامه میشه و رندر های مجدد رو ایجاد میکنه   dispatcher  استفاده میکردیم استفاده غیر اصولی از ریداکس اپلیکشن رو کند میکنه چون هی باید بیای و prop driling  میومدیم و از قابلیت
 
ما تا جای ممکن بهتر هستش که بیایم و برنامه هامون رو با استفاده از امکانات خود ری اکت  جلو ببریم 

Redux :  فیسبوک الگو گرفته شده است و موقعی که از اون استفاده میکنیم flux  هستش که اومده و از معماری  Data Flow برای کنترل جریان داده های برنامه امون یا state Mangment اصطلاحا یک
میاد و از کامپوننت های ما جدا میشه و در خارج اون ها مدیرت میشه state

کارش برای ما مدیرت و کنترلredux چه لاجیکی برای نگه داری داره یا نه رو نداره ولی  state رو داره و کاری به این که این  state وظیفه ی انتقال دادن  context در این هستش که redux و context تفاوت 
به برنامه امون پاس میدیم context امون هستش و خود ریداکس رو از طریقstate  تغیرات

CQRS   /   Flux  /   Event Sourcing         ====== >      Rules      ======>    Redux 

flux : oneway data flow یا undirectional data flow است که یک جریان جدید در فرانت اند به نام mvc ،‌mvvm و twoway data binding  به نوعی میشه گفت یک بازسازی از ایده های قبلی در معماری مثل
تشکیل شده است stores و dispatcher و action را معرفی میکند و از 3 بخش اصلی 

oneway data flow :  در جریان های داده که به صورت یک طرفه هستند همیشه مشخص هستش که داده از کجا آمده و تبدیل به چه چیزی شده است

====================================================================================================================================================

سه اصل مهم در Redux

1-single source of truth :   ذخیره می‌شوند یعنی اطلاعات امون رو فقط باید بیایم و از یک جا دریافت بکنیم store به نام object  ها داخل یک state  تمام 

2- State is read-only / Single Immutable State Tree : نشوند و برای این کار باید از mutate کنیم،  این کار برای این است که داده‌ها هرگز dispatch را action  این است که یک state تنها راه تغیر دادن 
استفاده شود reducer  

3- Changes are made with pure functions : جدید برمیگردانند state فعلی یک state را دریافت می‌کنند و بدون تغییر روی action  فعلی و یک state هایی هستند که  pure function‌ ها reducer در واقع 

react query //  mobix // redux-toolkit  // rocil میتونیم از این ها استفاده بکنیم  قرار نیست تو هر پروژه ای بیای و از ریداکس استفاده بکنیم

====================================================================================================================================================

خوب حالا وقتی ما میخایم بیایم و از ریداکس استفاده بکنیم یک چند تا مفهوم داره که باید اون هارو بلد باشیم

1- store : فعلی مون state مارو میگره و یک سری توابع رو هم به ما به عنوان مقادیر خروجی میده که یک reducer میکنیم و به عنوان مقدار ورودی میاد و تابع api در واقع یک تابع هستش که میایم و اون رو تبدیل به یک 
reducer میایم و اون اکشنی که داریم رو منتقلش میکنیم به  distpach  امون هستش ما با استفاده از  state  برای تغیر دادن distpach  و تابع
  
2- distpach : امون ارسال کنیم store  تابعی هستش که ما با استفاده از اون میتونیم بیایم و یک اکشن رو به سمت

3- selector : بخونیم از این تابع استفاده میکنیم  store امون رو از  state برای اینکه بیایم و مقدار یا  وضعیت فعلی 

====================================================================================================================================================

پیاده سازی یک مثال ساده از ریداکس بدون استفاده از اون

function counter ( state = 0 , action ) {   switch ( action.type ){ case "INCREMENT" :   return  state + 1  case "DNCREMENT" :    return  state  - 1  default : return state    } }    

const createStore = (reducer) => {    let state;             const dispatch = (action) => {  state = reducer(state, action);     };
                                                             const getState = () => state;          return { dispatch, getState };                };

const store = createStore(counter);

store.dispatch({ type: "INCREMENT" });    // 1   store.dispatch({ type: "INCREMENT" });    // 2
store.dispatch({ type: "INCREMENT" });   // 3   store.dispatch({ type: "INCREMENT" });    // 4

console.log(store.getState());

====================================================================================================================================================

ساده برای استفاده از ریداکس todos  مثال 

import { createStore } from "redux";   import { Provider } from "react-redux";        

const initState = [     {  id: 1,  text: "Task 1",  completed: false  },{  id: 2,  text: "Task 2",  completed: false  },{  id: 3,  text: "Task 3",  completed: true  } ];

const todos = (state = initState, action) => {

    switch (action.type) {

        case "ADD_TODO":     return [   ...state,  {     id: action.id,     text: action.text ,  completed: false,    }  ];
          
        case "TOGGLE_TODO":
            return state.map((todo) => { if (todo.id !== action.id) {    return todo;   }     return {    ...todo,    completed: !todo.completed,    };   });
             
        default:    return state;      }      }

const store = createStore(todos);     ReactDOM.render(   <Provider store={store}>  <App />  </Provider>,    document.getElementById("root") );

createStore  و reducer  خوب داخل مثال بالا اومدیم و این دو تا مفهوم رو پیاده سازی کردیم و حالا باید در پایین از اون ها استفاده بکنیم

import { useSelector, useDispatch } from "react-redux";

let todoId = 0;

export default function App({ store }) {

    const todos = useSelector((state) => state); 
    const dispatch = useDispatch();

    const handleKeyDown = (event) => {
        if ("Enter" === event.code) {
            const { target } = event;     dispatch({ type: "ADD_TODO",   id: todoId++,       text: target.value,      });    target.value = "";
         } }

        const todosCm = todos
        ? todos.map((todo) => (
              <li  key={todo.id}    onClick={() =>  dispatch({  type: "TOGGLE_TODO",  id: todo.id, })    }
                   style={{ textDecoration: todo.completed ? "line-through" : "none" }} > {todo.text}  </li> ))    : null;
        
    return (      <div>  <input onKeyDown={handleKeyDown} type="text" />      <ul>{todosCm}</ul>       </div>     ); }
    
====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
