/*

که باید از اون استفاده بکنیم contextType  برای استفاده از کانتکس در داخل کلاس کامپوننت ها یک استاتیک تایپ داریم به نام 

UserInfo.contextType = AuthContext

export default class UserInfoC extends Component {

static contextType = AuthContext ////// //////    راه حل اول

render() {    let user = this.context 

 return (  <div> <p>user ID  : {user.id}</p>   </div>   )  } }

UserInfo.contextType = AuthContext      //////////////    راه حل دوم
 

*/
