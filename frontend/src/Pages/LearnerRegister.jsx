import {useState} from 'react'
import style from '../css/All.module.css'

export default function LearnerRegister() {

  // const[formData,setFormData]=useState({
  //   learnerFirstName:"",
  //   learnerLastName:"",
  //   learnerAge:'',
  //   learnerEmail:'',
  //   learnerPassword:''

  // });

  // const handleChange=(e)=>{
  //   const{name,value}=e.target;
  //   setFormData({
  //     ...formData,[name]:value
  //   })
  // }


  const [learnerFirstName,setFname]=useState('');
  const [learnerLastName,setLname]=useState('');
  const [learnerAge,setAge]=useState('');
  const [learnerMobile,setMobile]=useState('');
  const [learnerEmail,setEmail]=useState('')
  const [learnerPassword,setPassword]=useState('');

  

      const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log('Register Successfully');
    
    const learnerRegisterView={
      learnerFirstName,
      learnerLastName,
      learnerAge,
      learnerMobile,
      learnerEmail,
      learnerPassword,
    };
    console.log(learnerRegisterView)

   const postURL ='http://localhost:5000/api/learner/register';
   const response =await fetch(postURL,{    
    method:"POST",

    body:JSON.stringify(learnerRegisterView),

   headers:{
    "Content-Type":"application/json",
   },

   });
   console.log(response);

  }
  return (
    <>
              
      <div className={style.leanerResigterContainer}>
      
        <form action="" onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.learnerRister}>RegisterHere</h1>
      <div className={style.footerhr}></div>

        <div >
        <input type="text" placeholder='FirstName' name="learnerFirstName" 
        className={style.learnerInputField}
        value={learnerFirstName} 
        onChange={(e)=>setFname(e.target.value)}
        />
        </div>
        <div >
        <input type="text" placeholder='LastName' name="learnerLastName" 
        className={style.learnerInputField} 
        value={learnerLastName}
        onChange={(e)=>setLname(e.target.value)}/>
        </div>
        <div >
        <input type="text" placeholder='age' name="learnerAge" 
        className={style.learnerInputField} 
        value={learnerAge}
        onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div >
        <input type="text" placeholder='Mobile' name="learnerMobile" 
        className={style.learnerInputField} 
        value={learnerMobile}
        onChange={(e)=>setMobile(e.target.value)}/>
        </div>
        <div>
        <input type="email" placeholder='email' name="learnerEmail" 
        className={style.learnerInputField} 
        value={learnerEmail}
        onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div >
        <input type="text" placeholder='password' name="learnerPassword" 
        className={style.learnerInputField} 
        value={learnerPassword}
        onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className={style.registeBtn}>Register</button>
        <p className={style.loginForget}>Already user please  <a href="/">Click herer</a></p>
        </form>
        

      </div>
    </>
  )
}
