import React, { useEffect, useState } from 'react'
import style from '../../css/All.module.css'

import imageCourese from '../../assets/coursecode.svg'


export default function HeaderBodyCourse() {
  const [courseGet,setCourseGet] = useState(null)
  useEffect(()=>{
    const viewCourseData=async()=>{
      const response = await fetch('http://localhost:5000/api/course/');
      console.log(response);
      const data = await response.json();
      console.log(data);
      if(response.ok){
        setCourseGet(data)
      }
    };
    viewCourseData();
  },[]);
  console.log(courseGet);

  return (
    <>
    <div className={style.bodyCourseCountainer}>
        <h1>Our Valuable Courese</h1>
        <h2>Course main Details</h2>
        <img src={imageCourese} alt="Image" className={style.imageCourse}/>
         <div>
          {
            courseGet && courseGet.map((get)=>(
              <section key={get.id} className={style.courseDisplayCon}>
                <p>CourseName : {get.courseName}</p>
                <p>CourseStartDate :{get.courseStartDate}</p>
                <p>courseEndDate:{get.courseEndDate}</p>
                <p>courseFees:{get.courseFees}</p>
                <a href="/learnerRegister">Purchase</a>        
              </section>
            ))  
          }
          </div>
          
        <h2>Find and Explore more <a href=''>....</a></h2>
    </div>
    </>
    
  )
}
