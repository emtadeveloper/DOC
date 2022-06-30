/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

خوب ما زمانی که سمت کلاینت هستیم و داریم از ریداکس استفاده میکنیم ما همیشه یک store داریم وقتی بین صفحات جابه جا میشیم همون store و state امون باید باقی بمونه و تغیری نکنه حالا زمانی که سمت
سرور هستیم صفحات و ریکوست ها دیگه به هم ربطی ندارند و در واقع با هر ریکوست و در خواستی باید یک store مستقل داشته باشند تا روی همدیگه تاثیری نداشته باشند برای همین باید اول این مشکل رو به شیوه
زیر حلش بکنیم

ما سمت کلاینت باید store  امون نگه داریم ولی سمت سرور store امون تغیر میکنه
 
store.js

let store 

export const initalizeStore = (preloadedState) => {
     let _store = store ?? createStore(reducer,preloadedState)

     if ( typeof window === "undefined" ) return _store

     if(!store) store = _store

     return _store
}

import { Provider } from 'react-redux'
import { initalizeStore } from '../store'

function App({ Component, pageProps }) { 
    const store = initalizeStore()
    return (      <Provider store={store}>  <Component {...pageProps} /> </Provider>     ) }

export default App

====================================================================================================================================================

حالا ما سمت next js چطوری میتونیم بیایم و این مقدار state امون رو در سمت سرور بیایم و تغیر اش بدیم خوب پاسخ اصلی اینه ما در دو تا جا میتونیم این کارو انجام بدیم

getStaticProps  /   getServerSideProps هدف اصلی این دو تا تابع این گونه راه حل ها نبوده ولی خوب به هر حال در این موارد میشه ازشون استفاده کرد

export  const initState = {    lastUpdate : 0 ,  light : true ,   count : 0    }

ssg

import Page  from "../components/page"
import { initState } from "../store"

export default function ssg () { retrun <Page /> }

export function getStaticProps ( context ) {
    return {
        props : {
            initialaizeReduxState : {
                ...initState , lastUpdate : Date.now() , light : true 
            }
        }
    }
}
    
حالا فقط باید بیایم و در داخل فایل app.js_ امون تغیر زیر رو اعمال کنیم

import { Provider } from "react-redux"

import { initialaizeStore } from "../store"

function App ( {Component , pageProps } ){
    const store = initialaizeStore( pageProps , initialaizeReduxState)
    retrun ( <Provider store = { store} > <Component {...pageProps} /> </Provider> )
}
export default App

راه حل دوم

const initReduxStore = (preloadedState) => createStore(reducer, { ...initState, ...preloadedState })

let store
export const initialaizeStore = (preloadedState) => {
    let _store = store ?? initReduxStore(preloadedState)

    if (preloadedState && store) {
        const prevState = store.getState()
        const nextState = { ...prevState, ...preloadedState }

        if (prevState.count) nextState.count = prevState.count

        _store = initReduxStore(nextState)
        store = undefined
    }

    if (typeof window === 'undefined') return _store

    if (!store) store = _store

    return _store
}

====================================================================================================================================================

ssr

import  Page from "../components/page"
import { initalizeStore } from "../store"

export default function ssr () {   return <Page /> }
  
export function getServerSideProps ( ){  

    const store = initalizeStore()    store.dispatch 

    store.dispatch({ type : "TICK" , lastUpdate : Date.now() , light : false } )

    return {   props : { initialaizeReduxState : store.getState() }

      }
}
   
تغیر دادن فایل store امون

export const initalizeStore = (preloadedState) => {

     let _store = store ?? createStore(reducer,preloadedState)

    if(preloadedState && store) {   _store = createStore (reducer , preloadedState )      store = undefined      }

     if ( typeof window === "undefined" ) return _store

     if(!store) store = _store

     return _store

}

====================================================================================================================================================

معرفی پکیج next redux wrapper 

هر موقعی ما صفحه تغیر میدیم یک dispactch  میایم و wrap میکنیم

====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
