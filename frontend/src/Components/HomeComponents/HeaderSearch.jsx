
import style from '../../css/All.module.css'

import { FaSearch } from "react-icons/fa";

function HeaderSearch() {
  return (
    <div className={style.headerSearchContainer}>
    <input type="text" className={style.headerSearch}/> 
    <FaSearch className={style.FaSearch}/>
    </div>
  )
}

export default HeaderSearch