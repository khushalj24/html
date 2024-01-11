import React from 'react'

export default function Regist() {
  return (
    <div className='regdiv'>
         <div className='registerdiv'>
            <h2>Registration</h2>
            <div className='underdiv'>
            </div>
         </div>
         <div className='inputdiv'>
                <div>
                    <h5>Full Name</h5>
                    <input type='text' className='form-control' placeholder='Enter your name'/>
                </div>
                <div>
                    <h5>User Name</h5>
                    <input type='text' className='form-control' placeholder='Enter your username'/>
                </div>
                <div>
                    <h5>Email</h5>
                    <input type='email' className='form-control' placeholder='Enter your email'/>
                </div>
                <div>
                    <h5>Phone Number</h5>
                    <input type='tel' className='form-control' placeholder='Enter your number'/>
                </div>
                <div>
                    <h5>Password</h5>
                    <input type='password' className='form-control' placeholder='Enter your password'/>
                </div>
                <div>
                    <h5>Confirm Password</h5>
                    <input type='password' className='form-control' placeholder='Confirm your password'/>
                </div>
         </div>
         <div className='gendertitle'>
            <h2>Gender</h2>
            <div className='genderdiv'>
                <div>
                <input type="radio" id="male" name="gender" value="male"/> 
                   &nbsp; <label htmlFor="male"><h5>Male</h5></label>
                </div>
                <div>
                <input type="radio" id="female" name="gender" value="female"/>
                &nbsp; <label htmlFor="female"><h5>Female</h5></label>
                </div>
                <div>
                <input type="radio" id="other" name="gender" value="other"/>
                &nbsp; <label htmlFor="other"><h5>Prefer not to say</h5></label>
                </div>
            </div>
         </div>
         <div className='btndiv'>
            <button type='button' className='buttn'>Register</button>
         </div>

    </div>
  )
}
