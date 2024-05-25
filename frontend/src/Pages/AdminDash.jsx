import React from 'react'
import style from '../css/All.module.css'
import LearnerHeader from '../Components/Learner/learnerHeader'
import Footer from '../Components/HomeComponents/HeaderFooter'
import AdminCourse from '../Components/Admin/AdminCourse'
import AdminLearner from '../Components/Admin/AdminLearner'
import AdminTrainer from '../Components/Admin/AdminTrainer'
import AdminView from '../Components/Admin/AdminView'

function AdminDash() {
  return (
    <>
    <LearnerHeader name="Mohamed"/>
    <AdminView />
    <div className={style.mainflex}> 
    <AdminCourse />
    <AdminLearner />
    <AdminTrainer />
    </div>

    <Footer />
  </>
 )
}

export default AdminDash