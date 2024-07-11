import FoodielandLogo from '../../assets/Icons/Header_Icons/Foodieland..png';
import FacebookLogo from '../../assets/Icons/Header_Icons/001-facebook.png';
import TwitterLogo from '../../assets/Icons/Header_Icons/003-twitter.png';
import InstaLogo from '../../assets/Icons/Header_Icons/004-instagram.png';
import '../../Styles/Header.scss';
import HeaderNavigation from '../../Data/headerdata';
import menuicon from '../../assets/Icons/Header_Icons/icons8-menu.svg';
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pageName, setpageName] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const onclickofitem = () => {
        setMenuOpen(!menuOpen);
    }

    const location = useLocation();
    useEffect(() => {
        const pageName = location.pathname.split('/').filter(Boolean).pop();
        console.log(pageName);
        setpageName(pageName)
    }, [location.pathname]);



    return (
        <div className='main'>
            <img className='menuicon' src={menuicon} alt="menu icon" onClick={toggleMenu} />

            <div className='logo'>
                <img src={FoodielandLogo} alt="Foodieland Logo" />
            </div>

            <div className='navigation'>
                <ul>
                    {HeaderNavigation.map((item, index) => (
                        <li className={pageName === item ? 'showhover' : ''} key={index}>
                            <Link to={`/${item}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
                <Outlet />
            </div>

            {menuOpen && (

                <div className='navigationtwo'>
                    <ul>
                        {HeaderNavigation.map((item, index) => (
                            <li key={index} onClick={onclickofitem}    >  <Link to={`/${item}`}>{item}</Link></li>
                        ))}
                    </ul>
                </div>
            )}

            <div className='logo-social'>
                <img src={FacebookLogo} alt="Facebook Logo" />
                <img src={TwitterLogo} alt="Twitter Logo" />
                <img src={InstaLogo} alt="Instagram Logo" />
            </div>
        </div>
    );
}

export default Header;
