import React from 'react'
import SearchBar from "../SeachBar/SearchBar";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header>
  <div className="container-fluid bg-dark text-white p-3">
    <div className="row align-items-center">
          
      <div className="col-12 col-md-3">
        <div className="d-flex align-items-center">
          <img src="/logo.png" alt="Logo" height="40" />
        </div>
      </div>
        
      <div className="col-12 col-md-6 d-flex justify-content-center my-2 my-md-0">
        <div className="w-100" style={{ maxWidth: 600 }}>
          <SearchBar />
        </div>
      </div>

      <div className="col-12 col-md-3 d-flex justify-content-end">
        <div className="d-flex align-items-center gap-2">
          <i class="bi bi-person" style={{fontSize:"2rem"}}></i>
          <Link to={'/login'} className='btn btn-primary'>Login</Link>
        </div>
      </div>
    </div>

 
  </div>

  <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#fff"}}>
    <div className="collapse navbar-collapse">
      <div className="container justify-content-center navbar-nav p-1">
        <a className = "nav-link " href="#">Feminino</a>
        <a className = "nav-link" href="#">Masculino</a>
        <a className = "nav-link" href="#">Infantil</a>
      </div>
    </div>

    </nav>
</header>
  );
}

export default Header;
