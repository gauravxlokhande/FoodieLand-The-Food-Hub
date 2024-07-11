import React from 'react'
import '../../Styles/BlogArticle.scss';

function BlogArticle() {
    return (
        <div className='main-blog'>
            <h1>Blog & Article</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <div className='input-btn'>
                <input type="text" placeholder='Search article, news or recipe...' />
                <button>Search</button>
            </div>
        </div>
    )
}

export default BlogArticle
