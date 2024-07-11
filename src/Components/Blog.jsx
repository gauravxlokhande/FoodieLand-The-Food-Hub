import React from 'react'
import Subscribe from './Subscribe/Subscribe';
import BlogArticle from './BlogArticle/BlogArticle';
import BlogList from './BlogList/BlogList'

function Blog() {
    return (
        <div>
            <BlogArticle />
            <BlogList />
            <Subscribe />
        </div>
    )
}

export default Blog
