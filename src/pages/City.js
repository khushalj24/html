import React from 'react'

import { MdLocationOn } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';

export default function City(props) {
  return (
    <div className='worcity shadow'>
        <div className='cityimg'>
         <img  src={props.ctyimg} alt='tuscany'/>
        </div>
        <div className='cityinfo'>
            <div className='cityinfo-1'>

             <div className='ctytitle'>
             <h4>{props.city}</h4>
             <div className='ctytitle-loct'>
               <MdLocationOn className='loctt'/> {props.con}
               </div>
             </div>  

             <div className='ctyprice'>
                <h5 className='ctyprice-h5'>Price</h5>
                <div className='dollardiv'>
                    <FaDollarSign className='dollarsign'/>
                    <h5>1000.0</h5>
                </div>
             </div>

            </div>
            <div className='cityinfo-2'>
                 {props.descrip}
            </div>
            <div className='cityinfo-3'>
                 <button className='bookbtn' type='button'>Read More</button>
                 <button className='bookbtn' type='button'>Book Now</button>
            </div>
        </div>

    </div>
  )
}
