import React, { useState,useEffect} from 'react'
import style from '../css/All.module.css'
import {useNavigate} from 'react-router-dom'

function LearnerLogin() {
 const navigate = useNavigate();
  const [learnerEmail,setEmail] = useState('');
  const [learnerPassword,setPassword] = useState('');
  //const [getLearner,setGetLearner] = useState('')

  const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log('login Successfully');
   // console.log(email+password);

    const matchLearner ={
      learnerEmail,
      learnerPassword,
    }
    console.log(matchLearner);

    const postURL ='http://localhost:5000/api/learner/login';
    const response =await fetch(postURL,{    
    method:"POST",
    body:JSON.stringify(matchLearner),
   headers:{
    "Content-Type":"application/json",
   },     
  });
console.log(response);
  if(response.ok){
 navigate("/learner");
  }
}

  
  return (
    <>
     <div className={style.leanerResigterContainer}>
      
      <form action="" onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.learnerRister}>LoginHere</h1>
    <div className={style.footerhr}></div>

      <div >
      <input type="email" placeholder='learnerEmail' 
      name="learnerEmail" className={style.learnerInputField}
      value={learnerEmail}
      onChange={e=>setEmail(e.target.value)}/>
      
      </div>
      <div >
      <input type="password" placeholder='learnerPassword'
       name="learnerPassword" className={style.learnerInputField}
       value={learnerPassword} 
       onChange={e=>setPassword(e.target.value)}/>
      </div>
      
      <button type='submit' className={style.registeBtn}>Login</button>

      <p className={style.loginForget}>New user Please register <a href="/">Click herer</a></p>
      <p className={style.loginForget}>Forget password <a href="">Click herer</a></p>
     
      </form>
      
      

    </div>
    </>
  )
}

export default LearnerLogin