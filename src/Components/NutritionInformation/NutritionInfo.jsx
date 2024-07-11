import React from 'react'
import '../../Styles/NutritionInfo.scss';
import nutritiondata from '../../Data/NutritionInfoData'
import Share from '../../assets/Images/NutritionInfoImages/Share.png'
import Print from '../../assets/Images/NutritionInfoImages/Print.png'
import Nutritionimg from '../../assets/Images/NutritionInfoImages/image 26.png';



function NutritionInfo() {
    return (
        <div className='main-nutritioninfo'>
            <h2>Health Japanese Fried Rice </h2>
            <div className='info-print'>
                <div className='img-info'>

                    {nutritiondata.Userinfo.map((item, index) => {

                        return (
                            <div key={index} className={index !== 0 ? 'usertwo' : 'user'}>
                                <div><img src={item.Photo} alt="" /></div>
                                <div>
                                    <h1>{item.Name}</h1>
                                    <h3>{item.Time}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='print-share'>
                    <img src={Print} alt="" />
                    <img src={Share} alt="" />
                </div>
            </div>



            <div className='image-content'>
                <div className='nutritionimg'><img src={nutritiondata.NutritionInfo.NutritionImage} alt="" /></div>
                <div className='Info-Nutri'>
                    <h1>{nutritiondata.NutritionInfo.Title}</h1>
                    <div className='info-all'>
                        <div className='info-data'>
                            <div className='name-info'>
                                <h4>Calories</h4>
                            </div>
                            <div className='value-info'>
                                <h5>{nutritiondata.NutritionInfo.Calories}</h5>
                            </div>
                        </div>
                        <div className='info-data'>
                            <div className='name-info'>
                                <h4>TotalFat</h4>
                            </div>
                            <div className='value-info'>
                                <h5>{nutritiondata.NutritionInfo.TotalFat}</h5>
                            </div>
                        </div>
                        <div className='info-data'>
                            <div className='name-info'>
                                <h4>Protein</h4>
                            </div>
                            <div className='value-info'>
                                <h5>{nutritiondata.NutritionInfo.Protein}</h5>
                            </div>
                        </div>
                        <div className='info-data'>
                            <div className='name-info'>
                                <h4>Carbohydrate</h4>
                            </div>
                            <div className='value-info'>
                                <h5>{nutritiondata.NutritionInfo.Carbohydrate}</h5>
                            </div>
                        </div>
                        <div className='info-data'>
                            <div className='name-info'>
                                <h4>Cholesterol</h4>
                            </div>
                            <div className='value-info'>
                                <h5>{nutritiondata.NutritionInfo.Cholesterol}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='description'>
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NutritionInfo;
