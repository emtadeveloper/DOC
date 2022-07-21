/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

یک قول را اجرا میکنیم 3 تا حالت یا وضعیت دارد  Promise هنگامی که ما میایم و 

1- Pending : مشخص یا روشن نشده باشد قول وضعیت  انتطار را دارد و در آن باقی میماند

2- reject :ستفده کنیم catch  و اگر کد مورد نظر با ارور همراه باشد قول در حالت رد شده باقی میماند و ما میتوانیم از

3- full filled :  استفاده بکنیم  کار های مورد نظرمون رو انجام بدهیم then و اگر کد مورد نظر ما با موفقیت انجام شود می توانیم در آن از متد

هم دسترسی داشته باشیم catch و then نحوه ساخت  زمانی که این دو تابع را استفاده میکنیم میتوانیم به متد های   Promise : new Promise (resolve function,reject function)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let Pr = new Promise ( function (resolve, reject) {
  console.log("init Promise");
  setTimeout(function () {
    console.log("Timeout done");
    if (true) {
      resolve("TimeOut Sucsess !");
    } else {
      reject(new Error("sample Error"));
    }
  }, 2000);
});

Pr.then((msg) => console.log(msg));

Pr.catch((err) => console.log(err));


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

های متوالی استفاده میکنیم به مقادیری که حاصل پردازش قبلی اون هستش هم دسترسی داریم  then  موقعی که داریم میایم و از 


var P2 = new Promise((reslove, reject) => {
  reslove(4);
});
P2.then((val) => val + 4)   // 8
  .then((newVal) => newVal  * 2)  // 16
  .then((final) => console.log("got" + final));  //   got 16

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

در مثال زیر هم اومدیم یک تابع جمع با یک تاخیر 2 ثانیه ای رو به وجود آوردیم

let PR = function (array) {
  let p = new Promise((reslove, reject) => {
    console.log("init PR");
    setTimeout(function () {
      reslove(
        array.reduce(function (x, y) {
          return x + y;
        })
      );
    }, 2000);
  });
  p.then((data) => console.log(data));
};

PR([1, 2, 3, 4]);

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

های متوالی یا پشت سر هم استفاده میکنیم انگاری اون جواب ها میان و پشت سر هم به هم دیگه پاس داده می شوند than  نکته : در داخل کد های بالا وقتی میایم و از 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

استفاده بکنیم  await  تعریف کرده باشیم میتونیم بیایم ودر هنگام استفاده کردن از اون از   then ما اگر یک آبجکت داشته باشیم که در داخل اون اومده باشیم و یک متد با نام

const thenable = {
  then: function (callback) {
    setTimeout(() => callback(2), 100);
  },
};

const value = await thenable;
console.log(value);  // 2

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

به محتوای اون پیغام دسترسی داشته باشیم message میتونیم با استفاده از   reject در هنگام برخورد با یک پیغام خطا یا اصطلاحا 

const promise = new Promise((resolve, reject) => {
    reject(Error("BORO YARE"));
});
promise.catch((error) => console.log(error.message));  // BORO YARE

error = {   message: "BORO YARE", };
  
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

استفاده بکنیم به ما مقدار تعریف نشده رو بر میگردونه then قراره به عنوان پاسخ برای ما برگشت داده بشه دیگه اگر بیایم و rej خوب طبق مثال زیر وقتی یک خطا رو داریم و میایم و از تابع 

const promise = new Promise((res, rej) => {
  rej(Error("Some Error"));
})
.catch((error) => console.log(error.message)) // Some Error
.then((error) => console.log(error));  // undefined

//  نکته این سوالا هم دقیقا بحث ترتیب قرار گیری هستش

const promise = new Promise((res, rej) => {
    rej(Error("Some Error"));
})
    .catch((error) => console.log(error.message)) // Some Error
    .then((error) => console.log(error)) // undefined
    .then((error) => console.log(error + error)); // undefined


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

finaly :  های بعدی ما در دسترس باشه اصطلاحا کال بک اش میاد و برگشت میشه و به اسکوپ  then نمیگیره ولی میتونه بیاید و یک لاجیکی رو انجام بده و یک مقدار رو برای ما برگشت بده تا در   arg  هیچ گونه 
دسترسی داره  finaly 

const promise = new Promise((res) => res(2));
promise
  .then((value) => {
    console.log(value);   // 2
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 4
    return value * 2;
  })
  .finally((value) => {
    console.log(value);   // undefined
    return value * 2;
  })
  .then((value) => {
    console.log(value);   // 8
  });

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Hello");
    }, 3000);
});
promise
    .then((val) => val + "World")
    .then((val) => console.log(val))   Hello World
    .catch((err) => console.log(err));  اصلا اجرا نمیشه و اون رو نادیده میگیره

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

all : یک موقع هست ما تعداد زیادی قول داریم و میخاهیم با موفق شدن همه ی آن ها کار خاصی انجام دهیم که میاد و تمامی قول های ما رو به صورت یک آرایه دریافت میکنه و در نهایت هم جواب هاری تک تک
قول هامون رو باهم دیگه در قالب یک آرایه بر میگردونه

let P1 = new Promise((resolve, reject) => {   setTimeout(function () {  resolve("sucsess P1");   }, 1000); });

let P2 = new Promise((resolve, reject) => {  setTimeout(function () {     resolve("sucsess P2");   }, 2000); });

let P3 = new Promise((resolve, reject) => {   setTimeout(function () {     resolve("sucsess P3");   }, 3000); });

Promise.all([P1, P1, P3]).then((res) => console.log(res ));

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

reace : بعضی موقع ها هست از بین چندین قول میخاهیم هر کدوم که اول اجرا شد بیایم و یک کاری باهاش بکنیم

let P1 = new Promise((resolve, reject) => {   setTimeout(function () {  resolve("sucsess P1");   }, 1000); });

let P2 = new Promise((resolve, reject) => {  setTimeout(function () {     resolve("sucsess P2");   }, 2000); });

let P3 = new Promise((resolve, reject) => {   setTimeout(function () {     resolve("sucsess P3");   }, 3000); });

Promise.race([P1, P1, P3]).then((res) => console.log( res ));

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const promise = new Promise ((resolve , reject ) => {

  setTimeout(()=>{

     resolve(1)

  },2000)

}).then((data)=>{

  console.log(data)

  throw new Error('some error)

}).then((data)=>{

  console.log(data)

}),(error)=>{

  console.log('second then error' , error)

})
 
.catch((error)=>{

  console.log('error',error)
})



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

تسک جواب زیر رو حل کنید

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data);   //   success
    return job(false);
  })
  .catch(function (error) {
    console.log(error);    // error
    return "Error caught";    //is this a promise ?! really ?!
  })

  .then(function (data) {
    console.log(data);     // Error Caught
    return job(true);
  })

  .catch(function (error) {
    console.log(error);          // نادیده میگیره
  });

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

تسک زیر را جل کنید

function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("success");
        } else {
            reject("error");
        }
    });
}

let promise = job(true);

promise

    .then(function (data) {
        console.log(data); // success
        return job(true);
    })

    .then(function (data) {
        if (data !== "victory") {
            throw "Defeat"; //   میکنه  Defeat  خطا به نام
        }
        return job(true);
    })

    .then(function (data) {
        console.log(data); // اجرا نمیشه
    })

    .catch(function (error) {
        console.log(error); // Defeat
        return job(false);
    })

    .then(function (data) {
        console.log(data); // اجرا نمیشه
        return job(true);
    })

    .catch(function (error) {
        console.log(error); //  error
        return "Error caught";
    })

    .then(function (data) {
        console.log(data); // "Error caught
        return new Error("test");
    })

    .then(function (data) {
        console.log("Success:", data.message); // Success test
    })

    .catch(function (data) {
        console.log("Error:", data.message);
    });


 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
