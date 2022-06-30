/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

ما ریداکس رو به دو صورت میتونیم بیایم و استفاده بکنیم یا بیایم و در سمت کلاینت از اون استفاده بکنیم که روش پیشنهادی هم همینه یا هم در سمت سرور اون رو داشته باشیم  که منظور از این سمت سرور استفاده
کردن ریداکس یعنی بیایم و از متد ها getStaticProps  getServerSideProps استفاده بکنیم که میتونه یکسری مشکلاتی رو برامون به وجود بیاره 

خوب در مرحله اول ما باید بیایم و reducer و store امون رو یک جایی اضافه بکنیم بهترین کار این هستش که در داخل root خود پروژه امون بیایم و یک فایل store.js درست بکنیم و اون جا اضافه اش بکنیم

import { createStore } from "redux"

const initState = {  lastUpdate: 0,    light: true,    count: 0   }

const reducer = (state = initState, action) => {
    switch (action.type) {

        case 'TICK':
            return {   ...state,    lastUpdate: action.lastUpdate,  light: action.light      }

            case 'INCREMETN':
            return {  ...state,    count: state.count + 1       }
     
        case 'DECREMENT':
            return {      ...state,  count: state.count - 1     }

            case 'RESET':
            return {...state,   count: initState.count         }
   
        default:
            return state
    }
}

export const store = createStore(reducer)

حالا برای اضافه کردن و استفاده از اون  بهتره بیایم و در داخل app.js_ امون بیایم و اون رو اضافه بکنیم

import { Provider } from 'react-redux'
import { store } from '../store'

function App({ Component, pageProps }) {   return (      <Provider store={store}>  <Component {...pageProps} /> </Provider>     ) }

export default App

====================================================================================================================================================

حالا بهتر هستش که بیایم و فانکشنالیتی ساعت رو برای پروژه امون اضافه بکنیم
       
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useInterval from '../lib/useInterval'


const formatTime = (time) => {
  // cut off except hh:mm:ss
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const lastUpdate = useSelector(state => state.lastUpdate)
  const light = useSelector(state => state.light)

  const dispatch = useDispatch()

  useInterval(() => {
    dispatch({
      type: 'TICK',
      lastUpdate: Date.now(),
      light: false
    })
  }, 1000)



  return (
    <div className={light ? 'light' : ''}>
      {formatTime(lastUpdate)}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
}

export default Clock


====================================================================================================================================================

counter.js
  
import { useDispatch, useSelector } from "react-redux"

const useCounter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  const increment = () => dispatch({ type: 'INCREMETN' })
  const decrement = () => dispatch({ type: 'DECREMENT' })
  const reset = () => dispatch({ type: 'RESET' })

  return { count, increment, decrement, reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter

====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
