import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Registration = ()=> {
  return (
    <div >
        <Navbar/>
        <div className='formy d-sm-flex'>
            <div className='col-sm man img-responsive img-fluid'>
            <img src="./images/3d-graphic-designer-showing-thumbs-up-png 1.png" />
            </div>
            <div className='col-sm man-text'> 
            <h6 className='reg2'>Register</h6>
      <div class="be d-flex">
        <p style={{paddingTop: "10px"}}>Be part of this movement!</p>
        <div> <img src="./images/1f6b6-2640.png" /></div>
        <div class="img-responsive img-fluid"><img src="./images/image_processing20200511-10310-13mnlsx.png" /></div>
      </div>
      <h6 className='acct'>CREATE YOUR ACCOUNT</h6>

      <form class="row d-sm-flex" action="" method="post">
        <div class="col-sm-4 p-3 g-3">
          <label for="name2" class="form-label">Team’s Name</label>
          <input type="text" class="form-control" id="name2 " placeholder="Enter the name of your group"/>
          <label for="inputEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail"placeholder="Enter your email address"/>
      
          <label for="category" class="form-label">Category</label>
          <select id="Category" class="form-select">
            <option selected>Select your category...</option>
            <option>Front End</option>
          </select>
        </div>
        <div class="col-sm-4 p-3 g-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="number" class="form-control" id="phone" placeholder="Enter your phone number"/>
          <label for="project" class="form-label">project Topic</label>
          <input type="text" class="form-control" id="project" placeholder="What is your group project topic"/>
         <label for="size" class="form-label">Group Size</label>
          <select id="size" class="form-select">
            <option selected>Select...</option>
          
            <option>1-4</option>
            <option>4-7</option>
            <option>7-12</option>
          </select>
         
        </div>
        <div className='review'><p>Please review your registration details before submitting</p></div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label review" for="gridCheck">
              I agreed with the event terms and conditions  and privacy policy
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" ><a href="success.html">Register Now</a></button>
        </div>
      </form>
            </div>

        </div>
    </div>
  )
}

export default Registration