import React from 'react'
import {Link} from 'react-router-dom'

// Fragment in react  
const Header = () => (
    <> 
        <div>
            <ul>
                <li><Link to="/">Music App Home</Link></li>
                <li><Link to="/albums/">Albums</Link></li>
            </ul>
        </div>
    </>
)

export default Header;