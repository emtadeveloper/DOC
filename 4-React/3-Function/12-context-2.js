/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
==============================================================================================================================================================

کامپوننت زیر رو در نظر بگیرید که یک لاجیک برای افزایش یک مقدار رو داریم حالا اگر بخایم بیا یم و هر کدوم از محتواهای button و یا div رو به یک کامپوننت جدا منتقل بکنیم برای درست کار کردن 
لاجیک اون یک راه اینه  بیایم و یک کامپوننت پدر تعریف کنیم و اون لاجیک هارو با استفاده از props بهشون پاس بدیم

export default function HomePage() {

    const [count, setCount] = React.useState(0);
    const increment = () => setCount((prevCount) => prevCount + 1);

    return (  <div> <button onClick={increment}>Increment count</button>      <div>the current count is {count}</div>        </div>   );  }
       
==============================================================================================================================================================

// راه حل اول استفاده از props  //

// component CountDisplay
export default function CountDisplay({ count }) {  return <div>the current count is {count}</div>  }
   
// component Counter
export default function Counter({ setCount }) {
    const increment = () => {   setCount((prevCount) => prevCount + 1);    };
    return <button onClick={increment}>Increment count</button>;
}

//HomePage
export default function HomePage() {
    const [count, setCount] = React.useState(0);
    return (    <div>   <Counter setCount={setCount} /> <CountDisplay count={count} /> </div>    ); }

با استفاده از این مورد و انتقال اون لاجیک هامون به صورت props موقعی که کامپوننت هامون میان و render می شوند در هر موقع که render صورت میگیره هر 3 تا کامپوننت فرزند و پدر باهم دیگه میان و مجدد re render می شوند

==============================================================================================================================================================

context : اگر ما به هر حال نتونستیم بیایم و از شیوه بالا استفاده بکنیم و کامپوننت هامون در جاهای مختلفی بودند برای مثال هر کدوم از کمپوننت ها در یک روت یا مسیر جدا گونه بودند چی اون موقع مجیوریم که بیایم و از یک مفهوم
به نام کانتکس استفاده بکنیم که لاجیک ها و وضعیت هامون رو به صورت گلوبال اون هارو تعریف میکنیم

یک سری پوشه به نام provider تعریف میکنیم و provider های کانتکس امون رو اونجا تعریف میکنیم

import React from "react";

// context پوشه که میایم و تعاریف کانتک امون رو درون اون ها قرارشون میدهیم
const CountContext = React.createContext();          const CountContextSetState = React.createContext();

// provider 
export default function CountProvider({ children }) {
    const [count, setCount] = React.useState(0);
    return (   <CountContext.Provider value={count}>  <CountContextSetState.Provider value={setCount}>{children}</CountContextSetState.Provider>  </CountContext.Provider>    );}
     
// hooks
export function useCountState() {    return React.useContext(CountContext);   }

export function useCountSetState() {   return React.useContext(CountContextSetState); }
 
export function useCountActions() {
    const setCount = useCountSetState();
    const increment = () => {  setCount((prevCount) => prevCount + 1);     };
    return { increment };
}

==============================================================================================================================================================

//CountDisplay
export default function CountDisplay() {
    const count = useCountState();
    return <div>the current count is {count}</div>;
}

// Counter
export default function Counter() {
    const { increment } = useCountActions();
    return <button onClick={increment}>Increment count</button>;
}

// App 
function App() {
    return (
        <CounterProvider>
            <Router>
                <Routes>    <Route path="/" element={<HomePage />} /> <Route path="/count" element={<CountPage />} />     </Routes>
            </Router>
        </CounterProvider>
    );
}

// HomePage 
export default function HomePage() { return (   <div>    <Counter /> <CountDisplay />   </div>     ); }

==============================================================================================================================================================

1-
اگر اومدیم و از useState و useReducer ها استفاده کردیم بهتر هستش که بایم و  هر کدوم از مقادیر اشون رو در یک context قرار بدیم چون اگه این کارو نکنیم با تغیر کردن هر کدوم باعث ایجاد یک رندر مجدد میشه

2-
بهتر هستش که اون مقدار value رو مستقیم از setState یا reducer امون برداریم و قرار بدیم اگر بیایم و اون رو مثلا در یک متغیر دیگه ذخیره سازی اش بکنیم باعث ایجاد یک رندر مجدد میشه

3- 
بهتر هستش برای تمیز تر شدن کد هامون اکشن هامون رو به صورت هووک و جد از کامپوننت هامون قرار بدیم همچنین از نوشتن اکشن ها در داخل provider ها جلوگیری کنیم چون باعث ایجاد رندر های مجدد میشه

4-
برای جلوگیری از اینکه با خطای این که در کامپوننت های کانتکس امون countProvider امون رو تعریف کنیم بهتر هستش در جاهایی که اومدیم و هووک های useCountState و useCountSetState
رو تعریف کردیم خط زیر رو بنویسیم  if ( setCount === undefined ) {  throw new Error ( " render <CountProvider /> at top of the tree ") } 

5-
 برای جلوگیری از نوشتن provider های زیاد بیایم و از یک کامپوننت به صورت compose استفاده بکنیم که اون هارو مرتب تر برامون بکنه

==============================================================================================================================================================

نکته : برای این که بیایم و مثلا در فایل app  امون  از زیاد شدن تعداد provider هامون جلوگیری بکنیم بهتر هستش که بیایم و از یک ابزار استفاده بکنیم به نام compose 
فقط باید اون هارو به ترتیب بزاریم

// Compose.tsx

interface Props {
    components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
    children: React.ReactNode
}

export default function Compose(props: Props) {
    const { components = [], children } = props

    return (
        <>
            {components.reduceRight((acc, Comp) => {
                return <Comp>{acc}</Comp>
            }, children)}
        </>
    )
}

Usage:

<Compose components={[BrowserRouter, AuthProvider, ThemeProvider, ChatProvider]}>
    <App />
</Compose>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
==============================================================================================================================================================
*/
