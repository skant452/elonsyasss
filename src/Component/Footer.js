import React from 'react'
import logo from '../Component/Images/logo.png'
// import text from '../Component/Images/text.png'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-3 col-4">
                    <div className='footer-logo d-flex'>
                      <img src={logo} alt="" className='img-fluid1 ' />
                      <h2>ELON
                      <br />
                      SAYS</h2>
                    </div>
                   
                </div>
                <div className="weblink col-md-9 col-sm-9 col-8">
                        <a href="https://telegram.org/ " target="_s"><i className="fa-brands fa-telegram"></i></a>
                        <a href="https://www.facebook.com/" target="_s"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_s"><i className="fa-brands fa-twitter"></i></a>
                    </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
