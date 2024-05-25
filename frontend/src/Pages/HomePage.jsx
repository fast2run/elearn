import React from 'react'
import style from '../css/All.module.css'


import Header from '../Components/HomeComponents/Header'
import HeaderSearch from '../Components/HomeComponents/HeaderSearch'
import HeaderBodyCourse from '../Components/HomeComponents/HeaderBodyCourse'
import HeaderBodyAdv from '../Components/HomeComponents/HeaderBodyAdv'
import HeaderBodyQuiz from '../Components/HomeComponents/HeaderBodyQuiz'
import HeaderFooter from '../Components/HomeComponents/HeaderFooter'

 function HomePage() {
  return (
    <>
   <Header />    
   < HeaderSearch />    
    <div className={style.mainflex}>   
    <HeaderBodyCourse />
    <HeaderBodyQuiz />
    <HeaderBodyAdv />
    </div>
    <div className={style.footerhr}></div>
    <HeaderFooter/> 

    </>
  )
}
export default HomePage







