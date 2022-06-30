/*

برای استفاده از  اون وقتی که درخواست امون رو زدیم دیگه نیاز نیستش که بیایم و از حالت جی سون درش بیاریم چون خودش به صورت خودکار این کار رو برای ما انجام میدهد

 --------------------------------------------------------------------------------------------------------------------------------

const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

function getData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res.data);
    });
}

function postData() {
    const userData = {
        id: 1,
        name: "emad",
        username: "taghipout",
        email: "emta137671@gmail.com",
    };
    axios
        .post("https://jsonplaceholder.typicode.com/users", userData)

        .then((data) => console.log(data));
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);

--------------------------------------------------------------------------------------------------------------------------------

const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

function deleteUser() {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
        console.log(res.data);
    });
}

function putUser() {
    const userData = {
        id: 1,
        name: "change name emad",
        username: "taghipout",
        email: "emta137671@gmail.com",
    };
    const header = {
        header: {
            authorization: ` Bear ${"this is my token  1@@#@#"}`,
        },
    };

    axios
        .put("https://jsonplaceholder.typicode.com/users", userData, header)
        .then((data) => console.log(data));
}

getBtn.addEventListener("click", deleteUser);
postBtn.addEventListener("click", putUser);

--------------------------------------------------------------------------------------------------------------------------------
*/
