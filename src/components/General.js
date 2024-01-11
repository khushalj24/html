import React from 'react'

export default function General() {
  return (
    <>
      <div className='gen1'>
        <div className='gen11'>
          <h2>General Information</h2>

          <select className="form-select form-select-lg selform" aria-label=".form-select-lg example">
            <option defaultValue >Title</option>
            <option value="1">Title 1</option>
            <option value="2">Title 2</option>
            <option value="3">Title 3</option>
          </select>


          <div className='textdiv'>
            <input className="form-control form-control-lg inputtext" type="text" placeholder="First Name" aria-label=".form-control-lg example"></input>
            &nbsp;   &nbsp;   &nbsp;   &nbsp;
            <input className="form-control form-control-lg inputtext" type="text" placeholder="Last Name" aria-label=".form-control-lg example" />
          </div>

          <select className="form-select form-select-lg selform" aria-label=".form-select-lg example">
            <option defaultValue >Position</option>
            <option value="1">Full Stack Web Developer</option>
            <option value="2">Android Developer</option>
            <option value="3">React Developer</option>
            <option value="4">Angular Developer</option>
          </select>

          <input className="form-control form-control-lg compinput" type="text" placeholder="Company" aria-label=".form-control-lg example"></input>


          <div className='textdiv'>
            <input className="form-control form-control-lg inputtext" type="text" placeholder="Business Arena" aria-label=".form-control-lg example"></input>
            &nbsp;  &nbsp;  &nbsp;
            <select className="form-select form-select-lg selectform" aria-label=".form-select-lg example">
              <option defaultValue >Employees</option>
              <option value="1">Employees 1</option>
              <option value="2">Employees 2</option>
              <option value="3">Employees 3</option>
            </select>

          </div>




        </div>

      </div>


      <div className='gen2'>
        <div className='gen22'>
          <h2>Contact Details</h2>

          <input className="form-control form-control-lg compinputt" type="text" placeholder="Street + Nr" aria-label=".form-control-lg example"></input>

          <input className="form-control form-control-lg compinputt" type="text" placeholder="Additional Information" aria-label=".form-control-lg example"></input>

          <div className='textdiv'>
            <input className="form-control form-control-lg inputtext1" type="text" placeholder="Zip Code" aria-label=".form-control-lg example"></input>
            &nbsp;  &nbsp;  &nbsp;
            <select className="form-select form-select-lg selectform1" aria-label=".form-select-lg example">
              <option defaultValue >Place</option>
              <option value="1">Bangalore</option>
              <option value="2">New York</option>
              <option value="3">Melbourne</option>
            </select>
          </div>

          <select className="form-select form-select-lg sellform" aria-label=".form-select-lg example">
            <option defaultValue >Country</option>
            <option value="1">India</option>
            <option value="2">America</option>
            <option value="3">Austrailia</option>
          </select>

          <div className='textdiv'>
            <input className="form-control form-control-lg inputtext1" type="text" placeholder="Code" aria-label=".form-control-lg example"></input>
            &nbsp;  &nbsp;  &nbsp;
            <input className="form-control form-control-lg inputtext2" type="text" placeholder="Phone Number" aria-label=".form-control-lg example"></input>
          </div>

          <input className="form-control form-control-lg compinputt" type="text" placeholder="Your Email" aria-label=".form-control-lg example"></input>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              I do accept the <u>Terms and Conditions</u> of your site.
            </label>
          </div>

          <button type='button' className='btn bttn'><b>Register Badge</b></button>

        </div>
      </div>
    </>
  )
}
