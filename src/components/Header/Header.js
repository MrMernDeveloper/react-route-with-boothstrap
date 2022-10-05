import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/order'>Order</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;