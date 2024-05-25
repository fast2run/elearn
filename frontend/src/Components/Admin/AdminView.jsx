import React, { useEffect, useState } from 'react'
import style from '../../css/All.module.css'

export default function AdminView() {
  const [courseData,setCourseData] = useState('');
  const[learnerData, setLearnerData] = useState('');
  const [trainerData, setTrainerData] = useState('');


  const handleCourse = async(e)=>{
    e.preventDefault();
    console.log("this is all course");
    const response = await fetch('http://localhost:5000/api/course/');
    console.log(response);
    const data = await response.json();
    console.log(data);
    if(response.ok){
      setCourseData(data);
    }
    console.log(courseData);
  }

  const handleLearner = async(e)=>{
    e.preventDefault();
    console.log("this is all course");
    const response = await fetch('http://localhost:5000/api/learner/');
    console.log(response);
    const data = await response.json();
    console.log(data);
    if(response.ok){
      setLearnerData(data);
    }
    console.log(learnerData);

  }
  const handleTrainer = async(e)=>{
    e.preventDefault();
    console.log("this is all course");
    const response = await fetch('http://localhost:5000/api/trainer/');
    console.log(response);
    const data = await response.json();
    console.log(data);
    if(response.ok){
      setTrainerData(data);
    }
    console.log(trainerData);

  }
  return (
    <>
    <div className={style.adminViewContainer}>
        <div className={style.adminviewdet}>
            <h1>Click to view all details</h1>
            <button className={style.adminBtn} onClick={handleCourse}>View Course</button>
            <button className={style.adminBtn} onClick={handleLearner}>View Learner</button>
            <button className={style.adminBtn} onClick={handleTrainer}>View Trainer</button>
        </div>
        <div>
            {

              courseData && courseData.map((get)=>(
                <section key={get.id} className='adminclck'>
                <p>CourseName : {get.courseName}</p>
                <p>CourseStartDate :{get.courseStartDate}</p>
                <p>courseEndDate:{get.courseEndDate}</p>
                <p>courseFees:{get.courseFees}</p>
                </section>
              ))
            }
            </div>
            <div>
            {
                 learnerData && learnerData.map((get)=>(
                  <section key={get.id}>
                  <p>learnerFirstName : {get.learnerFirstName}</p>
                  <p>learnerLastDate :{get.learnerLastName}</p>
                  <p>learnerAgeDate:{get.learnerAge}</p>
                  <p>learnerMobile:{get.learnerMoblie}</p>
                  <p>leanerEmail:{get.learnerEmail}</p>
                  <p>learnerPassword:{get.learnerPassword}</p>
                  </section>
                ))
            }
        </div>
        <div>
            {
                 trainerData && trainerData.map((get)=>(
                  <section key={get.id}>
                  <p>TrainerFirstName : {get.trainerFirstName}</p>
                  <p>TrainerLastDate :{get.trainerLastName}</p>
                  <p>TrainerAgeDate:{get.trainerAge}</p>
                  <p>TrainerMobile:{get.trainerMoblie}</p>
                  <p>TrainerEmail:{get.trainerEmail}</p>
                  <p>TrainerPassword:{get.trainerPassword}</p>
                  </section>
                ))
            }
        </div>

        
    </div>
    </>
  )
}
