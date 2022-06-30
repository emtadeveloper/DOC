/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

style component   :  هستش که برای نصب اش از روش زیر استفاده نیکنیم css in js  خوب همین طور که در بالا گفته شد یک نوع روش استایل دهی به صورت

npm install --save styled-components  که میایم و پکیج اون رو نصب میکنیم و بعد یک پلاگین هستش در ادیتور امون که اون هم نصب میکنیم که به همین

vscode-styled-components  اسمه خوب بعد از نصب کردن فقط کافی هستش که بیایم و اون رو به پروژه امون اضافه بکنیم

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Getting Started   =============================================

import styled from "styled-components";    ما تمام کامپوننت هایی که با این کتابخونه مینویسیم باید با حروف بزرگ یا اصطلاحا پاسکال باشند

const Button = styled.button`
    color: white;   background: #f8049c;
    font-weight: bold;    padding: 8px;    box-shadow : none
    & : disabled {
        background: #eee;  color : #666     }  `;   
export default Button;
 
<Button    disabled  />   حالا هر جا که لازم داشته باشیم میتونیم بیایم و از این دکمه استفاده بکنیم

& :  ما اگر خواستیم بیایم و از سودو المنت ها استفاده بکنیم به این صورت میایم و اون رو انتخاب میکنیم

&:hover   & : disabled

const Thing = styled.div.attrs((props ) => ({ tabIndex: 0 })) `

& ~ & {background: #f44;  }  که بعدش اومده رو انتخاب بکن Thing بیا و اون تگ
  
& + & { background: #ff1f; }  که بعدش اومده رو انتخاب کن  Thing  بیا و دقیقا بلافاصله اون تگ 
  
&.something {  background: orange; }  داره رو انتخاب کن something که کلاس Thing  بیا و تگ
 
.something-else & {   border: 1px solid; } رو تغیر بده  Thing انتخاب کن و فرزند  something-else  بیا تگ 

`;

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Adapting based on props  =============================================

هم به کدهامون اضافه کنیم که یک حالت شرطی بگیره برای این کار میتونیم بیایم و برای بکگراند این کار رو اعمال کنیم props خوب ما میتونیم بیایم و طبق مثال بالا بیایم  و یک 

const Button = styled.button` background  :  $ { props => props.primary ? "#f8049c" : red }      <Button    primary   disabled  />    `;   

رو از کتابخونه اش اضافه بکنیم css بیایم و یک سری استایل های زیادی رو بدیم میتونیم بیایم و از این شیوه پایینی استفاده کنیم فقط قبلش باید   props حالا اگر ما خواستیم که با دادن 

${ props => props.large ?  css`  padding:20px;  border-readuis: 10xp;  font-size:1.5rem  `:  css`  padding:10px;  border-readuis: 5xp;  font-size:1rem  `}   

const LabelText = styled.span`
    ${(props) => { switch (props.$mode) {  

            case "dark":       return css`    background-color: black;     color: white; ${Input}:checked + && {  color: blue;    }    `; 

            default:     return css`      background-color: white;  color: black;  ${Input}:checked + && {  color: red;    }  `;  }   }} `;

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Attaching additional props  // Overriding .attrs     =============================================

ما میتونیم بیایم و یکسری اتریبیوت هم برای استایل هامون با این شیوه تعریف بکنیم

import Input from "./Input";

const  PasswordInputStyle = styled(Input).attrs(()=>({    type : "password",     placeholder : "password" }))`  border-top : 0  ` ;

const Input = styled.input.attrs(props => ({   size: props.size || "1em" }))`  color: palevioletred;   font-size: 1em;
margin: ${props => props.size}; padding: ${props => props.size};  `;

${Button}: frist-of-type {  margin-top : 40px  }  رفرنس بدیم و بیایم و استفاده بکنیم که الان به صورت ترکیبی با سلکتور ها اومدیم و استفاده کردیم

مبحث رفرنس دادن یعنی بیایم و به یک استایل کامپوننت داخل یک استایل کامپوننت دیگه بیایم و رفرنس بدیم

برای این کار فقط کافی هستش که اون کامپوننت استایلی که لازم داریم رو بیایم و به شیوه زیر


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Extending Styles  =============================================


const Button = styled.button`   color: palevioletred;   `;  می شوند override میتونیم بیایم و از استایل هامون ارث بری داشته باشیم و اون هارو توصعه بدیم با این کار استایل ها 

const TomatoButton = styled(Button)`  color: tomato;  border-color: tomato; `;

render( <div> <Button>Normal Button</Button>    <TomatoButton>Tomato Button</TomatoButton>   </div> );
  
ما میتونیم هر جا که نیاز داشتیم بیایم و اون نوع تگی که تعریف کردیم رو بیایم و تغیر بدیم بعدا برای مثال کد های زیر رو نگاه کن

<Button as="a" href="#">Link with Button styles</Button>

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

<Button as={ReversedButton}>Custom Button with Normal Button styles</Button>

ببین یک موقعی هستش که ما لازم داریم که بیایم و استایل پیش فرض یک کامپوننت رو که از یک کتابخونه دانلود شده و داریم ازش استفاده میکنیم رو عوض کنیمب رای مثال ما اومدیم و از کتابخونه ی
رو بیایم و عوض کنیم برای این کار میایم و به شیوه زیر عوض میکنیم Link استفاده کردیم و نیاز داریم که بیایم و استایل یکی از کامپوننت هاشو به نام  React Router  

import { Link }  from "react-router-dom"

const StyledLink = styled(Link) `   padding 4px 8px ....... `   از این قابلیت ما میتونیم بیایم و برای همه کامپوننت های دیگه ام استفاده بکنیم و محدودیتی نیست یعنی یک کامپوننت
با استایل کامپوننت باشه ولی بعدا باز به این تابع همون بدیم تا یک سری چیزای دیگه بهش اضافه بکنه

<StyledLink  to="/" > Home <StyledLink>   استفاده بکنیم  StyledLink  از Link   فقط کافیه بیایم و به جای

خوب یک مشکل دیگه که در این مدل استفاده کردن ها داریم این هستش که ما اجازه نداریم بیایم و بهش همین جوری پراپس پاس بدیم تا از قابلیت های شرطی در استایل دهی هامون استفاده بکنیم

import { Link  as lin}  from "react-router-dom"

const  Link = ({ isActive , children , ...props })=> { return ( <lin { ...props } >{ children }< /lin > )}

<StyledLink  to="/"   isActive> Home <StyledLink>  حالا اگر بیایم و استفاده بکنیم دیگه بهمون گیر نمیده

میتونیم بیایم و یک تریک قشنگ برای اینکه مثلا در هر مسیری که بودیم بیایم و اون رو بولد نمایش بده isActive با استفاده همین تکنیک و استایل مربوط به 

const { pathname } = useLocation()

<StyledLink  to="/"   isActive = { pathname === "/" }> Home <StyledLink>  

<StyledLink  to="/login"   isActive = { pathname === "/login" } > login <StyledLink> 

فقط کافیه در داخل کدهامون بیایم و از مدیا ها استفاده بکنیم mobile frist  استفاده از مدیا کوری ها در استایل کامپوننت ها یا اصطلاحا طراحی
 
const Button = styled.nav` display : block   @media(min-width : 768px ){  display : flex;   postion: relative }`;

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Animations  =============================================
 
اگر نیاز داشتیم بیایم و از انیمشن ها استفاده کنیم میتونیم بیایم وبه صورت زیر عمل کنیم

const rotate = keyframes`  from {  transform: rotate(0deg);   }    to { transform: rotate(360deg);   } `;

const Rotate = styled.div`   display: inline-block;  animation: ${rotate} 2s linear infinite; padding: 2rem 1rem;  font-size: 1.2rem; `;

render(  <Rotate>&lt; 💅🏾 &gt;</Rotate> );

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

animation  =============================================

اگر نیاز داشتیم بیایم و از انیمشن ها استفاده کنیم میتونیم بیایم وبه صورت زیر عمل کنیم

const rotate = keyframes`  from {  transform: rotate(0deg);   }    to { transform: rotate(360deg);   } `;

const Rotate = styled.div`   display: inline-block;  animation: ${rotate} 2s linear infinite; padding: 2rem 1rem;  font-size: 1.2rem; `;

render(  <Rotate>&lt; 💅🏾 &gt;</Rotate> );

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Theming  =============================================

استفاده از متغیر ها و تم ها در هنگام کار با کتابخونه استایل کامپوننت

import { ThemeProvider } from "styled-components";

const theme = {   primaryColor : '''   ,  secoundryColor : ""  ,  thridColor : ""};

<ThemeProvider theme={theme}>
  و در داخل اینجا هر کامپوننتی بنویسیم به متغیر هایی که در ابجکت تم تعریف کردیم میتونیم بیایم و دسترسی داشته باشیم
</ThemeProvider>

حالا در داخل کامپوننت های استایل امون هر کجا که نیاز داشتیم میتونیم بیایم و با استفاده از پراپس ها بهش دسترسی  داشته باشیم

${   props => props.primaryColor  }  or  p => p.theme.primaryColor به عنوان رنگ میتونیم بیایم و استفاده بکنیم

و در داخلش بیایم و دو تا فایل با نام های دارک و لایت درست کنیم theme  برای درست کردن دو تا تم مختلف پیشنهاد میشه که بیایم و یک پوشه درست کنیم با نام 
که در بالا نوشتین با تفاوت در تعریف رنگ ها بیایم و بنویسیم  و با تعریف کردن theme و بعد در داخل کامپوننت اپ امون جفتشونو رو اضافه میکنیم و با استفاده از 
ها اون هارو مدیریت میکنیم state 

const theme = {  id : "dark",  primaryColor : '''   ,  secoundryColor : ""  ,  thridColor : ""};  // dark 
const theme = {  id : "light",  primaryColor : '''   ,  secoundryColor : ""  ,  thridColor : ""};  // light

const  [theme , setTheme ] = useState (LightTheme)

<ThemeProvider theme={{ ...theme , setTheme : ()=>{  setTheme(s => s.id === "light"  ?  DarkTheme  : LightTheme) }}}>
و در داخل اینجا هر کامپوننتی بنویسیم به متغیر هایی که در ابجکت تم تعریف کردیم میتونیم بیایم و دسترسی داشته باشیم
</ThemeProvider>

const { id  , setTheme } = useContext( ThemeContext );

<Toggle  isActive = { id == "dark " }  onToggle={setTheme }/>

یک تریک برای طراحی یک همبرگر منو

const  MobileMenuIcon = styled.div `    margin : auto ....... >  div   {     height : 3px  ..... }   @media ( min-width : 768px ){  display : none  } `;

const [ menuOpen , setMenuOpen ]  = useState(false)

<MobileMenuIcon>   <div/>  <div/>  <div/>  </MobileMenuIcon>

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

props.type  معرفی ابزار

npm  i prop-types

import   propTypes     from     prop-types
 
Button.propTypes = {     large : propTypes.bool,    primary : propTypes.bool    }

خوب ما اگر لازم داشته باشیم میتونیم بیایم و یکسری کانفیگ که به صورت گلوبال داشته باشیم به طوری که در همه استایل هایی که داریم بیاد و اعمال بشه برای اینکار باید بیایم که یکی از
کاربرد های اون این هستش که میتونیم  برای تغیر دادم تم سایت امون هم بیایم و از اون استفاده بکنیم

const GlobalStyle = createGlobalStyle`  body  {  color: black;      background: white;   width:100vw;    height : 100vh;  margin:0;          font-weight: bold;     }

<GlobalStyle>  <h1>Emad</h1>   </GlobalStyle>

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
