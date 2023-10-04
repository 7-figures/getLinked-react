import React, { useState } from 'react'
import axios from 'axios'
import SuccessPage from './SuccessPage'

const Registration = ()=> {
  const [inputs, setInputs] = useState({})

  const updateData = e => {
      setInputs({
          ...inputs,
          [e.target.name]: e.target.value
      })
  }

  const submit = async e => {
      e.preventDefault()
       axios.post('https://backend.getlinked.ai/hackathon/registration',{inputs})
       .then((response )=>{console.log(response)})
       .catch(err => {console.log(err)})
      console.log(inputs)
  }
  return (
    <div >
        <div className='formy d-sm-flex'>
            <div className='col-sm man img-responsive img-fluid'>
            <img src="./images/3d-graphic-designer-showing-thumbs-up-png 1.png" />
            </div>
            <div className='col-sm man-text'> 
            <h6 className='reg2'>Register</h6>
      <div className="be d-flex">
        <p style={{paddingTop: "10px"}}>Be part of this movement!</p>
        <div> <img src="./images/1f6b6-2640.png" /></div>
        <div className="img-responsive img-fluid"><img src="./images/image_processing20200511-10310-13mnlsx.png" /></div>
      </div>
      <h6 className='acct'>CREATE YOUR ACCOUNT</h6>

      <form className="row d-sm-flex"  onSubmit={submit}>
        <div className="col-sm-4 p-3 g-3">
          <label for="name2" className="form-label">Team’s Name</label>
          <input onChange={updateData} type="text" className="form-control" name='name' id="name2 " placeholder="Enter the name of your group"/>
          <label for="inputEmail" className="form-label">Email</label>
          <input onChange={updateData} type="email" name='email' className="form-control" id="inputEmail"placeholder="Enter your email address"/>
      
          <label for="category" className="form-label">Category</label>
          <select id="Category" className="form-select" name='select'>
            <option onChange={updateData} selected>Select your category...</option>
            <option>Front End</option>
          </select>
        </div>
        <div className="col-sm-4 p-3 g-3">
          <label for="phone" className="form-label">Phone</label>
          <input onChange={updateData} type="number" name='phone' className="form-control" id="phone" placeholder="Enter your phone number"/>
          <label for="project" class="form-label">project Topic</label>
          <input onChange={updateData} type="text" name='topic' className="form-control" id="project" placeholder="What is your group project topic"/>
         <label for="size" className="form-label">Group Size</label>
          <select id="size" class="form-select" name='sizes'>
            <option onChange={updateData}>Select...</option>
          
            <option>1-4</option>
            <option>4-7</option>
            <option>7-12</option>
          </select>
         
        </div>
        <div className='review'><p>Please review your registration details before submitting</p></div>

        <div className="col-12">
          <div className="form-check">
            <input onChange={updateData} className="form-check-input" type="checkbox" name='agree' id="gridCheck"/>
            <label className="form-check-label review" for="gridCheck">
              I agreed with the event terms and conditions  and privacy policy
            </label>
          </div>
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary" href="SuccessPage" >
            Register Now</button>
        </div>
      </form>
            </div>
  

        </div>
    </div>
  )
}

export default Registration