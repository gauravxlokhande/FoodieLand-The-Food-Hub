import React from 'react';
import '../../Styles/Categories.scss';
import categoriesData from '../../Data/categories';

function Categories() {
    return (
        <div className='main-categories'>
            <div className='Categories'>
                <h1 className='Categories-text'>Categories</h1>
                <h1 className='viewall-text'>
                    <button>View All Categories</button>
                </h1>
            </div>
            <div className='main-all-items'>
                {categoriesData.map((item, index) => (
                    <div key={index} className={(index === 2 || index === 3) ? 'all-items-two' : 'all-items'}>
                        <img src={item.Photo} alt='' />
                        <h1>{item.Name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
