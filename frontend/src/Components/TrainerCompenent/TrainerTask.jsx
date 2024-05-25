import React from 'react'
import style from '../../css/All.module.css'
import trainerStudy from  '../../assets/task.svg'

export default function TrainerStudyPlan() {
  return (
    <>
     <div className={style.adminCourseContaier}>
    <h1>Task</h1>
    <h2>I will update later Trainer - Tasks</h2>
    <img src={trainerStudy} alt="Image"  className={style.imageCourse} />
    </div>
    </>
  )
}
