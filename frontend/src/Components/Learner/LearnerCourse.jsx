import React, { useState,useEffect } from 'react'
import style from '../../css/All.module.css'
import '../../App.css'

function LearnerCourse(props) {
    const [courseGet,setCourseGet] = useState('')
    useEffect(()=>{
      const viewCourseData=async()=>{
        const response = await fetch('http://localhost:5000/api/course/657da873ca94775db81f367e');
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
        <h1>Fire & Enjoy to Learn Your Course</h1>
        <h2>Your Selected Course  - <span className={style.learnerDev}>{courseGet.courseName}</span></h2>
        <h2>coures start date - <span className={style.learnerDev}>{courseGet.courseStartDate}</span></h2>
        <h2>coures end date - <span className={style.learnerDev}>{courseGet.courseEndDate}</span></h2>
        <h2>course Fees - <span className={style.learnerDev}>{courseGet.courseFees}</span></h2>
       
       
    </div>
    </>
  )
}

export default LearnerCourse