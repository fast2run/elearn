import style from '../../css/All.module.css'
import image from '../../assets/siteicon.svg'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from 'react';
import '../../App.css';
import useTheme from '../../Contexts/theme';
//import learnerRegister from '../../../../backend/modules/learnerRegister';
//import {ThemeConfig, useTheme} from '@tilemoon/react-theme-manager'






function LearnerHeader(props) {

const {themeMode, darkTheme, lightTheme} = useTheme()

  
   const changeTheme=(e)=>{
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
      darkTheme()
    }else{
      lightTheme()
    }
    
   }

  // const changeTheme =()=>{
   
  //   setTheme(!theme)
  // }
  //   useEffect(()=>{
  //     if(theme == true){
  //       document.body.classList.add('dark');
  //     }else{
  //       document.body.classList.remove('dark');
  //     }
  //   })
 
    
  

  const [learnerGet,setLearnerGet] = useState(null);
  useEffect(()=>{
    const viewLeanerData=async()=>{
      const response = await fetch('http://localhost:5000/api/learner/');
      const data = await response.json();
      console.log(data);
      if(response.ok){
        setLearnerGet(data)
      }
    };
    viewLeanerData();
  },[]);







   
  return (
    <>
    <div className={style.headerContainer}>
        <a href="/">
        <div className={style.logoflex}>
        <img src={image} className={style.headerIcon} alt="logo" />       
        <h2>Learning DashBoard</h2>
        </div>
        </a>
        <h3 >Welcome<span className={style.learnerDev}> </span></h3>
        <h3 className={style.profile}>Profile</h3>
        <div >
        <input  type="checkbox"
        value=""
        onChange={changeTheme}
        checked={themeMode==='dark'}
        />
        {/* <button className={style.headerButton} onClick={changeTheme} >{theme  ? <CiLight />:<MdDarkMode />}</button> &nbsp;  */}
        {/* <button className={style.headerButton}><CiLight /></button> */}
        </div>
    </div>
    
    </>
  )
}


export default LearnerHeader