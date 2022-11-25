import { useState } from "react";
import { useNavigate } from "react-router-dom";
import download from '../images/download.png';


const Form12=()=>{
    const [details,setDetails]=useState({
        user_email:'',
        user_pass:'',
        user_check:''
    });
    let navigate=useNavigate();
    const peoples=[
      {
      userEmail:'john@123',
       userPass :'login'
      },
      {
      userEmail:'john@1231',
       userPss:'login1'
      },{
      userEmail:'john@1232',
       userPass:'login2'
      },{
      userEmail:'john@1233',
       userPass:'login3'
      },{
      userEmail:'john@1234',
       userPass:'login4'
      },{
      userEmail:'john@1235',
       userPass:'login5'
      },{
      userEmail:'john@1236',
       userPass:'login6'
      },{
      userEmail:'john@1237',
       userPass:'login7'
      },
];

    function handleSubmit(e){
        e.preventDefault();
        let userDetails={
          userEmail:details.user_email,
        userPass:details.user_pass};
        let account=[];
        account.push(userDetails);
        console.log(JSON.stringify(account[0]));
        console.log();
        function checkName(people){
         return people.userPass+people.userEmail===userDetails.userPass+userDetails.userEmail
        };
        if(peoples.some(checkName)){
          navigate('main')
    }else{
      return alert('wrong deatils');
    }
  }

    return(
        <div className="backgroundImg1">
        <div className="form2"><form className="form1" onSubmit={handleSubmit}>
  <ul className="list1">
    <li style={{fontSize:'30px',textAlign:'center'}}>MEME CREATOR</li>
    <li style={{fontSize:'23px',textAlign:'center' }}>Login</li>
    <li>
      <label>UserEmail:</label>
      <input type="email" id="name" name="user_email"  onChange={(e)=>setDetails({
                                                                                ...details,
                                                                                user_email: e.target.value
      })} value={details.user_email} />
    </li>
    <li>
      <label>Password:</label>
      <input type="password" id="mail" name="user_pass" onChange={(e)=>setDetails({...details,user_pass: e.target.value})} value={details.user_pass} />
    </li>
    <li>
      <input type='checkbox' id="msg" name="user_check" onChange={(e)=>setDetails({...details,user_check:e.target.checked})} value={details.user_check}/>
      <label>remember account</label>
    </li>
    <li>
        <button className="button1 button2" type="submit">Login</button>
    </li>
  </ul>
</form>
</div>
</div>
    )
}

export default Form12;