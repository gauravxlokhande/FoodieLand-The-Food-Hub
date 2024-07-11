import userimg from '../assets/Images/HeroImages/Ellipse 2.png';
import timeimg from '../assets/Images/HeroImages/Timer.png';
import ForkImg from '../assets/Images/HeroImages/ForkKnife.png';
import Nutritionimg from '../assets/Images/NutritionInfoImages/image 26.png';

const NutritionData = {
    Userinfo: [
        {
            Photo: userimg,
            Name: 'Gaurav lokhande',
            Time: '06 November 2001'
        },
        {
            Photo: timeimg,
            Name: 'Prep Time',
            Time: '15 minutes'
        },
        {
            Photo: timeimg,
            Name: 'Cook Time',
            Time: '15 minutes'
        },
        {
            Photo: ForkImg,
            Name: 'Chicken'
        }
    ],

    NutritionInfo: {
        NutritionImage: Nutritionimg,
        Title: 'Nutrition Information',
        Calories: '219.9 kcal',
        TotalFat: '10.7 g',
        Protein: '7.9 g',
        Carbohydrate: '22.3 g',
        Cholesterol: '37.4 mg'
    }
};

export default NutritionData;
