import { getImage } from 'gatsby-plugin-image';

export function getImageByName(imagesArray, imageName) {
	const image = imagesArray.filter((image) => image.name === imageName)[0];

	return getImage(image.childImageSharp.gatsbyImageData);
}

const sha256 = async (data) => {
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(data.toLowerCase().trim()));
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");
};

export const sendEventConversionAPI = async (type) => {
	const API_VERSION = "v22.0";
	const PIXEL_ID = '2127249697728474';
	const ACCESS_TOKEN ='EAAUJ7H6mPxUBO2bdSNkxZCU3ZCZBV87tmBtmF8FaU81AvGFZAmV4h4oEZCSyy9BZALaIZATe0tzqymk3Pav3SRdHjtAENy3ZAwbZAyfElareIWp2QgO8iNhJZC3W6GbqLxXvPMriGuxnZAIWwVWJ7dfaIJyeZAXfV1g3nM5Yht8FbcYuYA4BL3jysTvAxid1CXU0cEQHgwZDZD';

	const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

	try {
		// 1. Get user's IP and location
		const ipResponse = await fetch("https://ipapi.co/json/");
		const ipData = await ipResponse.json();
	
		// 2. Hash country and city (ct)
		const hashedCountry = ipData.country_name ? await sha256(ipData.country_name) : null;
		const hashedCity = ipData.city ? await sha256(ipData.city) : null;
	
		const payload = {
		  data: [
			{
			  event_name: type,
			  event_time: Math.floor(Date.now() / 1000),
			  action_source: "website",
			  event_source_url: window.location.href,
			  user_data: {
				client_ip_address: ipData.ip || null,
				client_user_agent: navigator.userAgent || null,
				fbp: getCookie("_fbp"), // Retrieve Facebook browser ID if available
				country: hashedCountry ? [hashedCountry] : [],
				ct: hashedCity ? [hashedCity] : [],
			  },
			},
		  ],
		};
	
		// 3. Send data to Facebook
		const response = await fetch(url, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(payload),
		});
	
		const responseData = await response.json();
		console.log("Facebook Event Response:", responseData);
	  } catch (error) {
		console.error("Error sending event:", error);
	  }
	};
	

// Helper function to get cookies
const getCookie = (name) => {
	const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
	return match ? match[2] : null;
};
