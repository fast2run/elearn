
import style from '../../css/All.module.css'
import imageAdv from '../../assets/advspeaker.svg'
import imageAdvRocket from '../../assets/advrocket.svg'

function HeaderBodyAdv() {
  return (
    <>
    <div className={style.advContaniner}>
      <h1><img src={imageAdv} alt="Image" className={style.advSpeaker} />Offers Going on..</h1>
      <h2>50% offers ...</h2>
      <img src={imageAdvRocket} alt="Image"  className={style.imageCourse}/>
      <h2>Stock market and Finance start harry!!!!..</h2>
    </div>
    </>
    
  )
}

export default HeaderBodyAdv