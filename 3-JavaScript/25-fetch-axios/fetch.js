/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

AJAX  :   ارتباط بین کلاینت و سرور که میومد و یک سری دیتاهارو میگرفت و ما برای این ازش  استفاده میکنیم که بیاد و صفحات وب مارو به صورت داینامیک بکنه و اگر چیزی نیاز به تغیر داشت
فقط همون قسمت بیاد و تغیر بکنه

JSON  : JavaScript Object Notion           CRUD :   Create   Read  Update   Delete

Create  :  Post

Read  : Get

Update  :  PUT : کل داده ای که براش مبفرستیم رو جایگزین با قبلی اش, PATCH :‌ اگر مثلا یک آبجکت رو براش بفرستیم اون مقادیر که عوض شده رو جایگزین میکنه ولی
اون هایی که تغیر نکردند رو تغیری نمیده اشون 

Delete :  Delete

POST  PUT  DELETE  : درخواست هایی هستند که ما به سمت سرور میایم و ارسال اسون میکنیم
 
GET : درخواست هایی که میخایم از سمت سرور بیاریم به سمت کلاینت
 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

fetch API : اولین آرگومانت امان که اجباری هم هست اون آدرس اینترنتی   fetch می باشد که در پشت صحنه نیز هنوز دارد با آن کار میکند  در داخل متدXMLHttpRequest این متد جایگزینی برای استفاده از
امان هست همچنین این متد یک قول هستش برای ارسال درخواست یا تنظیمات سفارشی به عنوان آرگومان دوم در قالب یک شی ارسال میکنیم

var Request = new Request('url',{
    method:'GET',
    cache:'no-cache',
    headers
})
      fetch("https://randomuser.me/api/?results=5")
        .then((response) => response.json())
        .then((data) => {
         let Data = data.results
         Data.map((e)=>console.log(e))
        });

        
const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

function getData() {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
        .then((respose) => {
            return respose.json();
        })
        .then((data) => console.log(data));
}

function postData() {
    const userData = {
        id: 1,
        name: "emad",
        username: "taghipout",
        email: "emta137671@gmail.com",
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-Type": "application/json" },
    })
        .then((respose) => {
            return respose.json();
        })
        .then((data) => console.log(data));
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);

----------------------------------------------------------------------------------------------------------------------------------------------------------------

const config = { method : "POST" ,   headers: { Authorization: `token ${token}` } body : JSON.stringify(user)}

const response = await fetch ("URL" , config )

const data = await responsive.json()

consle.log(data)

----------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
