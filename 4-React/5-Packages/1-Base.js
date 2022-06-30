/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================================================================

1 ------------------------------------------------------------------------------------------------------------------------

react-signature-canvas :  از این پکیج برای گرفتن امضا از کاربر میایم و استفاده میکنیم

npm install react-signature-canvas  //   type script :  npm i @types/react-signature-canvas

import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";

export default function App() {
    const [base64, setBase64] = useState("");
    const signature = useRef(null);

    const handleLogRef = () => console.log(signature.current);

    const handleClear = () => signature.current.clear();

    const handleToDataURL = () => {
        setBase64(signature.current.toDataURL());
        console.log(signature.current.toDataURL());
    };
    return (
        <>
            <SignatureCanvas penColor="red" backgroundColor="aqua" onBegin={() => console.log("Start")} onEnd={() => console.log("End")} 
                                               ref={signature} canvasProps={{ width: 500, height: 500, className: "", style: { border: "2px solid black" } }} />
            <button onClick={handleLogRef}>Log Reff ! ! </button>
            <button onClick={handleClear}>Clear ! !</button>
            <button onClick={handleToDataURL}>To Data URL ! ! !</button>
            <img src={base64} alt="" />
        </>
    );
}

===================================================================================================================================

2 ------------------------------------------------------------------------------------------------------------------------

معرفی پکیج کاوه نگار برای سرویس پیام کوتاه میتونیم بیایم و از اون استفاده بکنیم چون هزینه داره استفاده از اون رو نرفتیم ولی حتما بعدا بخر و استفاده بکن

===================================================================================================================================

3 ------------------------------------------------------------------------------------------------------------------------

React Icons : یک پکیج که میتونیم با نصب اش از چندین پکیج برای استفاده از آیکون هامون استفاده بکنیم

npm i react-icons 

import { AiOutlineApple } from "react-icons/ai";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { IoAt } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";

export default function App() {
    return (
        <>
            <AiOutlineApple size={30} />
            <BsFillAlarmFill size={30} />
            <FaAndroid size={30} />
            <IoAt size={30} />
            <FcVideoCall size={30} />
        </>
    );
}

===================================================================================================================================

4 ------------------------------------------------------------------------------------------------------------------------

react-modal-image : یک پکیج برای استفاده و تبدیل یک عکس به عنوان مودال هستش که بیشتر استفاده از اون برای موقعی هستش که بخایم از یک عکس به عنوان یک گالری بیایم و 
استفاده بکنیم

npm install  react-modal-image

import { useState } from "react";
import ModalImage, { Lightbox } from "react-modal-image";

export default function App() {
    const [isShowModal, setIsShowModal] = useState(false);
    return (
        <>
            <ModalImage alt="Top Learn" imageBackgroundColor="white" hideDownload={true} 
            showRotate={true} small="https://via.placeholder.com/150/000/fff?text=LightBoxSmall"
             medium="https://via.placeholder.com/150/000/fff?text=LightBoxMedium" 
             large="https://via.placeholder.com/150/000/fff?text=LightBoxLarge" />
            <button onClick={() => setIsShowModal(true)}> Open Image Modal</button>
           
        {   isShowModal && <Lightbox onClose={() => setIsShowModal(false)} 
            alt="Top Learn Light Box" 
            small="https://via.placeholder.com/150/000/fff?text=LightBoxSmall" 
            medium="https://via.placeholder.com/150/000/fff?text=LightBoxMedium" 
            large="https://via.placeholder.com/150/000/fff?text=LightBoxLarge" />    }
      
        </>
    );
}

===================================================================================================================================

5 ------------------------------------------------------------------------------------------------------------------------

useOntype :   ما میخایم بگیم وقتی کاربر اومد و تایپ کردنش تموم شد یک کاری انجام بده و وقتی تایپ اش تموم شد یک کار دیگه رو انجام بده  که اسم این پکیج

import { useEffect, useState } from "react";
import ModalImage, { Lightbox } from "react-modal-image";
import { useOnType } from "use-ontype";

export default function App() {
    const [search, setSearch] = useState("");
    const [isTyping, setIsTyping] = useState("");

    const handleTypeFinish = (val) => {
        setIsTyping(false);
        setSearch(val);
    };

    const onSearch = useOnType(
        {
            onTypeStart: (val) => {
                setIsTyping(true);
            },
            onTypeFinish: (val) => handleTypeFinish(val),
        },
        1000
    );

    useEffect(() => {
        if (search) {
            console.log(search);
        }
    }, [search]);

    return (
        <>
            <input {...onSearch} />
            {isTyping && <p>Typing ... </p>}
        </>
    );
}

===================================================================================================================================

5 ------------------------------------------------------------------------------------------------------------------------

universal - cookie : یک پکیج هستش برای مدیریت و استفاده بهتر از کوکی هامون

npm i universal-cookie

import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

cookies.addChangeListener((event) => console.log(event));
cookies.removeChangeListener((event) => console.log(event));

export default function App() {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");

    const handleSet = () => {
        cookies.set(name, value);
    };
    const handleRemove = () => {
        cookies.remove(name);
    };

    const handleGet = () => {
        const getCookie = cookies.get(name);
        console.log(getCookie);
    };

    const handleGetAll = () => {
        const getCookie = cookies.getAll(name);
        console.log(getCookie);
    };

    return (
        <>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSet}>Set</button>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleGet}>Get</button>
            <button onClick={handleGetAll}>Get All</button>
        </>
    );
}
===================================================================================================================================

5 ------------------------------------------------------------------------------------------------------------------------

ip  npm i ip  :  از این پکیج به عنوان یک پکیج برای گرفتن آیپی میایم و استفاده میکنیم

===================================================================================================================================

6 ------------------------------------------------------------------------------------------------------------------------

step progress :  یک پکیج هستش که ما میایم و ازش برای مرحله بندی استپ هامون استفاده میکنیم

npm i react-step-progress

import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

export default function App() {
    const step1Content = <h1>Step 1 Content</h1>;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;
    const step4Content = <h1>Step 4 Content</h1>;

    function step2Validator() {}

    function step3Validator() {}
    function step4Validator() {}

    function onFormSubmit() {}
    return (
        <>
            <StepProgressBar
                startingStep={0}
                onSubmit={() => {
                    console.log("Submit");
                }}
                steps={[
                    {
                        label: "Step 1",
                        subtitle: "0%",
                        name: "step 1",
                        content: step1Content,
                    },
                    {
                        label: "Step 2",
                        subtitle: "50%",
                        name: "step 2",
                        content: step2Content,
                    },
                    {
                        label: "Step 3",
                        subtitle: "75%",
                        name: "step 3",
                        content: step3Content,
                    },
                    {
                        label: "Step 3",
                        subtitle: "100%",
                        name: "step 4",
                        content: step4Content,
                    },
                ]}
            ></StepProgressBar>
        </>
    );
}

===================================================================================================================================

7 ------------------------------------------------------------------------------------------------------------------------

react-csv : بکنیم  csv  میتونیم بیایم و دیتا هامون رو تبدیل به فایل های اکسل و یا 

import { CSVLink } from "react-csv";

export default function App() {
    const headers = [
        { fristName: "نام", key: "fristName" },
        { fristName: "نام خانوادگی", key: "lastName" },
        { fristName: "پست الکترونیک", key: "email" },
    ];
    const csvData = [
        { fristName: "Ahmad", lastName: "Tomi", email: "abs@gmail.com" },
        { fristName: "jone", lastName: "ro", email: "abs@gmail.com" },
    ];
    return (
        <>
            <CSVLink filename={"عمادتقیپور".csv} className="btn" data={csvData} onClick={() => console.log("Clicked")}>
                click
            </CSVLink>
        </>
    );
}

===================================================================================================================================

8 ------------------------------------------------------------------------------------------------------------------------

react-calendar-datetime-picker : یک پکیج فارسی برای استفاده از دیتا پیکر ها

npm install react-calendar-datetime-picker

import React from 'react'

import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

const App = () => {
  const [date, setDate] = useState(null)
  return <DtPicker onChange={setDate} />
}

===================================================================================================================================

9 ------------------------------------------------------------------------------------------------------------------------

sweet allert  : یک پکیج برای استفاده بهتر از مودال هامون به نام سوییت آلرت

npm i --save sweetalert2

// successMesage.js

import Swal from "sweetalert2";

export const successMesage = (html) => {
    Swal.fire("عملیات با موفقیت انجام شد", html, "success");
};

// App.js

import Swal from "sweetalert2";
import { successMesage } from "./toastMessage";

export default function App() {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseenter", Swal.stopTimer);
        },
        showCloseButton: true,
    });

    const handleToast = () => {
        Toast.fire({ icon: "error", title: "Hi" });
    };
    const handleShowMessage = () => {
        Swal.fire({
            imageUrl:
                "https://toplearn.com/img/Banner/2877fc2e-cd86-49a4-b9a3-ac8b7e8ac1fe134bbe43-5535-42b0-9642-db86a38abf7170%20(1)%20(1).png?v=0wnrk2SiNKrxy-nLHN63R1PJ3hhBELGbrO6W1q-ETcE",
            imageAlt: "تخفیف",
            imageHeight: 100,
            icon: "info",
            title: "عملیات انجام شده ایا ؟",
            text: "بر روی تایید کلیک کنید",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "ذخیره",
            denyButtonText: "ذخیره نشود",
            cancelButtonText: "لغو",
            footer: "<a href='google.com'>برو رو لینک </a>",
            position: "bottom-end",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("ذخیره شد", "", "success");
            } else if (result.isDenied) {
                Swal.fire("ذخیره نشد لغو شد", "", "warning");
            } else {
                console.log("بسته شد");
            }
        });
    };
    return (
        <div>
            <button onClick={() => handleShowMessage()}> 2 اطلاعات </button>
            <button onClick={() => handleToast()}> 3 اطلاعات </button>
            <button onClick={() => successMesage("<h5>اطلاعات واکشی شد</h5>")}> اطلاعات </button>
        </div>
    );
}

===================================================================================================================================

10 -  persian tools : یک ابزار فارسی برای حداکثر نیاز هایی که داریم

npm install @persian-tools/persian-tools یک ابزار فارسی که یکسری ویژگی خوب داره

- تبدیل کلمات فارسی به عدد و عدد رو به فارسی
- تبدیل اعداد انگلیسی به فارسی
- کد ملی ایران ولید کنیم
-  عملیت های مربوط به پرداخت شباها و ولید کردن شماره کارت ها وکلی ویژگی دیگه


===================================================================================================================================

11 -  chart js : یک پکیج خوب برای استفاده از چارت ها در داخل پروژه هامون

npm  install  --save react-chartjs-2
 

===================================================================================================================================

12 -  یک موقع هستش ما میخایم بیایم و یک چزی رو با استفاده از طراحی دلخواه خودمون پرینت اش بگیریم برای این منظور بهتر هستش که بیایم و از این کتاب
خونه استفاده بکنیم

npm  install react-to-print

===================================================================================================================================

13 -  یک موقع هستش ما میخایم بیایم و یک چزی رو با استفاده از طراحی دلخواه خودمون پرینت اش بگیریم برای این منظور بهتر هستش که بیایم و از این کتاب
خونه استفاده بکنیم

npm  install react-toastify

limit تعداد توست های نمایشی در داخل سایت رو میاد و نمایش میدهد

===================================================================================================================================

14- jalali Moment : یک کتابخونه که با استفاده از اون میتونیم بیایم و فرمت های مختلف تاریخ رو بهش بدیم و تبدیل کنیم

npm install jalali-moment

===================================================================================================================================

15- react-viewer : 

 npm install react-viewer یک پکیج برای نمایش دادن تصاویر هستش

===================================================================================================================================

16- transform-tools : تبدیل کنیم js رو داخلش به  html یک وب سایت هستش که میتونیم کدهای 

===================================================================================================================================

17- react-select  یک پکیج خیلی خوب و کاربردی برای استفاده از سرچ هستش حتما سعی کن استفاده بکنی

npm install react-select

===================================================================================================================================

18- swiper / react slick دو تا پکیج برای استفاده به صورت اسلایدر هستش که بتونیم از اون استفاده بکنیم

===================================================================================================================================

19- react-animation : برای دادن انیمشن به المان های ری اکتی مون

===================================================================================================================================

20- react-countdown  یک پکیج از یک عددی به صورت معکوس میخونه و بعد اون میتونیم یک حرکتی رو بزنیم یا موقعی که استارت شد یک کاری بکنیم

npm install react-countdown

===================================================================================================================================

21- react-countup : یک پکیج هستش که یک عددی در یک تایمی که ما میدهیم میاد و میشماره

npm i react-countup 

===================================================================================================================================

22- moment js : با استفاده از این پکیج میتونیم اطلاعات زمانی مثلا از اون تاریخ تا تاریخ حال حاضر چن روز گشته رو بیاد و به ما نمایش بده

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
