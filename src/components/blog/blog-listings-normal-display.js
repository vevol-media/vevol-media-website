import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from 'bloomer/lib/elements/Title';
import { Link } from 'gatsby';
import './blog-listings.scss';

export default function BlogListingsNormalDisplay({ articles }) {
    return (
        <div className="blog-listings">
            {articles.map((article, index) => (
                <Link to={`/blog/${article.node.slug}`} key={index}>
                    <BgImage image={article.node.featuredImage.gatsbyImageData} className="blog-listing__image">
                        <p className="blog-listing__type">{article.node.type.title}</p>
                        <p className="blog-listing__date">{article.node.publishedDate}</p>
                    </BgImage>

                    <div className="blog-listing__info">
                        <Title tag="h2" isSize={5}>
                            {article.node.title}
                        </Title>
                        <p className="blog-listing__intro">{article.node.intro.intro}</p>
                        <span className="vm-button vm-button--black-transparent vm-button--small">Read More</span>
                    </div>
                </Link>))
            }
        </div>
    );
}
