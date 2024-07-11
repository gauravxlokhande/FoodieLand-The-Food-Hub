import React from 'react';
import '../../Styles/Hero.scss';
import AllData from '../../Data/Herodata'


function Hero() {
    return (
        <div className='main-hero'>
            <div className='hero-container'>
                <div className='recipie-container'>
                    <div className='hot-recipes'>
                        <button><img src={AllData.Notepadimg} alt="" />Hot Recipes</button>
                    </div>
                    <div className='title'>
                        <h1>Spicy delicious</h1>
                        <h1>chicken wings</h1>
                    </div>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="timing">
                        <button><img src={AllData.thirtyminuites} alt="" />30 Minutes</button>
                        <button><img src={AllData.chickenimg} alt="" /> Chicken</button>
                    </div>
                    <div className="view-recipes">
                        <div className='photo'>
                            <div>
                                <img src={AllData.Ellipse} alt="" />
                            </div>
                            <div className="name">
                                <h1>Gaurav Lokhande</h1>
                                <h1>06 November 2001</h1>
                            </div>
                        </div>
                        <div className='playbtn'>
                            <button><img src={AllData.Playicon} alt="" /> view Recipes</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='ChickenWingsimg' src={AllData.ChickenWingsImg} alt="" style={{ borderRadius: '15px 15px 15px 15px' }} />
                </div>
            </div>
        </div>
    );
}

export default Hero;
