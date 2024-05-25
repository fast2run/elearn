
import {Link} from 'react-router-dom'
import style from '../../css/All.module.css'
import '../../App.css'


export default function Navbar() {
  return (
    <>
       <Link to='/' className={style.headerLinks} >Home</Link>
       <Link to='/learner' className={style.headerLinks}>Learner</Link>
       <Link to='/trainer' className={style.headerLinks}>Trainer</Link>
       <Link to='/admin' className={style.headerLinks}>Admin</Link>
       

    </>
  )
}
