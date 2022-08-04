import React from 'react'
import pic4 from '../Images/pic4.jpg'

function Bottom() {
  return (
    <>
        <div className="wrap-10 pt-2 pb-2">
        
           <div className="container-fluid">
                <div className="row ">
                <div className="col-md-4 col-sm-12 p-0 ">
                     <img src={pic4} alt="" className='im1 pb-0'/>
                </div>
                <div className="col-md-4 col-sm-12 pic4 ">
                     <img src={pic4} alt="" className='im2'/>
                </div>
                <div className="col-md-4 col-sm-12  p-0 ">
                     <img src={pic4} alt="" className='im3'/>
                </div>
                </div>
                
            </div>

        </div>
    </>
  )
}

export default Bottom;