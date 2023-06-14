import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from 'bloomer/lib/elements/Title';
import { Link } from 'gatsby';
import './blog-listings.scss';
import BlogListing from './blog-listing.js';

export default function BlogListingsNormalDisplay({ articles }) {
    return (
        <div className="blog-listings__normal">
            {articles.map((article, index) => (
                <BlogListing article={article.node} display="horizontal" index={index} />
            ))}
        </div>
    );
}
