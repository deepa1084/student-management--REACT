import React from 'react';
import simg1 from './simg1.avif'
import simg5 from './simg5.avif'
import simg21 from './simg21.jpg'
import simg11 from './simg11.jpg'
import simg12 from './simg12.jpg'
import simg13 from './simg13.jpg'
import simg14 from './simg14.jpg'
import simg15 from './simg15.jpg'
import '../pages/Sidebar'
const Student = () => {
    return (
        <div className='student'>
          <br></br>
          <h1>Students Gallery..!</h1>
          <div className="gallery">
            <img src ={simg1} alt='' />
            <img src ={simg5} alt='' />
            <img src ={simg21} alt='' />
            <img src ={simg11} alt='' />
          </div>
          <div className="gallery">
            <img src ={simg12} alt='' />
            <img src ={simg13} alt='' />
            <img src ={simg14} alt='' />
            <img src ={simg15} alt='' />
          </div>
           <button className='std-btn'>See more images➞</button>
        </div>
    );
};

export default Student;

