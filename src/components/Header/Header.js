import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';


const Header = function(props){
    return(
        <div className = "Header">
            <nav>
                <div>
                    <Link to = '/'>Dashboard</Link>
                    <Link to = '/add'>Add Inventory</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;