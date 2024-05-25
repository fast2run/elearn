import React from 'react'
import style from '../../css/All.module.css'
import imageQuiz from '../../assets/quiz.svg'

function HeaderBodyQuiz() {
  return (
    <div className={style.bodyQuizContainer}>
      <h1>Join Our Quiz </h1>
      <h2>Elabrate your knowlege</h2>
      <img src={imageQuiz} alt="Image" className={style.imageCourse} />
      <h2>Join and Explore more <a href="">...</a></h2>
    </div>
  )
}

export default HeaderBodyQuiz