/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
====================================================================================================================================================

اون رو داریم ssr که ما به صورت localStorage  اگر نیاز به یک آبجکت داشته باشیم که در سمت کلاینت اون رو داریم ولی در سمت سرور اون رو نداریم باید بیایم و به شیوه زیر از اون استفاده بکنیم مثل استفاده از 
 رو می سازیم و داخل اون یک متغیر رو تعریف میکنیم window رو تعریف بکنیم و بعد یک فایل با نام  utils  برای همین بهتر هستش که بیایم و یک پوشه با نام 

let WINDOW = {};

if (process.browser) {     WINDOW = window; } else {

WINDOW = {   document: {  location: {},       },   localStorage: { getItem: () => {},  setItem: () => {},   },   }, }

export default WINDOW;


====================================================================================================================================================
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
