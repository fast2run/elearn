import React from 'react'
import style from '../css/All.module.css'
import LearnerHeader from '../Components/Learner/learnerHeader'
import TrainerStudyPlan from '../Components/TrainerCompenent/TrainerStudyPlan'
import TrainerQuiz from '../Components/TrainerCompenent/TrainerQuiz'
import TrainerTask from '../Components/TrainerCompenent/TrainerTask'
import Footer from '../Components/HomeComponents/HeaderFooter'

function TrainerDash() {
  return (
    <>
    <LearnerHeader name="Rani"/>
    <div className={style.mainflex}>  
    <TrainerStudyPlan />
    <TrainerQuiz />
    <TrainerTask />
    </div>

    <Footer />
  </>

  )
}

export default TrainerDash