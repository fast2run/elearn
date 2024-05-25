import React from 'react'
import style from '../../css/All.module.css'
import { useState } from 'react'
export default function AdminTrainer() {
    const [trainerFirstName,setFname] = useState('');
    const [trainerLastName,setLname] = useState('');
    const [trainerAge,setAge] = useState('');
    const [trainerMobile,setMobile] = useState('');
    const [trainerEmail,setEmail] = useState('');
    const [trainerPassword,setPassword] = useState('');

    const createTrainer =async(e)=>{
        e.preventDefault();
        console.log('Register Successfully');
        
        const trainerRegisterView={
          trainerFirstName,
          trainerLastName,
          trainerAge,
          trainerMobile,
          trainerEmail,
          trainerPassword,
        };
        console.log(trainerRegisterView)
    
       const postURL ='http://localhost:5000/api/trainer/register';
       const response =await fetch(postURL,{    
        method:"POST",
    
        body:JSON.stringify(trainerRegisterView),
    
       headers:{
        "Content-Type":"application/json",
       },
    
       });
       console.log(response);
    
      }


      const updateTrainer =async(e)=>{
        e.preventDefault();
        console.log('Update Successfully');
    
       const postURL ='http://localhost:5000/api/trainer/update';
       const response =await fetch(postURL,{    
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
           },
    
        body:JSON.stringify({trainerFirstName,
            trainerLastName,
            trainerAge,
            trainerMobile,
            trainerEmail,
            trainerPassword,})   
      
    
       });
       const data =await response.json();
       if(response.ok){
        console.log('user updated',data);
       }else{
        console.log('updated Failed', data.message);
       }
    }

    const deleteTrainer =async(e)=>{
        e.preventDefault();
        console.log('Deleted Sucessfully');
    
       const postURL ='http://localhost:5000/api/trainer/delete';
       const response =await fetch(postURL,{    
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
           },
           body:JSON.stringify({          
            trainerEmail
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
    <h1>Trainers</h1>
    <p>This area for create,  update and delete </p>
    
    <div className={style.adminCourseFromConainer}>
        <form action="">
            <div>
                <input type="text" name='trainerFirstName' 
                placeholder='FirstName' 
                className={style.learnerInputField}
                onChange={(e)=>setFname(e.target.value)}/>
            </div>
                <div>
                <input type="text" name='trainerLastName'
                 placeholder='LastName' 
                 className={style.learnerInputField}
                 onChange={(e)=>setLname(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='trainerAge' 
                placeholder='Age' 
                className={style.learnerInputField}
                onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='trainerMobile' 
                placeholder='Mobile' 
                className={style.learnerInputField}
                onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='trainerEmail' 
                placeholder='Email'
                className={style.learnerInputField} 
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='trainerPassword' 
                placeholder='password'
                className={style.learnerInputField}
                onChange={(e)=>setPassword(e.target.value)} />
            </div>
        </form>
    </div>
  
    <button className={style.registeBtn} onClick={createTrainer}>Create Trainer</button>
    <button className={style.registeBtn} onClick={updateTrainer}>Update Trainer</button>
    <button className={style.registeBtn} onClick={deleteTrainer}>Delete Trainer</button>
    
    </div>
    </>
  )
}
