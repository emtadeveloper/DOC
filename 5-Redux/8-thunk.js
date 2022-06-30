/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

هامون رد میشه و اگر کاری بود middleware امون میاد و ابتدا از فیلتر store مستقیما بیاد و برسه به دست dispatch اتفاق میوفته به جای این که این  dispatch نکته : خوب ما قبلا گفتیم زمانی که یک 
امون store انجام میدهند و بعد میرسه دست

redux -  thunk   :   به ما این قابلیت رو اضافه میکنه که بیایم و یک تابع رو به عنوان اکشن هامون پاس بدیم و به صورت خودکار اون رو تشخیص میده و اون رو اجرا میکنه و به عنوان پارامتر های ورودی اون
dispatch ذخیره بشه یک state رو پاس میده  و داخل اون بدنه تابعی که پاس میدیم هر گونه عملیاتی که نیاز داشته باشیم رو انجام میدیم و در نهایت اگر نیاز بود اون نتیجه رو داخل dispatch و getState
ذخیره میکنه  store مجدد  انجام میدیم که اون نتیجه رو میاد و در داخل 

npm install  redux-thunk   این پکیج توسط خود تیم ریداکس توسعه داده شده

export  todosLoaded = todos => ({  type : "todos/todosLoaded" , payload : todos })  

export  todoAdded= todo=> ({  type : "todos/todoAdded" , payload : todo })  

export const saveNewTodo = ( text )=> { 
    return async function saveNewTodoThunk(dispatch){
        const initTodo = { text , completed : false }
        const todo = await client.post ( 'todos ' , initTodo )
        dispatch ( todoAdded (todo ))      
    }
}

export const  fetchTodos = ( dispatch , getState ) => {  client.get("todos").then( todos => { dispatch ( todosLoaded(todos ))   })  }

که در داخل state حالا اگر ما در زمان هایی هستیم که نیاز داریم بیایم و به کاربر امون یکسری لودر رو نشون بدیم تا بفهمه دقیقا در چه عملیات هایی هستیم خوب یکی از راه حل ها این هستش که بیایم و در داخل 
رو ذخیره کنیم و با توجه به اون بیایم و تشخیص بدیم که در چه وضعیتی هستیم و متناسب با اون پیغام هامون رو انجام بدیم و یا لودر هامون رو نمایش بدیم   status بیایم و یک store

//////// TodoList 

const TodoList = () => { 
    const todosIds =  useSelector ( selectorFilterdTodoIds , shallowEqual )
    const loading = useSelector (state => state.todos.status)

    if("loading" === loading ){
        return <div className = "todo-list"  >   <div classname = "loader " ><div>   </div>
    }
}    .....................

// reducer


const initstate = {      status : "idle",     entities : {}  }

case " todos / todosLoading " : 
   state.status = "loading"
   break

case "todos/todosLoaded" :      
         const  todos = action.payload
         const newEntities = { }
         todos.forEach ( todo => { newEntities[ todo.id ] = todo })
         state.entities = newEntities 
         state.status = "idle"

} ,  initState 

حالا در جاهایی که نیاز داریم که بیایم و استفاده بکنیم

export const  fetchTodos = ( dispatch , getState ) => { 
    dispatch({ type : "todos / tod osLoading "})
    client.get("todos").then( todos => { dispatch ( todosLoaded(todos ))   })  }

====================================================================================================================================================

برای نشون دادن لووودر 

export default  function Header () { 
    const [text , setText ] = useState("")
    const [ status ,  setStatus ] = useState ( " idle " )

    const dispatch = useDispatch()

    const handleChanges = (e) => setText ( e.target.value )

    const handleKeyDown = async (e) => { 
        const trimmedText = text.trim()
        if(e.witch === 13 && trimmedText ) {
            setStatus ('loading')
            awati dispatch(saveNewTodo(trimmedText))
            setText("")
            setStatus('idle')
        }
    }

const  isLoadiing = "loading" === status  
const   placeholder = isLoading ? "" :  " what needs to be done "
const  loader = isLoading  ? <div classname = "loader " ><div>  : null


return ( <header classname="header   "> 
    <input
      disabled = {isLoading}
      className = "new-todo"
      onKeyDown = {handleKeyDown}
      onChange= { handleChanges}
      value={text}
       placeholder={placeholder}
       /> {loader} </header >)

}

====================================================================================================================================================

 و بعد در داخل اون بیایم و بنویسیم fetchUrl  امون بیایم و یک فایل درست کنیم به نام  utils ما میتونیم بیایم و در داخل پوشه 

const fetchUrl = async ({ url , method = "GET" }) => {
    return  new Promise ((resolve)=> {
        setTimeout ( async () => { const response = await fetch (url , { method })  
    resolve (await  response.json( ))  } , 1000 )
    })
}
export default fetchUrl

و هر جا که خواستیم بیایم و استفاده بکنیم

const { user } = await  fetchUrl ( { url : "http:.............................." , method : "GET "})

====================================================================================================================================================

ما وقتی داریم میایم و از ریداکس تانک استفاده میکنیم احتمال داره یکسری از مباحث امون در کدهامون تکراری باشه که برای مدیریت بهتر اون ها هم میتونیم مشابه موارد بالا بیایم و عمل کنیم

====================================================================================================================================================
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
