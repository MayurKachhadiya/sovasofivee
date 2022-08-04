import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logodark from '../Images/logo-dark.png';
import logolight from '../Images/logo-light.png';
import "./Navbar.css";
const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const [oldSticky, NewSticky] = useState("navbar navbar-expand-lg fixed-top navbar-custom sticky");
	window.onscroll = () =>{
		let temp;
		let top = window.scrollY;
		if (top > 100) {
			temp = "navbar navbar-expand-lg fixed-top navbar-custom sticky";
		}
		else
		{
			temp = "navbar navbar-expand-lg fixed-top navbar-custom "
		}
		return NewSticky(temp);
	}
    return (
      <div className='header'>
        <nav className={oldSticky}>
            <div className='container'>
                <Link className="navbar-brand" href="">
				<span className="logo-light-mode">
					<img src={logolight} className="l-light" alt=""/>
					<img src={logodark} className="l-dark" alt=""/>
				</span>
				<img src={logodark} className="logo-dark-mode" alt=""/>
			</Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'black' }} />)
                        : (<FaBars size={30} style={{ color: 'black' }} />)}
                </div>
                <ul className={click ? "navbar-nav active" : "navbar-nav "}>
                    <li className='nav-item'>
                        <Link to='home'  spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='team'  spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Team</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='price'  spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Pricing</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='blog'  spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Blogs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact'  spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact Us</Link>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
    )
}

export default Navbar
