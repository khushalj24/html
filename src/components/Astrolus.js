import React from 'react';
import {BsCircleFill} from "react-icons/bs";

export default function Astrolus() {
  return (
    <div className='astro'>
        <div className='astdiv'>
            <div className='astdiv-1'>
                 <BsCircleFill  className='astcircle'/>
                 <div className='ast-rect'></div>
                 <h1>Astrolus</h1>
            </div>

            <div className='astdiv-2'>
               <ul>
                <li><h5>Teams</h5></li>
                <li><h5>Enterprise</h5></li>
                <li><h5>Resources</h5></li>
                <li><h5>Pricing</h5></li>
                <li><h5>Blog</h5></li>
                <li><button type='button' className='btn astrobtn'>Get Started</button></li>
               </ul>
            </div>
        </div>

        <div className='middiv'>
              <div className='middiv-1'>
                 <h1 className='shaping'>Shaping a world with</h1>
                 <h1 className='reimh1'>reimagination</h1>
                </div> 
                <div className='middiv-2'>

                <p className='p-lorem'>Lorem Ipsum dolor sit amet consectetur adisicing elit. Odio incidunt nam itaque sed eius modi error totam sit ilum.</p>

                <p className='p-voluptas'>Voluptas doloribus asperiores quoerat aperiam. Quidem haram omnis beatae ipsum soluta!</p>
                </div>
                <div className='middiv-3'>
                <button type='button' className='btn astbtnn'>Get Started</button>
                <button type='button' className='btn midbutn'>Learn more</button>
                </div>
                <div className='middiv-4'>
                     <div className='midd-1'>
                         <h3>The lowest price</h3>
                         <h4>Some text here</h4>
                     </div>
                     <div className='midd-1'>
                         <h3>The fastest on the market</h3>
                         <h4>Some text here</h4>
                     </div>
                     <div className='midd-1'>
                         <h3>The most loved</h3>
                         <h4>Some text here</h4>
                     </div>
                </div>
        </div>
        <div className='ftimmg'>
             <img  src="./html/img/microsoft.png" alt='microsoft'/> 
             <img  src="./html/img/airbnb.png" alt='airbnb'/> 
             <img  src="./html/img/google.png" alt='google'/> 
             <img  src="./html/img/ge.png" className='geimg' alt='ge'/> 
             <img  src="./html/img/netflix.png" alt='netflix'/>
             <img  src="./html/img/google cloud.png" alt='googlecloud'/>  
        </div>
      
    </div>
  )
}
