import React from 'react';
import msg from './msg.png'
import mail from './mail.png'
import phone from './phone.png'
import location from './location.jpg'
import kity1 from './kity1.jpg'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import '../pages/Sidebar'
const ContactUs = () => {
    return (
        <div className='contact'>
            <h4>Contact Us</h4><br></br>
            <h1>Get  In Touch</h1>
            <br></br>
            <div className="contact-col">
                <h3>Send us message <img src ={msg} alt=''/></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis corporis tempore, qui eum quidem est doloribus reprehenderit iste architecto quam quisquam omnis. 
                    Fuga repellat a eos modi aliquid, molestias explicabo! </p> 
                    <ul>
 <li> <img src ={mail} alt=''/>Contact@EuroKids.com</li>
 <li> <img src ={phone} alt=''/>+1 123-456-7890</li>
 <li> <img src ={location} alt=''/>TVS Corner,<br/>MA 021365 ,Pudukkottai</li>                  
  </ul>
  <div className="icons">
  <SlSocialInstagram size={20} className='icon1'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <SlSocialFacebook size={20}  className='icon1'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <SlSocialTwitter size={20}  className='icon1'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <SlSocialLinkedin size={30}  className='icon1'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <SlSocialGoogle size={30}  className='icon1'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
 </div>
            <div className="contact-col1">
            <img src ={kity1} alt=''/>           
</div>
</div>
);
};
export default ContactUs;