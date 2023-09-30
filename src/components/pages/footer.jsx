import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faTwitter,faGithub,faTelegram,faYoutube,faFacebook} from "@fortawesome/free-brands-svg-icons"

const footer = () => {
 const socialLink = [faTwitter,faFacebook,faYoutube,faGithub,faLinkedin,faTelegram]

  return (
    <div>
        <div className='footerHouse'></div>
        <div className="footerBackgroundColor">
            <div className='padG'>
            <div  className='subEmail'>
                <p className='misOut'>Don't miss out on Fantastic News</p>
                <p className='misOut1'>Subscribe to our newsletter and be the first to receive news</p>
                <form className='FormPP'>
                    <div>
                        <input type="" placeholder='Enter your Email' className='yourEmail'/>
                    </div>
                </form>
            </div>
            </div>

        <div>
            <div className='footerW'>
                <div className='logoFooter'><a href="/">Marat</a></div>
                <div className='piki'>
                    <ul className='footerF'>
                        <li className='pin pin7'><a href="/" className='then'> Home</a></li>
                        <li className='pin pin6'><a href="/about" className='then'>About</a></li>
                        <li className='pin pin7'><a href="#" className='then'>Support</a></li>
                        <li className='pin  pin6'><a href="/contact" className='then'>Contact</a></li>
                        <li className='pin  pin7'><a href="/terms" className='then'>Terms of Service</a></li>
                        <li className='pin1  pin6'><a href="/privacy" className='then'>Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <a href="#" className='mnm'> Home </a>
                    <a href="#" className='mnm'> Contact </a>
                    <a href="#" className='mnm'> Support </a>
                </div>
                <div className='MobileT'>
                    <a href="#" className='mnm'> About Us</a>
                    <a href="#" className='mnm'> Terms of Service</a>
                    <a href="#" className='mnm'> Privacy</a>
                </div>
            </div>
        </div>
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2023 <a href="/" className ="themn"> Neye</a>  Technology. All Rights Reserved
            </div>
            <div style={{width:"20%"}}>
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li style={{color:"#fff"}}><FontAwesomeIcon icon={app}  className="iconHoverColor" style={{fontSize:"20px"}}/></li>
                </ul>
                ))}
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default footer