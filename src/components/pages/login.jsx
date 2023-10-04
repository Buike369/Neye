import React from 'react'
import "../styles/login.css"
import Navbar from "./navbar"

const login = () => {
  return (
    <div>
      <Navbar/>

      <div  className='registerDiv loginDivM'>
        {/* <div className='registerDiv1'><img src="" alt="" className=""/></div> */}
        <div className='registerDiv1'>
         
            <div className='regFormDiv'>
              <form className='regForm'>
                 <div>
                   <div className='RegCreate'>Login to Marat</div>
                    <div className='regLabel'><label className='labelDD'>Email</label></div>
                   <div><input type="" placeholder='email' className="RegInputs"/></div>
                    <div className='regLabel'><label className='labelDD'>Password</label></div>
                   <div><input type="" placeholder='password' className="RegInputs"/></div>
                  
                   <div className='SignUp loginB'>Login </div>
                   <div className="iHave ">Forget password? <a href="/forget-password" className='clickMe iHave '>Click Here</a></div>
                   <div className='divLine MaT'>
                      <div className='line1 line'></div>
                      <div  className="iHave line line2">or login with</div>
                      <div className='line1 line'></div>
                   </div>
                   <div className='SignUp goggle'>Google</div>
                   <div  className="iHave Al">Don't have an account? <a href="/register" className='clickMe iHave'>Sign Up</a></div>
                 </div>
              </form>
            </div>
        </div>

         <div className='registerDiv1'>
          <div className='registerDiv2 imgFieldD'>
          <div className='ManD'><img src="/img/happy.svg" alt="" className="imgFieldD24"/></div>
          </div>
          </div>
      </div>

    </div>
  )
}

export default login