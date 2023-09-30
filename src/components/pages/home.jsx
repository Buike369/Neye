import React ,{useState}from 'react'
import "../styles/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar"
import { useTheme} from './ThemeContext'

const Home = () => {
  const { isDarkMode } = useTheme();

 const card =[ {name:"Kingsley Chukwubuike",img:"john", course:"Figma To React",time:"Oct 1, 2023", hour:"1hr"},{name:"Kingsley Chukwubuike",img:"john",course:"MYSQL Tutorials",time:"Oct 1, 2023",hour:"1hr"},{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials", time:"Oct 1, 2023",hour:"1hr"}]
 const card2 =[ {name:"Kingsley Chukwubuike",img:"john",project:"Ecommerce Project"},{name:"Kingsley Chukwubuike",img:"john",project:"Gaming Projects"},{name:"kingsley Chukwubuike",img:"john",project:"Sales Record Project"}]
 const card1 =[ {name:"Chukwubuke K.",img:"john"},{name:"Chukwubuike K.",img:"john"},{name:"chukwubuike K.",img:"john"},{name:"Chukwubuike K.",img:"john"}]
  return (
    <div >

      <div className="beauty" style={{backgroundImage:"url(/img/bg1.svg)",backgroundRepeat:"no-repeat"}}></div>
      <div className="navbarMainDiv">

      
       <div className="heroDiv">
         <p className="ExploreJ">Building To Empower <span className='ExploreJ exploreC'>the Future</span></p>
        <div className="headerDivFle addHeaderDivFile">
           <div className="headerDivFle1">
           
             <p className="Explore" >Empower students with <span className='Explore exploreC'>the superpower</span> of coding.</p>
             <p className="Explore1" >Explore courses on: Programming <span className='fra'>|</span> Websites building <span className='fra'>|</span> Projects <span className='fra'>|</span> Works</p>
            <div className='CoursesB'> <button className="Explore2">Explore Courses</button></div>
             <p className="Explore3">Join <span className="millionPP"> Developers</span>, students working in companies to learn and build projects.</p>
           

           </div>
           <div className="headerDivFle2">
                 <div className='imgFileDiv'> <img src="/img/bg24.svg" alt="Ailt" className="headerDivFle21"/></div>
               
           </div>
        </div>

      </div>
      </div>

     <div className='secDiv'>
      <div className="bg1Cla" style={{backgroundImage:"url(/img/bg1.svg)"}}></div>
         <div className="bg1Cla addBgCla"></div>
      <div className="secDIV1">  
      <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Latest Courses </div>
        <div className="MostPopular">
        <p className="Checkout">Check out the most popular courses from our expert authors. </p>
        <div className="viewMoreButton">view more</div>
        </div>
        </div>
   
        <div className="filesVideo">
          {card.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className="WhatIs">{app.course}</p>
            <p className="">by <span className='nameText'>{app.name}</span></p>
            <div className="Jan">
              <p className="">Intermediate</p>
              <p className="">{app.time}</p>
              <p className="">{app.hour}</p>
            </div>

          </div>
          ))}
          
         
          
        
        </div>
      </div>

<div className="dereF">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2">
             <div className="coding3">
               <div className="imgSrc1">
               <img src="/img/bg9.svg" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
               <div>
               <p  className="hands">2x FASTER LEARNING</p>
                 <div className="divUnderline"></div>
               <p className="hands1">FAST LEARNING</p>
               <p className="hands2">Reading is faster than watching: The average tutorial is spoken at 150 words per minute. You can read at 250. That’s why our courses are laid out as rich text and an interactive experience so you learn more, learn faster, and learn exactly what you need.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><FontAwesomeIcon icon={faCode}  className="iconDiv divLip"/></div>
                  <p className="hands4">Hands-on Projects: Build Real World Applications</p>
                </div>
                <div className="hands5">
                <div className='iconDivN'><FontAwesomeIcon icon={faWandMagicSparkles}  className="iconDiv divLip"/></div>
                  <p className="">Run Live Applications In Your Browser</p>
                </div>
              </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      </div>

 <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Courses </div>
        <div className="MostPopular">
        <p className="Checkout">Check out the most popular courses from our expert authors. </p>
        <div className="viewMoreButton">view more</div>
        </div>
        </div>
   
        <div className="filesVideo">
          {card1.map((app,id)=>(
          <div className="cardDivWithImg imgWidth" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className="WhatIs">{app.course}</p>
            <p className="">by {app.name}</p>
            <div className="Jan janu">
              <p className="">Intermediate</p>
              <p className="">1h 18m</p>
            </div>

          </div>
          ))}
          
         
          
        
        </div>
      </div>
    
     
      


      
<div style={{borderBottom:"1px solid #d2d2e1",width:"70%",margin:"10px auto 30px auto"}}></div>
  <div className="filesVideo1" style={{marginBottom:"20px"}}>
        
          <div className="cardDivWithImg">
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className="WhatIs">Ecommerce Project</p>
            <p className="">by Chukwubuike Kingsley</p>
           

          </div>
           <div className="cardDivWithImg">
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className="WhatIs">Simple Sales Store</p>
            <p className="">by Chukwubuike Kingsley</p>
           

          </div>
          <div  className='gift'>
            <p className="morPage">
              Explore More 
            </p>
             <p className="morPage2">
              On different projects and works 
            </p>

            <div className="morPage1">view all</div>
          </div>
      
        </div>

          <div className="filesVideo" style={{marginBottom:"20px"}}>
          {card2.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className="WhatIs">{app.project}</p>
            <p className="">by {app.name}</p>
          

          </div>
          ))}
        
        </div>

    </div>
  )
}

export default Home