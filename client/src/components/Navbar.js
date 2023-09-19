import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../styles/Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


    // If the window screen is less tha 960 pix, removes the link tags and shows the menu icon
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className ="navbar-logo" onClick={closeMenu}>
                    FETA <i className="fa-solid fa-utensils"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= "/" className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= "/plans" className='nav-links' onClick={closeMenu}>
                            Meal Plans
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Get Started</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
