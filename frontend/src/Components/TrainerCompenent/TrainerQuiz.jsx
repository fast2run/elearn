import React from 'react'
import style from '../../css/All.module.css'
import trainerStudy from  '../../assets/trainerquiz .svg'
import '../../App.css'

export default function TrainerStudyPlan() {
  return (
    <>
     <div className={style.adminCourseContaier}>
    <h1>Quiz</h1>
    <h2>I will update later Trainer - Quiz</h2>
    <img src={trainerStudy} alt="Image"  className={style.imageCourse} />
    </div>
    </>
  )
}
