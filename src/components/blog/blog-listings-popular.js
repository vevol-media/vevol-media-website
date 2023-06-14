import React from 'react';
import { Container } from 'bloomer';
import BlogListing from './blog-listing.js';

export default function BlogListingsPopular({ articles }) {
    return (
        <div class="vm-section vm-section--background-black blog-listings__popular-section">
            <Container>
                <h2 className="title is-3 mb-2em">MOST POPULAR POSTS</h2>
                <div className="blog-listings__popular-flex">

                    {articles.map((article, index) => (
                        <BlogListing article={article.node} display="horizontal" index={index} popular="true" />
                    ))}
                </div>
            </Container>
        </div>
    );
}
