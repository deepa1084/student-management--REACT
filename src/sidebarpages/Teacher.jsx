import React, { useRef } from 'react';
import '../pages/Sidebar'
import next from './next.jpg'
import back from './back.jpg'
import t1 from './t1.jpg'
import t2 from './t2.jpg'
import t3 from './t3.jpg'
import t4 from './t4.jpg'
const Teacher = () => {

    const slider = useRef();
    let tx =0;

const slideForward =()=>{
if(tx > -50){
    tx -=25;
}
slider.current.style.transform =`translateX(${tx}%)`;
}
const slideBackward =()=>{
    if(tx < +0){
        tx +=25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
}



    return (
        <div className='teacher'>  
        <h1>Our Proudly Staffs...!</h1>    
           <img src ={next} alt=''className='next-btn' onClick={slideForward}/>
           <img src ={back} alt='' className='back-btn'  onClick={slideBackward}/>  
           <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src ={t1}alt=''/>
                            <div>
                                <h3>Karina Kaboor</h3>
                                <span>Spoken Teacher</span>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste incidunt cumque ipsam blanditiis consequuntur culpa natus totam voluptatibus vel ducimus accusantium repudiandae harum, 
                        provident officiis vitae obcaecati praesentium dignissimos sequi reprehenderit rerum ut quidem!
                         Minus tempora earum amet at voluptatem!</p>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src ={t3}alt=''/>
                            <div>
                                <h3> Fahadh Faasil</h3>
                                <span>Drawing Master</span>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste incidunt cumque ipsam blanditiis consequuntur culpa natus totam voluptatibus vel ducimus accusantium repudiandae harum, 
                        provident officiis vitae obcaecati praesentium dignissimos sequi reprehenderit rerum ut quidem!
                         Minus tempora earum amet at voluptatem!</p>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src ={t2}alt=''/>
                            <div>
                                <h3>Sara AliKhan</h3>
                                <span>Yoga Teacher</span>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste incidunt cumque ipsam blanditiis consequuntur culpa natus totam voluptatibus vel ducimus accusantium repudiandae harum, 
                        provident officiis vitae obcaecati praesentium dignissimos sequi reprehenderit rerum ut quidem!
                         Minus tempora earum amet at voluptatem!</p>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src ={t4}alt=''/>
                            <div>
                                <h3>Vicky Kaushal</h3>
                                <span>PT Master</span>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste incidunt cumque ipsam blanditiis consequuntur culpa natus totam voluptatibus vel ducimus accusantium repudiandae harum, 
                        provident officiis vitae obcaecati praesentium dignissimos sequi reprehenderit rerum ut quidem!
                         Minus tempora earum amet at voluptatem!</p>
                </li>
                </ul>
                </div>         
        </div>
    );
};

export default Teacher;