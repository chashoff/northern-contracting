import React from 'react';
import './index.css';

const Nav = () => (
    <div className="nav-container">
        <div className="logo-container">
            <h1 className="logo-header uppercase">Northern</h1>
            <div className="line-span"></div>
            <h2 className="logo-secondary-header uppercase">Contracting Co.</h2>
        </div>
        <div className="nav-item-container">
            <a className="nav-item uppercase" href="">Home</a>
            <a className="nav-item uppercase" href="">What We Do</a>
            <a className="nav-item uppercase" href="">Location</a>
            <a className="nav-item uppercase" href="">Contact</a>
        </div>
        
    </div>
)
export default Nav;