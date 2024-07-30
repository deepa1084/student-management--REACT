import React, { useState } from 'react';
import '../sidebarpages/Home';
import '../sidebarpages/AboutUs';
import '../sidebarpages/Teacher';
import '../sidebarpages/Student';
import '../sidebarpages/ContactUs';
import {
    FaHome,
    FaBars,
    FaUserAlt
}from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/AboutUs",
            name:"AboutUs",
            icon:<FaUserAlt/>
        },
        {
            path:"/Student",
            name:"Student",
            icon:<PiStudentBold />
        },
        {
            path:"/Teacher",
            name:"Teacher",
            icon:<GiTeacher />
        },
        {
            path:"/ContactUs",
            name:"ContactUs",
            icon:<IoMdContact/>
        }
    ]
    return (
        <div className="container1">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Euro-Kids</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;