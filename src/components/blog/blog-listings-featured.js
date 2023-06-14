import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import './blog-listings-featured.scss';
import { Button } from 'bloomer/lib/elements/Button';

export default function BlogListingsFeatured({ articles }) {
    return (
        <>
            <div className="blog-listings__featured">
                {articles.map((article, index) => (
                    <Link to={`/blog/${article.node.slug}`} key={index} className={`featured-article featured-article__${index}`}>
                        <div class="featured-article__image-section">
                            <GatsbyImage
                                alt={`${article.node.type.title}`}
                                image={article.node.featuredImage.gatsbyImageData} className="featured-article__image"
                            />
                            <div className="featured-article__info">
                                <p className="featured-article__type title is-6">{article.node.type.title}</p>
                            </div>
                        </div>
                        <div className="featured-article__content">
                            <p className="featured-article__date">{article.node.publishedDate}</p>
                            <h2 className="featured-article__title title is-5">{article.node.title}</h2>
                            <p className="featured-article__intro">{article.node.intro.intro}</p>
                            <Button className='vm-button vm-button--small vm-button--underline' >Read more</Button>
                        </div>

                    </Link>
                ))}
            </div>
            {/* {articles.map((article, index) => (
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
            } */}
        </>
    );
}
