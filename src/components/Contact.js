
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Contact = ()=> {
  const [inputs, setInputs] = useState({})

  const updateData = e => {
      setInputs({
          ...inputs,
          [e.target.name]: e.target.value
      })
  }

  const submit = async e => {
      e.preventDefault()
       axios.post('https://backend.getlinked.ai/hackathon/contacts',{inputs})
       .then((response )=>{console.log(response)})
       .catch(err => {console.log(err)})
      console.log(inputs)
  }
  return (
    <div>
         <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)" />
        <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white" />
        <defs>
          <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
            <stop stop-color="#903AFF" />
            <stop offset="1" stop-color="#FF26B9" />
          </linearGradient>
        </defs>
      </svg> </Link>
    <div className='need'>Questions or need
      assistance?<br/>
      Let us know about it</div>
      <p className='below'>Email us below to any question related
      to our event</p>

      <div class="contact">

<div class="">

  <form class="row d-sm-flex" onSubmit={submit}>
    <div class="col-sm-4 p-3 g-3">
      <input type="text" name='name' class="form-control cont" id="name2 " placeholder="Team’s name" onChange={updateData}/>
      <input type="text" name='topic' class="form-control cont" id="name2 " placeholder="Topic" onChange={updateData}/>

      <input type="email" name='email' class="form-control cont" id="inputEmail" placeholder="Email"/>
      <textarea class="cont2 text-center msg " name='textarea'>Message</textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn sub"><a href="SuccessPage">Submit</a></button>
      </div>
  </form>
</div>
</div>


    </div>
  )
}

export default Contact