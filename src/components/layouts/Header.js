import React from 'react'
import {Link} from 'react-router-dom'

// Fragment in react  
const Header = () => (
    <> 
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/albums/">Top Albums</Link></li>
            </ul>
        </div>
    </>
)

export default Header;