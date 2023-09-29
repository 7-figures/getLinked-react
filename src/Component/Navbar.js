import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () =>{
   
  return (
    
    <div>
         <nav class="navbar navbar-expand-lg navy">
    <div class="container-fluid">
        <Link class="navbar-brand logo" to="/">
            get<span className='linked'>Linked</span>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse gap-3 p-3" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                    <Link class="nav-link " aria-current="page" id="timeline" >Timeline </Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="overview" href="#Overview">Overview</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#FAQs">FAQs</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to='/Contact'>Contact</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link reg" to='/Registration'>Register</Link>
                </li>
            </ul>
        </div>
    </div>
</nav></div>
  )
}

export default Navbar