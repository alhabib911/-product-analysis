import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='company-name'>
            <h1>Smart Gadget</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'></Link>
            </nav>
        </div>
    );
};

export default Header;