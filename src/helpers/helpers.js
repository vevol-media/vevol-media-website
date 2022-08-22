import { getImage } from 'gatsby-plugin-image';

export function getImageByName(imagesArray, imageName) {
	const image = imagesArray.filter((image) => image.name === imageName)[0];

	return getImage(image.childImageSharp.gatsbyImageData);
}
