import React from 'react'
import style from '../css/All.module.css'
import LearnerHeader from '../Components/Learner/learnerHeader'
import Footer from '../Components/HomeComponents/HeaderFooter'
import LearnerCourse from '../Components/Learner/LearnerCourse'
//import HeaderBodyCourse from '../Components/HomeComponents/HeaderBodyCourse'
import HeaderBodyQuiz from '../Components/HomeComponents/HeaderBodyQuiz'
import HeaderBodyAdv from '../Components/HomeComponents/HeaderBodyAdv'
import '../App.css'

function LearnerDash() {
  return (
    <>
      <LearnerHeader name="habis"/>   
      <div className={style.mainflex}> 
      {/* <HeaderBodyCourse /> */}
      <LearnerCourse course="Finance management" duration="valid febrary"/>
      <HeaderBodyQuiz />
      <HeaderBodyAdv />
      </div>
      <Footer />
    </>

  )
}

export default LearnerDash