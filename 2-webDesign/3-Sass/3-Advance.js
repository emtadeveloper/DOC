/*

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

4- mixin  : null   فرض کنید ما در طی پروژه امون یک دکمه داریم که  همه جای پروژه مشترک فقط  رنگ اش فرق میکند

// css
 
.btn { .... }    :  tag  :  btn btn-sucsess
.btn-sucsess { ... }

//sass

@mixin btn($color : red) {
    ..... btn
    color : $ color 
}

btn-sucsess {
    @include btn(green)
}

@mixin  box ($width , $height : 5 ) {
    width : $width + rem ;
    height : $height + rem ;
}

ما میتونیم با استفاده از میکسین ها بیایم و یک سری مقادیر پیش فرض رو هم بدهیم 

@mixin  flex( $justify-content : false , $align-items : false ,  $wrap : false ) {
    display : flex ;
    @if ( $justify-content ) {
               justify-content  : $justify-content
    }
    @if ( $align-items ) {
               align-items  : $align-items
    }
    @if ( $wrap ) {
               wrap  : $wrap
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

5- extend به شدت شبیه بالایی تفاوت اش در کم کردن حجم کدهامون هستش
اون چیزایی که مشترک هستش رو مینویسه و عینا یک جا مینویسه در کامپایل کردن
و کم کردن حجم کدهامون به شدت تاثیر دارد  css کدهامون به 

در آن متغیر ها و مقدار دان نمی شود استفاده کرد

%simple-box {
    width : 400px ;
    height : 400px
}

.box1 {
    @extend %simple-box;
    background-color : yellow ;
}

.box2 {
    @extend %simple-box;
    background-color : oranged ;
}

css //

.box1 , box2 {
    width : 400px ;
    height : 400px ;
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

6- loop :  @for @i from number through number2 { }

بیشتر کاربردش در گرید بندی ها و کلاس های یکی هستش

 @for @i from 1 through 12 {
     .#{name}-#{@i} {
            style  }
     }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------           

7- conditional-statement  :   @if () {   } @else {    }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

container Responsive     // scss

.container {
    
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;

    @media only screen and (min-width: 576px) {
        max-width: 540px;    }
    @media only screen and (min-width: 768px) {
        max-width: 720px;    }
    @media only screen and (min-width: 992px) {
        max-width: 960px;    }
    @media only screen and (min-width: 1200px) {
        max-width: 1140px;  }
    @media only screen and (min-width: 1400px) {
        max-width: 1320px;  }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/