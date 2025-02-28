const stripe = require("stripe")("your-secret-key"); // Replace with your Stripe Secret Key

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: req.body.cart.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: { name: item.name, images: [item.image] },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
      });

      res.json({ url: session.url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
