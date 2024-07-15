import React from 'react'
import '../../Styles/BlogList.scss'
import BlogListdata from '../../Data/BlogListdata'
import oneimg from '../../assets/Images/BlogListImages/BloglistsubImages/image 26 (1).png'
import twoimg from '../../assets/Images/BlogListImages/BloglistsubImages/image 26 (2).png'
import threeimg from '../../assets/Images/BlogListImages/BloglistsubImages/image 26.png'

export default function BlogList() {
    return (
        <div className='main-BlogList'>
            <div className='bloglistAll'>
                <BlogListAll BlogListdata={BlogListdata} />
            </div>
            <div className='bloglistAll'>
                <TestyRecipe />
            </div>

        </div>
    )
}



function BlogListAll({ BlogListdata }) {
    return (
        <>
            {BlogListdata.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <img src={item.Photo} alt="" />
                        <div className='desc-card'>
                            <h1>{item.Title}</h1>
                            <p>{item.Description}</p>
                            <div className='img-date'>
                                <div className='img-name'>
                                    <img src={item.userImage} alt="" />
                                    <h1>{item.username}</h1>
                                </div>
                                <div className='datee'>
                                    <h1>{item.Date}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}



function TestyRecipe() {
    return (
        <>
            <div className='Testyrecipie'>
                <h1>Testy Recipes</h1>
                <div className='card'>
                    <img src={oneimg} alt="" />
                    <div className='desc-card'>
                        <h1>Chicken Meatballs with Cream Cheese</h1>
                        <p>By Andreas Paula</p>
                    </div>
                </div>
            </div>
            <div className='Testyrecipie'>
                <div className='card'>
                    <img src={twoimg} alt="" />
                    <div className='desc-card'>
                        <h1>Traditional Bolognaise Ragu</h1>
                        <p>By Andreas Paula</p>
                    </div>
                </div>
            </div>
            <div className='Testyrecipie'>
                <div className='card'>
                    <img src={threeimg} alt="" />
                    <div className='desc-card'>
                        <h1>Pork and Chive Chinese Dumplings</h1>
                        <p>By Gaurav Lokhande</p>
                    </div>
                </div>
            </div>

        </>
    )
}


