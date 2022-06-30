/*

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1- variables  :

scope !global  برای تعریف متغیر گلوبال هم
$ برای تعریف متغیر ها باید بیایم و از 
استفاده بکنیم 
 
_variables.scss  :

      $color-blue :  #0fkdsff';           $base-path  : "../ " ;
     
   _Bases.scss   :      a { color :  $color-blue }

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2- nesting  

    css     ul li a   {    }

    sass    ul  { 

                 li{

                     a  {   }

                           }
                  
                                 }

نکته : sudeo class & sudeo element  :  &:hover { }   &::after { } در داخل تگ مربوطه

نکته : shift + 7  بنویسیم یا از کلید های ترکیبی   &   استفاده کردیم برای حل این موضوع باید اون رو به صورت BEM اگر اومدیم و از روش نامگزااری به صورت 
استفاده بکنیم  

.search {   .searh__form {   }   }     //      .search {   .&__form {   }  }

نکته :  .search { $parent : & ; ..    ..    #{$parent}__input { }  }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

3- pattern or import : برای اضافه کردن و ماژولار کردن فایل هامون

 //    @import "abstracts/variables"    //    @import "base/base" , "base/fonts" , "base/helper"

//  کافی هستش که بیایم و از  sass نکته : برای کامنت نوشتن در داخل 
 استفاده بکنیم

/*  li link a  *      //  li link a 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

4 -  functions یکسری توابع که میتونیم باهاشون مدیریت استایل هامون  رو بهتر بیایم و انجام بدهیم

darken(#444,15%)              lighten(#444,15%)

@function   sum ( $first , $second , $thrid) {     @return   $first + $second  + $third;         }

.test   {     width : sum( 2 ,3 , 5 ) +    rem  or   width : sum( 2 ,3 , 5 ) *  1rem   }

@function image( $file ) {   @return url ($base-path + ' images/ ' + $file );        }

@function fonts( $file ) {   @return url ($base-path + ' fonts/ ' + $file );        }
   
.test {  background-image : image('logo-header.png')  }  
    
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
