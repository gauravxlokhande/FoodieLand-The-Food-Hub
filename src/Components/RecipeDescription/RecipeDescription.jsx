import React from 'react'
import recipeimg from '../../assets/Images/RecipeDescriptionImages/Rectangle 23.png'
import '../../Styles/RecipeDescription.scss'
import facebook from '../../assets/Icons/Header_Icons/001-facebook.png'
import twitter from '../../assets/Icons/Header_Icons/003-twitter.png'
import instagram from '../../assets/Icons/Header_Icons/004-instagram.png'

export default function RecipeDescription() {
    return (
        <div className='main-RecipeDescription'>
            <RecipeDescriptionCard />
            <div className='icons'>
                <h1>Share this on:</h1>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    )
}




function RecipeDescriptionCard() {
    return (
        <>
            <div className='all-data'>
                <div className=' heading-description'>
                    <h1>How did you start out in the food industry?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                </div>
                <div className=' heading-description'>
                    <h1>What do you like most about your job?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                </div>
                <div className=' heading-description'>
                    <h1>Do you cook at home on your days off?</h1>
                    <img src={recipeimg} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                </div>
                <div className=' heading-description'>
                    <h1>What would your advice be to young people looking to get their foot in the door?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                </div>

                <ThoughtCard />
                <div className=' heading-description'>
                    <h1>What is the biggest misconception that people have about being a professional chef?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                </div>
            </div>
        </>
    )
}


function ThoughtCard() {
    return (
        <div className='ThoughtCard'>

            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>
        </div>
    )
}



