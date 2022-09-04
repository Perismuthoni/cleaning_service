import { Outlet, Link } from "react-router-dom";
import '../css/nav.css';

function Nav() {
  return (
    <div className="nav">
     <div className='socials'> 
     
    
       </div>
     <div className='navbar'> 
     
     <nav>
        <ul>
         
            <Link to="/"  className="nav_item">Home    </Link> 
            
            <Link to="/service" className="nav_item">services    </Link>
           
            <Link to="/contact" className="nav_item">Contact</Link>
        
        </ul>
      </nav>

      <Outlet />
     
     </div>
    </div>
  );
}

export default Nav;
