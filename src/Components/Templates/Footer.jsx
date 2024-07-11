import React from 'react'
import '../../Styles/Footer.scss'
import logo from "../../assets/Icons/Header_Icons/Foodieland..png"
import FacebookLogo from '../../assets/Icons/Header_Icons/001-facebook.png';
import TwitterLogo from '../../assets/Icons/Header_Icons/003-twitter.png';
import InstaLogo from '../../assets/Icons/Header_Icons/004-instagram.png';


function Footer() {
    return (
        <div className='footer-main'>
            <div className='containe'>
                <div className='imp-p'>
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                </div>
                <div className='menu'>
                    <h1><button>Recipes</button></h1>
                    <h1><button>Blog</button></h1>
                    <h1><button>Contact</button></h1>
                    <h1><button>About Us</button></h1>
                </div>
            </div>
            <hr />
            <div className='footer'>
                <h1>© 2020 Created by. gauravlokhande@gmail.com</h1>
                <div className='iconss'>
                    <img src={FacebookLogo} alt="" />
                    <img src={TwitterLogo} alt="" />
                    <img src={InstaLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
