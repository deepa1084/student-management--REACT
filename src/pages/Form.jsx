import React from "react";
import logo from './logo.png'

import { useNavigate } from "react-router-dom";

function Form(){
    const navigate = useNavigate();
    return(
        <div className="form">
          
           <img src ={logo} alt=""/>
    <h1>Our School is BestFor Your Childs!</h1>
 <h3>Prescholer for the apcation testing and enrollment process
        <br></br> for publc and private schools the city of alo abu mal kita kores vai</h3>
        <div className="demo">
         <h2>Please select as your role ...
        <br></br>to engaged our school specialities!
        <br></br>Welcome Once...!</h2>
        <button type="button" class="btn btn-outline-info" onClick={()=>navigate('./Signup')}>Student</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <button type="button" class="btn btn-outline-info" onClick={()=>navigate('./Signup2')}>Teacher</button>
           </div>
        </div>
    )
}
export default Form;
