export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
    const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

    const event = {
        data: [
            {
                event_name: "Purchase",
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                event_source_url: "https://yourwebsite.com",
                user_data: {
                    em: ["HASHED_EMAIL"], // Hash email before sending
                    ph: ["HASHED_PHONE_NUMBER"],
                    client_ip_address: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
                    client_user_agent: req.headers["user-agent"],
                },
                custom_data: {
                    currency: "USD",
                    value: 99.99,
                    content_ids: ["product_123"],
                    content_type: "product",
                },
            },
        ],
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v22.0/${FACEBOOK_PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event),
            }
        );

        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
