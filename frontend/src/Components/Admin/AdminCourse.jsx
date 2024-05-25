import React,{useState,useEffect} from 'react'
import style from '../../css/All.module.css'

function AdminCourse() {
    const [courseName, setCourseName] = useState('');
    const [courseStartDate, setCourseStartDate] = useState('');
    const [courseEndDate, setCourseEndDate] = useState('');
    const [courseFees, setCourseFees] = useState('');

    const createCourse = async(e) =>{
        e.preventDefault();
        console.log('Register Successful');
        const createCourseDetails ={
            courseName,
            courseStartDate,
            courseEndDate,
            courseFees
        };
        console.log(createCourseDetails);
        const postURL ='http://localhost:5000/api/course/register';
        const response =await fetch(postURL,{    
         method:"POST",
     
         body:JSON.stringify(createCourseDetails),
     
        headers:{
         "Content-Type":"application/json",
        },
     
        });
    
        console.log(response);
    
    }

    const updateCourse =async(e)=>{
        e.preventDefault();
        console.log('Update Successfully');
    
       const postURL ='http://localhost:5000/api/course/update';
       const response =await fetch(postURL,{    
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
           },
    
        body:JSON.stringify({courseName,
            courseStartDate,
            courseEndDate,
            courseFees,
            })   
      
    
       });
       const data =await response.json();
       if(response.ok){
        console.log('user updated',data);
       }else{
        console.log('updated Failed', data.message);
       }
    }

    const deleteCourse =async(e) =>{
        e.preventDefault();
        console.log('item deleted successfully');
        const postURL ='http://localhost:5000/api/course/delete';
        const response =await fetch(postURL,{    
         method:"DELETE",
         headers:{
             "Content-Type":"application/json",
            },
            body:JSON.stringify({          
             courseName
             }),
         });
         const data =await response.json();
         if(response.ok){
          console.log('course Delete',data);
         }else{
          console.log('Deleted Failed', data.message);
         }
    }

  return (
    <>
    <div className={style.adminCourseContaier}>
    <h1>Course</h1>
    <p>This area for create, update and delete </p>
    
    <div className={style.adminCourseFromConainer}>
        <form action="">
            <div>
                <input type="text" name='courseName' 
                placeholder='CoruseName' 
                className={style.learnerInputField}
                onChange={(e)=>setCourseName(e.target.value)}
                />
            </div>
                <div>
                <input type="text" name='courseStartDate'
                 placeholder='StartDate' 
                 className={style.learnerInputField}
                 onChange={(e)=>setCourseStartDate(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='courseEndDate' 
                placeholder='EndDate' 
                className={style.learnerInputField}
                onChange={(e)=> setCourseEndDate(e.target.value)}/>
            </div>
            <div>
                <input type="text" name='courseFees' 
                placeholder='Fees'
                className={style.learnerInputField} 
                onChange={(e)=>setCourseFees(e.target.value)}/>
            </div>
            <br />
            <br />
            <br />

        </form>
    </div>
  
    <button className={style.registeBtn} onClick={createCourse}>Create Course</button>
    <button className={style.registeBtn} onClick={updateCourse}>Update Course</button>
    <button className={style.registeBtn} onClick={deleteCourse}>Delete Course</button>
    
    </div>
    </>
  )
}

export default AdminCourse