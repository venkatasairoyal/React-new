import React from "react";
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='#' className="navbar-brand">Product API</Link>
        <div className="ml-auto">
            <ul className='navbar-nav'>
                <li className="nav-list"><Link to="/products" className='nav-link'>Product</Link></li>
                <li className="nav-list"><Link to="/admin" className='nav-link'>Admin</Link></li>
                <li className="nav-list"><Link to="/login" className='nav-link'>Login</Link></li>

            </ul>
        </div>

    </nav>
    }
}
export default Navbar