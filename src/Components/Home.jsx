import React from 'react'
import Hero from '../Components/Hero/Hero'
import Categories from '../Components/Categories/Categories'
import Recipes from '../Components/Recipes/Recipes'
import LearnMore from '../Components/LearnMore/LearnMore'
import Subscribe from '../Components/Subscribe/Subscribe'
import Instapanel from '../Components/InstaPanel/Instapanel'


function Home() {
    return (
        <div>
            <Hero />
            <Categories />
            <Recipes />
            <LearnMore />
            <Instapanel />
            <Subscribe />

        </div>
    )
}

export default Home
