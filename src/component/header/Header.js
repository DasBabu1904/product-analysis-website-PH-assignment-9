import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"
const Header = () => {
    return (
        < div >
            <nav className='Header-box'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/dashboard">Dash Board</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div >
    );
};

export default Header;