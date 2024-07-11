import React from 'react';
import '../../Styles/Recipes.scss';
import ForkKnife from "../../assets/Images/HeroImages/ForkKnife.png";
import Heart from "../../assets/Images/RecipesImages/Vector.png";
import recipesdata from '../../Data/RecipesData'
import dish from '../../assets/Images/RecipesImages/01.png'

export function Recipes() {
    return (
        <div className='main-recipes'>
            <div className='heading'>
                <h1>Simple and tasty recipes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </div>

            <RecipesCard recipesdata={recipesdata} />
        </div>
    );
}

function RecipesCard({ recipesdata }) {
    return (
        <div className='flex-recipiecard'>
            {recipesdata.map((item, index) => {
                return (
                    <div key={index} className={index === 5 ? 'recipie-Rectangle' : 'recipie-card'}>
                        <img src={item.Photo} alt="" />
                        {index === 5 ? (
                            <>
                                <h1 className='title-rectangle'>Don’t forget to eat healthy food</h1>
                                <img className='disxh' src={dish} alt="" />
                                <h1 className='mail'>gaurravlokhande@gmail.com</h1>
                            </>
                        ) : (
                            <>
                                <h1>{item.Description}</h1>
                                <div className='recipe-btn'>
                                    <button><img src={ForkKnife} alt="" /> {item.Time}</button>
                                    <button><img src={ForkKnife} alt="" /> {item.type}</button>
                                </div>
                                <div className='circle'>
                                    <img src={Heart} alt="" />
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default Recipes;
