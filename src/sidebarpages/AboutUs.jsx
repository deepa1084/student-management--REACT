import React from 'react';
import './AboutUs.css'
import teamwork from './teamwork.jpg';
import motives from './motives.avif';
import guides from './guides.jpg';
import kids1 from './kids1.jpg';
import play1 from './play1.svg'
import '../pages/Sidebar'
const AboutUs = () => {
   
    return (

        <div className='services'>
            <h3>Our Services Needed To...</h3>
            <br></br>
            <br></br>          
  <div className='service'>
  <img src={teamwork}alt=""/>
  <h1>Teamwork</h1>
  </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div className='service'>
  <img src={motives}alt=""/>
  <h1>Motivation</h1>
  </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div className='service'>
  <img src={guides}alt=""/>
  <h1>Guidence</h1>  
  </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br></br>
  <div className="container" >
    <div className="about-left">
        <img src ={kids1} alt='' className='about-img'/>
        <img src ={play1} alt='' className='play-icon'/>
    </div>
    <div className="about-right">
        <h2>ABOUT OUR SCHOOL!</h2>
        <h4>Nuturing Tommorrow's Leaders Today...</h4>
        <p>Education is a lifelong journey. The learning never stops. There are always new things to discover, new ways to improve ourselves, and new challenges to face. Your kids might not comprehend the importance of their educational journey now, but with the below-mentioned quotes, they can surely feel inspired & motivated! </p>
        <p>Education has always played a major role in shaping human society. The rise of literacy, the invention of the printing press, and the development of universities all contributed to the spread of knowledge and the advancement of civilization.</p>
    </div>
  </div>
</div>

);
};
export default AboutUs;