import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
    let navigate = useNavigate();
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <Link to="/home" class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </Link>
                <Link to="users" class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Users</a>
                </Link>
               


            </ul>
           
            {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <button class="btn btn-outline-success m-2 text-white bg-primary"  onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar