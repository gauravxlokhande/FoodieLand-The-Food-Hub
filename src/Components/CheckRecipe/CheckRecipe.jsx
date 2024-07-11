import React from 'react'
import '../../Styles/CheckRecipe.scss'
import RecipeData from '../../Data/CheckRecipedata'
import ForkKnife from "../../assets/Images/HeroImages/ForkKnife.png";
import Heart from "../../assets/Images/RecipesImages/Vector.png";



export function CheckRecipe() {
    return (
        <div className='main-checkrecipe'>
            <div className='title'>
                <h1>Check Out Delicious Recipe</h1>
            </div>
            <CheckRecipeCard RecipeData={RecipeData} />
        </div>
    )
}



function CheckRecipeCard({ RecipeData }) {
    return (
        <div className='flex-recipiecard'>
            {RecipeData.map((item, index) => {
                return (
                    <div key={index} className='recipie-card'>
                        <img src={item.Photo} alt="" />
                        <h1>{item.Title}</h1>
                        <div className='recipe-btn'>
                            <button><img src={ForkKnife} alt="" /> {item.Time}</button>
                            <button><img src={ForkKnife} alt="" /> {item.Type}</button>
                        </div>
                        <div className='circle'>
                            <img src={Heart} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckRecipe

