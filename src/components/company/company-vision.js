import React from 'react';
import { Title, Content } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const CompanyVision = () => {

    return (
        <div>
            <div className="heading-block mb-6">
					<Title className='has-text-black' tag="h2" isSize={2}>
                        Our <span>Vision</span>
					</Title>

                    <div className='is-flex'>
                        <p className='has-text-black'>
                            "Our Vision...There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words which
                            don't look even slightly believable."
                        </p>

                        <div className="footer-logo">
                            <StaticImage
                                src='../../images/logo-vevol-media.svg'
                                alt="avatar"
                                layout="fullWidth"
                            />
                            <span className='has-text-black'>Name</span>
                            <p className='has-text-black'>Company Owner</p>
                        </div>
                    </div>
			</div>

            <Link to="/">Contact</Link>
        </div>
    );
}

export default CompanyVision;
