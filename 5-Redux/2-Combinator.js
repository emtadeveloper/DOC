/*
====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
reducer composition  : های بزرگی طرف هستیم پس منطقی نیستش که بیایم و از آرایه ها برای تعریف کردن اون ها استفاده بکنیم و باید بیایم و state موقعی که ما میایم و از ریداکس برای پروژه امون استفاده میکنیم 
های کوچک تر مدیریتاشون  Reducer اون هارو تبدیل به آبجکت ها  بکنیم دلیل اشم این هستش که بتونیم بخش های مختلف ابجکت امون رو با استفاده از یکسری کلید مشخص بکنیم و اون قسمت هارو توسط یکسری  
واحد رو برای مدیریت بهتر  استفاده میکنیم Reducer هامون رو باهم ترکیب میکنیم و یک Reducer استفاده بکنیم  که  composition بکنیم  برای همین باید بیایم و از مفهومی به نام   

// todos reducer       ////////////////////////////////////////////

const todos = (state = initState, action) => {

switch (action.type) {

case "ADD_TODO":   return [...state, { id: action.id, text: action.text, completed: false }];
          
case "TOGGLE_TODO":       return state.map((todo) => {   if (todo.id !== action.id) {    return todo;    }    return { ...todo, completed: !todo.completed };   });
        
default:    return state;     }    }  

// visibilityFilter reducer        /////////////////////////////////////

const visibilityFilter = (state="SHOW_ALL",action)=>{

    switch (action.type){

        case "SET_VISIBILITY_FILTER":       return action.filter
        
        default :      return state         }    }
        
composition   reducer

const   todoApp = (state={} , action )=>{    return {     todos : todos(state.todos , action) ,
                                                                                        visibilityFilter : visibilityFilter(state.visibilityFilter ,  action )    } }
 
export default App ......................

const todos = useSelector(state=> state.todos)
const filter = useSelector(state=> state.visibilityFilter)

const dispatch = useDispatch()
     
const handleSetVisibility = ( filter ) => { dispatch({ type : "SET_VISIBILITY_FILTER" , filter }) }
        onClick = { ()=> handleSetVisibility("COMPLETED"))}
    
const getVisibleTodos = ( todos , filter )=> {
      switch (action.type){  case "SHOW_ALL" : return todos ;   case "COMPLETED" : return todos.filter( todo=> todo.completed )} 
      case "PENDING" : return todos.filter(todo=> ! todo.completed ) }

const todosCm = todos ?  getVisibleTodos( todos,filter ).map(todo=> (   .....................        ))

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

های ما زیاد بشه یکسری عملیات تکراری هی میاد و صورت میگیره که ما این رو نمیخایم که باید بیایم و از یک  reducer استفاده میکنیم  وقتی تعداد reducer composition  خوب ما دیدیم که وقتی میایم و از 
یا تابع کمکی استفاده بکنیم  که این کارو برای ما راحت تر بکنه helper function

const  reducers = { todos , visibilityFilter }

const combineReducers = ( reducers )=> {
      return (state = {} , action ) => {
          return Object.keys(reducers).reduce((nextState,key)=>{
              nextState[key] = reducers[key](state[key],action)
              return nextState
          },{})
      }
}

const store = createStore(combineReducers(reducers))   که ما میتونیم به جای این که خودمون این تابع رو بنویسیم بیایم و از تابعی که خود ریداکس در اختیارمون گزاشته رو استفاده بکنیم

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================
*/
