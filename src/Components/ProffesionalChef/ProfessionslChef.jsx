import React from 'react'
import '../../Styles/ProfessionalChef.scss'
import userimg from '../../assets/Images/HeroImages/Ellipse 2.png'
import chefimg from '../../assets/Images/ProfessionalChefImages/image 29.png'

function ProfessionslChef() {
    return (
        <div className='main-ProfessionslChef'>
            <>
                <h1>Full Guide to Becoming a Professional Chef</h1>
                <div className='img-date'>
                    <div className='img-name'>
                        <img src={userimg} alt="" />
                        <h2>Gaurav Lokhande</h2>
                    </div>
                    <div className='date'>
                        <h2>06 November 2001</h2>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            </>
            <img src={chefimg} alt="" />

        </div>
    )
}

export default ProfessionslChef
