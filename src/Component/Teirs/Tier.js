import React from 'react'
import img2 from '../Images/img2.png'
const Tier = () => {
  return (
    <>
      <div className="wrap-3">
        <div className="container-fluid ">
           <div className="row">
            <div className="col-md-6 col-sm-12 col-12 p-0">
                <img src={img2} alt="" className='img2 img-fluid img-responsive ' />
            </div>
            <div className="col-md-6 col-sm-12 col-12 tier-section">
                <div className="tier">
                <h1>ELON SAY WE HAVE THE BEST STRUCTURE</h1>
                 <h4>LAUNCHPAD TIERS</h4>
              <table className='table1'>
                <tbody>
                <tr>
                  <td>Tier 1 </td>
                  <td> - </td>
                  <td>4 $ELON</td>
                </tr>
                <tr>
                  <td>Tier 2 </td>
                  <td> - </td>
                  <td>20 $ELON</td>
                </tr>
                <tr>
                  <td>Tier 3 </td>
                  <td> - </td>
                  <td>69 $ELON</td>
                </tr>
                </tbody>
                
              </table>
          <p>Buy $ELON Says token to get in to some of the best token presales on Ethereum. Don't miss out on the next, Shiba Inu, Floki, ElonGate, Stilton , or BabyDoge. Elon says is a DAO, Launched and Incubator. He always says we will moon so get your tier and get ready for action.</p>
                </div>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Tier;

