import React from 'react'
// import bg3 from '../Images/bg3.png'
import img3 from '../Images/img3.png'
// import { Link } from 'react-router-dom'


const Elonarmy = () => {
  return (
    <>
      <div className="wrap-7">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12  col-12 img3">
                <img src={img3} alt="" className='img-fluid image3'/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-12 elonarmy">
                <h3>JOIN THE #ELONARMY AND SUPPORT
WHAT ELON SAYS</h3>
                <h2 className='text-img'>MEME GOD ELON WANTS YOU TO SPREAD THE WORD. BY NATURE WE ARE A MEME TOKEN AND PLATFORM SECOND. PUMP IT.</h2>
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Elonarmy;
