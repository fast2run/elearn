
import style from '../../css/All.module.css'
import image from '../../assets/siteicon.svg'
import Navbar from './Navbar'
import { BrowserRouter,Routes,useNavigate } from 'react-router-dom' 







export default function Header() {
  
  const navigate = useNavigate()

  return (
    <>
    <div className={style.headerContainer}>
      <div className={style.logoflex}>
      <img src={image} className={style.headerIcon} alt="logo" />
        <h2>Learning DashBoard</h2>
      </div>
      <Navbar />
        <div >
        
        <button className={style.headerButton} onClick={()=>navigate('learnerRegister')}>Register</button> &nbsp; 
        <button className={style.headerButton} onClick={()=>navigate('learnerLogin')}>Login</button>
        
        </div>
    </div>
    </>
    
  )
}
