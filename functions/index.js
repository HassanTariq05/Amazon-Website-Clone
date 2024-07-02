const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51PWLFN07N3agpj4PjLnnThwfnYTmX7" +
  "j4i00MLlPItcWQtgRfsGGbvDLIPr2keeBd1kEAHt" +
  "Sc3q3dMXFBJqg0fBXv009f6b1rcw",
);

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received for amount:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(200).send({
    clientSecret: paymentIntent.client_secret
  });
});

exports.api = functions.https.onRequest(app);
