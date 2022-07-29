/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

appendChild : در انتهای عناصر انتخاب شده ، محتوای مورد نظر را وارد می کند

prependChild  : در ابتدای عناصر انتخاب شده ، محتوای مورد نظر را انتخاب می کند

before : محتوا را قبل از عناصر انتخاب شده درج می کند

after : بعد از عناصر انتخاب شده محتوا را وارد می کند

createElement : میاد و برامون یک المنت رو به وجود میاره

createTextNode : میاد و برامون یک نود که به صورت متنی هستش رو به وجود میاره

// HTML 

<ul id="myList">
            <li>Coffee</li>
            <li>Tea</li>
 </ul>
<p>Click the button to append an item to the end of the list.</p>
 <button onclick="myFunction()">Try it</button>

//JS

function myFunction ( ) {
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Water");
   node.appendChild(textnode);
   document.getElementById("myList").appendChild(node);    }

برای استفاده و کار کردن با ویژگی ها یا پراپرتی ها

element.hasAttribute( name )  //   element.getAttribute( name )   // element.setAttribute( name,value )  //  element.removeAtribute( name )    

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

textContent فقط میاد و محتوا رو به ما نشون میدهد بدون هیچ تگی و نوشتن محتوا با استفاده از آن امن تر هستش و محتوای متنی معمولی فقط به ما میدهد
و همون محتواهای متنی رو میاد و به ما نمایش اشون میده

innerText: این ویژگی هم دقیقا شبیه به بالایی میاد و عمل میکنه

innerHtml : باعث ایجاد ری رندر در صفحه میشه و محتوای قبلی رو به صورت کلی حذف و بعد جایگزین میکند همچنین  این خصوصیت میاد و متن رو به همراه فضای خای و 
replace it  اش بر میگردونه html اون تگ ها 

هستش اینه که اگر ما بیایم و مثلا کلوز کردن یک تگ رو فراموش بکنیم خودش به صورت خودکار این کارو برامون  innerHtml یک نکته ای که پیرامون استفاده از 
انجام میده و نیازی نیست که خودمون انجام بدیم

اولی میاد و محتوای خود تگ رو فقط بهمون نشون میده ولی داخل دومی علاوه بر محتوای داخلی خود تگ رو هم در برمیگیره  outerHTML و   innerHtml  تفاوت    

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.body.innerHTML = "The new BODY !"

innerContent :بر میگردونه HTML متن رو به همراه فضای خالی اش و بدون تگ های 

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded',( )=> {  })   برای اولین بار اومد و لوود شد بیا و خط کد زیر رو برامون اجرا بکن DOM  نکته : این خط کد به ما میگه که اگر 

که میره و بین والد ها اون نزدیک ترین رو برای ما میاد و به نمایش میگزارد   closest() نکته : معرفی تابع 
console.log(event.target.closest('.collapse))

نکته : برای سرچ کردن در داخل یک فیلد سبد خرید یا سرچ امون میتونیم بیایم و  از دو  نوع اصطلاحا رخداد استفاده بکنیم 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.innerHeight    //   window.innerWidth  ما میتونیم بیایم و طول و عرض صفحه اسکرین امون رو بگیریم DOM با استفاده 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


<head>
      <script>
              alert("Form HEAD : " + document.body );  //  null , there s no < body > yet  رو بر میگردونه null  هنوز ساخته نشده پس مقدار   body  به واسطه اینکه 
      </script>
</head>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

های صفحه امون دسترسی داشته باشیم Node میتونیم بیایم و به  child Node   ما با استفاده از 

<body>

<div> Begin </div>

<ul> <li>  Information </li> <ul>

<div> End </div>

<script>

for( let i = 0 ;   i < document.body.childNodes.length ;  i++ ){
    alert ( doument.body.childNodes[ i ] );  //  Text , DIV  , TEXT  , UL , ......  , SCRIPT
}
</script>

</body>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

childNodes :  رو میاد و بر میگردونه collection  به ما یک 

// show all nodes from the collection

for( let node of document.body.childNodes ){  alert ( node ) }

// Array methods wont work  به واسطه کالکشن بودن متد های آرایه روشون کار نمیکنند که باید بیایم و تبدیل اشون کنیم

alert ( document.body.childNodes.filter)

// Convert Collection to Array
alert( Array.from(document.body.childNodes).filter )

// DOM collections are read - only
// DOM collections are live
// Dont use for in to loop over collection

elem.childNodes[0] === elem.fristChild

elem.childNodes[elem.childNodes.length - 1 ] ===  elem.lastChild

1.  create <div> element

let div = document.createElement("div")

2. Set its class to alert

div.className = "alert"

3. Fill it with the content

div.innerHTML = "<strong>Hi there ! </strong> you ve read an important message . "

document.createTextNode("Hello")
document.createComment("this is comment")

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

inserion methods 

<ol   id ="ol"> 
          <li> prepend </li>
          <li> 1</li>
          <li> 2</li>
          <li> append</li>
</ol>

<script>

ol.before("before") // insert string  "before"  before <ol>
ol.after("hello")  // insert  string "after" after <ol>

let Frist = document.createElement("li")  
Frist.innerHTML = "prepend"
ol.prepend(Frist)  //  insert  Frist  at the begining of <ol>

let last = document.createElement("li")
last.innerHTML = "append"
ol.prepend(last)   insert last at the end of <ol>

</script>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

inserion  Adjacent   methods  برخلاف بالایی ما بهش اعلام میکنیم که دقیقا چه چیزی رو میخایم بیایم و بسازیم و باید تحویل ما بده

<div  id = "div" >  . . . </div>

<script>

// frist argument can be :

//  "beforebegin"   -   insert  html  immediately  before  elem .
//  "afterbegin"      -   insert  html intro elem  at the begining . 
// "beforeend"       -   insert  html  into elem  at the  end  .
// "afterend"          -   insert  html   immediately  after elem .

div.insertAdjacentHTML("beforebegin" , "<p>Hello</p>")

div.insertAdjacentText("afterend" , "bye")

let h1 = document.createElement("h1")
h1.className = "alert"
h1.innerHTML = "this is alert"

div.insertAdjacentElement("beforeend" , h1)

</script>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

clone element  کپی کردن یک المنت

<div  class =" alert " id = " div " >
    <strong> Hi threre ! <strong> you read an important message
</div>

<script>

let div2 = div.cloneNode(true) // باشه اون هارو در نظر نمیگیره false  و اگر  true یعنی اگر فرزندی داشت بیا و اون فرزنداش رو هم برام کپی بگیرشون

div2.querySelector("strong"),innerHTML = "Bye threre !"

div.after(div2)

<script>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Fragment

<ul  id="ul"></ul>

<script>

function getListContent () {

    let fragment = new DocumentFragment()

    for( let i = 1  ;  i <= 3 ; i++){
      let li = document.createElement("li")
      li.append(i)
      fragment.append(i)
    }

    return fragment
}

  ul.append(getListContent)   //   ( * )

</script>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

style and class

1 - 

<body class = "main Page" >

<script>

  alert(document.body.className)  //  main Page
  document.body.classList.add("article")
  alert(document.body.className)  //  main page article

  // elem.classList.add/remove("class")  -  add/remove the class
  // elem.classList.toggle("class")  - add the class if  it dosent  exist otherwise remove it .
  // elem.classList  -  adds the class ther  if  it dosent exist , otherwise remove it
  // elem.classList - checks for the given class  returns true / false

</script>

2 - 

<body class = "main Page" >

<script>

document.body.style.background = "green"

setTimeout( () => document.body.style.background = "" , 3000)

document.body.style.cssText = "background-color :  "red" "  میشه replace  در این حالت به طور کلی همه ی استایل هامون میاد و 

</script>

3 - getComputedStyle (document.body)
     getResolveStyle (document.body)

alert(document.body.style.color)   // empty
alert(document.body.style.marginTop)  // empty

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// parent of   <body>  is <html>

alert( document.body.parentNode ===  document.document.Element ) ; // true

// after <head>  gose <body>

alert( document.head.nextSibling );

// before <body>  gose <head>

alert( document.head.previousSibling );

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

elements :

  children -  only those children  that are element nodes
  fristElementChild  ,  lastElementChild  - frist and last element  children
  previousElementSibling , nextElementSibling - neigbor elements
  parentElement - parent element

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h1>Contents</h1>
<div class="contents">
  <ul class="book">
      <li class="chapter"> Chapter 1  </li>
      <li class="chapter"> Chapter 2  </li>
  </ul>
</div>

<script>

  let chapter = document.querySelector(".chapter")   // LI

  alert(chapter.closest(".book")) // UL
  alert(chapter.closest(".contents"))  // DIV

  alert(chapter.closest("h1"))  // null نیستش chapter چون اصلا این تگ جزو اجداد 

<script>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<body>  <!-- comment -->

alert( document.body.tagName ) // BODY
alert( document.body.nodeName ) // BODY

// for comment

alert( document.body.fristChild.tagName )  // undefined ( not an element )
alert( document.body.fristChild.nodeName )  //  # comment

// for comment

alert( document.tagName ) // undefined ( not an element )
alert( document.nodeName )  // #document

<body>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Atribute

elem.hasAttribute(name)  - check for existence
elem.getAttribute(name)  - get the value
elem.setAttribute(name,value)   - set the value
elem.removeAttribute  - remove the attribute
elem.attrAttribute - collection of attrs

رو هامون رو ببینیم attribute  میتونیم بیایم و  outerHTML  نکته : ما با استفاده از 

از اون ها استفاده میکنیم case insensetive  ما به صورت  attribute برای نامگزاری 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

داریم  Atribute  ما به طور کلی دو نوع 

1- Standard Attribute

2- None Standard : ها استفاده بکنیم dataset  تعریف کنیم که به صورت باشند بهتر هستش که بیایم و از  Attribute اگر ما خواستیم که بیایم و یک سری 

<div id = "second"  data-age="18" ></div>

alert(window.second.dataset.age)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

btn.addEventListener  ("click" ,  testFunc , {
  once : true  به طور پیش فرض فقط یک بار باید بیاد و اجرا بشه
  capture  برای مبحث خودش در بالا
  passive : به نحوی داره میگه که قرار نیست در جایی جلوش گرفته بشه
})

btn.removeEventListener ( "click" , test  )

Document events 
     DOMContentLoaded برای اینکه وقتی صفحه دفعه اولش اومد و باز شد بیا و نمایش بده

 
isTrust : یعنی این رویداد توسط یک کاربرد تولید شده و اگر نادرست باشه یعنی توسط خود کد های جی اس اومده و تولید شده

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

با استفاده از جاواسکریپت بیایم و درست  بکنیم راه حل های بسیار زیادی وجود داره برای مثال میتونیم بیایم و از   html  خوب ما اگر بخایم بیایم و یک خروجی به صورت  
ها برای ایجاد تگ هامون استفاده بکنیم یک راه حل دیگه به شیوه زیر هستش createElement 

<Template>  : the Content Template element  ای هستش که مرورگر اون رو به کاربر نمایش نمیده ولی برای اعتبار سنجی میتونیمhtml  یک تگ استاندارد 
ازش بیایم و استفاده بکنیم و محتوای داخل اون رو کپی کنیم  

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

custom Event  : بیایم و یکسری رویداد های اختصاصی برای خودمون بسازیم  Event ما میتونیم با استفاده از کلاس خود 
و اطلاعات اضافه تری رو بهش پاس بدیم



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
