import React from 'react'
import style from '../../css/All.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function HeaderFooter() {
  return (
    <>
    <div className={style.footerContainer}>

    <div className={style.footerhr}></div>

    <div className={style.footerIconContainer}>
    <a href="#"><FaTwitter className={style.footerIcons} /></a>
    <a href="#"><FaFacebook className={style.footerIcons}/></a>
    <a href="#"><FaYoutube className={style.footerIcons}/></a>
    <a href="#"><FaInstagramSquare className={style.footerIcons}/></a>
    </div>
    <div className={style.footerCopy}>Copyright &copy; 2023 Learning Dashboard. All Rights Reserved </div>
    </div>
    </>
  )
}
