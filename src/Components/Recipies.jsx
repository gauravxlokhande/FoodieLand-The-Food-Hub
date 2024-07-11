import React from 'react'
import Subscribe from './Subscribe/Subscribe'
import CheckRecipe from './CheckRecipe/CheckRecipe'
import RecipeDescription from './RecipeDescription/RecipeDescription'
import NutritionInfo from './NutritionInformation/NutritionInfo'

function Recipies() {
    return (
        <div>
            <NutritionInfo />
            <RecipeDescription />
            <Subscribe />
            <CheckRecipe />
        </div>
    )
}

export default Recipies
