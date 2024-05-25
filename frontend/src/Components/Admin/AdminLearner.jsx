import React, { useEffect, useState } from 'react'
import style from '../../css/All.module.css'



export default function AdminLearner() {

   
    const [learnerFirstName,setFname]=useState('');
    const [learnerLastName,setLname]=useState('');
    const [learnerAge,setAge]=useState('');
    const [learnerMobile,setMobile]=useState('');
    const [learnerEmail,setEmail]=useState('')
    const [learnerPassword,setPassword]=useState('');
  
    
  
        const createLearner =async(e)=>{
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

    const updateLearner =async(e)=>{
        e.preventDefault();
        console.log('Register Successfully');
    
       const postURL ='http://localhost:5000/api/learner/update';
       const response =await fetch(postURL,{    
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
           },
    
        body:JSON.stringify({learnerFirstName,
            learnerLastName,
            learnerAge,
            learnerMobile,
            learnerEmail,
            learnerPassword,})   
      
    
       });
       const data =await response.json();
       if(response.ok){
        console.log('user updated',data);
       }else{
        console.log('updated Failed', data.message);
       }
    }

    const deleteLearner =async(e)=>{
        e.preventDefault();
        console.log('Deleted Sucessfully');
    
       const postURL ='http://localhost:5000/api/learner/delete';
       const response =await fetch(postURL,{    
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
           },
           body:JSON.stringify({          
            learnerEmail
            }),
        });
    
      
       const data =await response.json();
       if(response.ok){
        console.log('user Delete',data);
       }else{
        console.log('Deleted Failed', data.message);
       }
    }

  return (
    <>
    <div className={style.adminCourseContaier}>
    <h1>Learner </h1>
    <p>This area for create, update and delete </p>
    
    <div className={style.adminCourseFromConainer}>
        <form action="" >
        
            <div>
                <input type="text" name='learnerFirstName' 
                placeholder='FirstName' 
                className={style.learnerInputField}
                onChange={(e)=>setFname(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='larnerLastName'
                 placeholder='LastName' 
                 className={style.learnerInputField}
                 onChange={(e)=>setLname(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='learnerAge' 
                placeholder='Age' 
                className={style.learnerInputField}
                onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='learnerMobile' 
                placeholder='Mobile'
                className={style.learnerInputField} 
                onChange={(e)=>setMobile (e.target.value)}/>
            </div>
            <div>
                <input type="text" name='learnerEmail' 
                placeholder='Email'
                className={style.learnerInputField}
                onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <input type="text" name='learnerPassword' 
                placeholder='password'
                className={style.learnerInputField} 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
           
        </form>
    </div>
  
    <button className={style.registeBtn} onClick={createLearner}>Create learner</button>
    <button className={style.registeBtn} onClick={updateLearner}>Update learner</button>
    <button className={style.registeBtn} onClick={deleteLearner}>Delete learner</button>
    
    </div>
    </>
  )
}
