/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

خوب ما ارسال پارام با استفاده از اکسیوس دو تا راه حل داریم اولی این که بیایم و  به شیوه زیر عمل بکنیم

axios.get("/user?ID=12345")     //      axios.get(" /user ", {   params : { ID :12345 } })

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
servises   خوب میایم و یک پوشه 
   HttpClient
        HttpClient.js
        inedex.js

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

HttpClient.js ///

import axios from 'axios' 

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

.env :  REACT_APP_BASE_URL=https://jsonplaceholder.typicode.com/

axios.defaults.headers.common['Authorization'] = 555 

نکته : ما میتونیم بیایم و این مقدار رو در زمانی که کاربر اومد و لاگین کرد به عنوان مقداری که سرور به عنوان پاسخ برمیگردونه در داخل لوکال یا کوکی امون ذخیره کنیم  و اون مقدار رو بخونیم و در این جا ذخیره کنیم در جای بالایی
    
export function get(url, config = {}) {                                   export function post(url, data, config) {
    return axios.get(url, config)                                                  return axios.post(url, data, config)
        .then(resposne => resposne.data)                                       .then(resposne => resposne.data)
        .catch(error => console.log(error))                                       .catch(error => console.log(error))
}                                                                                                       }

index.js  /////       

export { get , post } from "./HttpClient"

حالا هر جا که لازم داشتیم میتونیم بیایمو  به صورت زیر در هر کامپوننت امون بیایم و استفاده بکنیم

import  { get }  from "./services/HttpClient"

export default  function  App () {
  useEffect(()=>{
    get("post",{
      params: {
        id : 2
      }
    }).then(response => console.log(response))
  },[])
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

رو میتونیم بیایم و به صورت یک کلاس بیایم و استفاده بکنیم  post  و  get  ما توابع
 
export class HttpCilent {
    constructor(config = {}) {
        this.service = axios.create({
            ...config,
            baseURL: config.baseURL || process.env.REACT_APP_BASE_URL
        })
    }

get(url, config = {}) {
       return new Promise((resolve, reject) => {
           axios.get(url, config)
               .then(resposne => resolve(resposne.data))
              .catch(error => reject(error))
        })
    }

post(url, data, config) {
       return axios.post(url, data, config)
          .then(resposne => resposne.data)
          .catch(error => console.log(error))
    }
}

export  const  httpClient =   new  HttpCilent() //  یا در این جا همچین کاری رو انجام میدهیم و یا هم در داخل کامپوننت امون

//App

export { HttpCilent } from './HttpClient'

const htppCilent = new HttpCilent()

export default function App() {

useEffect(() => {
    htppCilent.get('posts', {
      params: {
        id: 2
      }
    }).then(response => console.log(response))
}, [])  

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
