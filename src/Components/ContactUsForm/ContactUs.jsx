import React from 'react'
import '../../Styles/ContactUs.scss'
import ChefImg from '../../../src/assets/Images/AboutUs/Group 13936.png'

function ContactUs() {
    return (
        <div className='main-Contact'>
            <div className='Contsctus'>
                <h1>Contact Us</h1>
            </div>
            <div className='pic-inputs'>
                <div className='chef-Img'>
                    <img src={ChefImg} alt="" />
                </div>
                <div className='all-inputes'>
                    <div className="inp-flex">
                        <div className='inpt-one'>
                            <h1>Name</h1>
                            <input placeholder='Enter your name...' type="text" />
                            <h1>Subject</h1>
                            <input placeholder='Enter subject...' type="text" />
                        </div>
                        <div className='inpt-two'>
                            <h1>Email Address</h1>
                            <input placeholder='your email address...' type="email" />
                            <h1>Subject</h1>
                            <input placeholder='Enquiry type...' type="text" />
                        </div>
                    </div>

                    <div className="description">
                        <h1>Messages</h1>
                        <input type="text" name="" placeholder='Enter Your Message..' />
                    </div>


                </div>

            </div>

            <div className='btn'>
                <button className='Submit'>Submit</button>
            </div>

        </div>
    )
}

export default ContactUs
