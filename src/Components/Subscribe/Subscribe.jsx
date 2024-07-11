import React from 'react'
import '../../Styles/Subscribe.scss'
import lunch from '../../assets/Images/SbuscribeImages/lunch.png'
import salad from '../../assets/Images/SbuscribeImages/salad.png'


function Subscribe() {
    return (
        <div className='main-Subscribe'>
            <div className='subdiv'>
                <div className='title'>
                    <h1>Deliciousness to your inbox</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                </div>
                <div className='main-imgs'>
                    <div>
                        <img src={salad} alt="" />

                    </div>
                    <div className='subscription-container'>
                        <input
                            type='email'
                            placeholder='Your email address'
                            className='subscription-input'
                        />
                        <button className='subscription-button'>Subscribe</button>
                    </div>
                    <div>
                        <img src={lunch} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Subscribe
