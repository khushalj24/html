import React from 'react';
import {BsPersonFill, BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {ImUnlocked} from 'react-icons/im';

export default function Signup() {
  return (
    <div className='signupform-main'>
        <div className='signupform'>
         <div className='signupform-1'>
             <div className='flatsign'>
                <h6>FLAT SIGN UP FORM</h6>
             </div>
             <div className='signup-main'>
                    <div className='signup-text'>
                      <h2>SIGN  UP</h2>
                    </div>
                    <div className='logoinput-maindiv' >

                    <div className='logoinput-div'>
                      <BsPersonFill className='logosss'/>
                      <input type='text' placeholder='First Name'
                       className='logssinput'
                      />
                    </div>
                      <br/>
                    <div className='logoinput-div'>
                      <BsPersonFill className='logosss'/>
                      <input type='text' placeholder='Last Name'
                       className='logssinput'
                      />
                    </div>
                    <br/>
                    <div className='logoinput-div'>
                      <BsFillTelephoneFill className='logosss'/>
                      <input type='tel' placeholder='Phone Number'
                       className='logssinput'
                      />
                    </div>
                    <br/>
                    <div className='logoinput-div'>
                      <GrMail className='logosss'/>
                      <input type='text' placeholder='Email'
                       className='logssinput'
                      />
                    </div>
                    <br/>
                    <div className='logoinput-div'>
                      <ImUnlocked className='logosss'/>
                      <input type='password' placeholder='Password'
                       className='logssinput'
                      />
                    </div>
                    <br/>
                    <div className='logoinput-div'>
                      <ImUnlocked className='logosss'/>
                      <input type='password' placeholder='Confirm Password'
                       className='logssinput'
                      />
                    </div>

                    </div>
                    <div className='signupbutton-div'>
                       <button type='button'
                        className='signupbutton'
                       >SIGN UP</button> 
                    </div>
             </div>
         </div>
        </div>
    </div>
  )
}
