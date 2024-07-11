import React from 'react';
import '../../Styles/LearnMore.scss';
import learnmoredata from '../../Data/Learnmoredata';

function LearnMore() {
    return (
        <div className='main-learnmore'>
            <div className='content'>
                <h1>{learnmoredata.Title}</h1>
                <h1>{learnmoredata.Titletwo}</h1>
                <p>{learnmoredata.Description}</p>
                <button>Learn More</button>
            </div>

            <div>
                <img src={learnmoredata.ChefImage} alt="" />
            </div>
        </div>
    );
}

export default LearnMore;
