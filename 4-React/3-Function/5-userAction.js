/*
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
what is user action :  یک برنامه اصلا چی هستش و چیه  یک برنامه نوشنه میشه که اکشن  های یک کاربر رو با یک پاسخی جواب بده و ما باید بیایم و برنامه امون رو متناسب با اون اکشن های کاربرمون تنظیم بکنیم و متناسب
هایی هست که با توجه به نیاز کاربرامون میان و تغیر میکنن و این ها میشن اون اکشن هامون که داریم و کاربر با تغیر دادن اینا برنامه رو ایجاد میکنه حال ما بایدstate  با اون ها جواب بدیم حالا چیزی که ما در اختیار  امون هستش  
بیایم و متناسب با اکشن هایی که کاربرمون داره انجام میده یک تابع رو تعریف کنیم و مدیریت اون هارو  راحت تر بکنیم  یعنی در اصل بیایم و با خودمون نگاه کنیم که کاربر از زمانی که وارد سایت ما میشه تا موقعی که میاد و خارج
میشه دقیقا چه اکشن هایی رو میاد و انجام میده

1 - action  باز کردن صفحه
2 - action ارسال درخواست به سرور 
3 - action  تغیر دادن وضعیت اینوپت                   
حالا این مدل کد رو میایم ببینیم که  با 3 تا اکشن چطوری باید بیایم و اون رو پیاده سازی بکنیم

export default function App ( ) {

    // اولین اکشن کاربر یا موقی که کاربر میاد  و صفحه رو باز میکنه

    const [toast, setToast] = useState({ type: "info", message: "" });
    const [title, setTitle] = useState("");
    const [postId, setPostId] = useState(1);          
    const [loading, setLoading] = useState(true);

    useEffect(() => { fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())                 
            .then((psot) => {    setTitle ( psot.title );   setLoading ( false );  // کاربر رو مدیریت میکنیم state خوب در اینجا هم میشه اکشن دومم که در خواست رو میفرستیم و 
             setToast({   type: "success",  message : `Post with id ${ postId } loaded`,   });    });  
            }, [ postId ]);

    function handleLoading ( e ) {     setPostId ( e.target.value );      setLoading ( true );    }    // اومد و لود شد از اون استفاده بکنیم  state  اکشن سوم که وقتی 

    return (
        <div className="container">
            <div>
                <label>Post Id: </label>
                <input value={postId} onChange={handleLoading} type="number" />
            </div>
            <div>{loading ? <Loader /> : <h1>{title}</h1>}</div>
            <Toast type={toast.type} message={toast.message} />
        </div>
    );

امون ولی خوب داخل کد بالا وقتی پروژه امون  بیاد و بزرگ تر بشه نگه داری اون برامون خیلی  postId  و  title امون و بقیه برای  toast و loading تعریف کردیم یکی برای  state در کد بالا برای  اون 3 تا اکشنی که داریم اومدیم و  4 تا 
سخت میشه حالا ما کد بالا رو میایم و یک خورده بهینه ترش میکنیم که چطوری بیایم و ازش بهتر استفاده بکنیم

export default function App ( ) {

    // اولین اکشن کاربر یا موقی که کاربر میاد  و صفحه رو باز میکنه

    const [toast, setToast] = useState({ type: "info", message: "" });
    const [title, setTitle] = useState("");
    const [postId, setPostId] = useState(1);          
    const [loading, setLoading] = useState(true);

  function userAction(type , payload ) {
    switch ( type ){
        case ' get-post-success' :
            setTitle(payload.title) 
            setLoading(false)
            setToast({type:"success" , message : payload.message })
            break
        case 'get-post-request ' :
               setPostId(payload)   
               setLoading(true)
        default : 
                break       
           }
     }


    useEffect(() => { fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())                 
            .then((psot) => {   userAction('get-post-success',{   title : post.title,   message : ` Post with id ${postId} loaded`}) 
            }, [ postId ]);

    function handleLoading ( e ) {  
             userAction( 'get-post-request ', e.target.value) 
         }    

    return (
        <div className="container">
            <div>
                <label>Post Id: </label>
                <input value={postId} onChange={handleLoading} type="number" />
            </div>
            <div>{loading ? <Loader /> : <h1>{title}</h1>}</div>
            <Toast type={toast.type} message={toast.message} />
        </div>
    );

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
