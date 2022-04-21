const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

var razorpay = new Razorpay({
  key_id: "rzp_test_hqK62Jo0VWyt6Y",
  key_secret: "jxsB84E71xQp0DrSrJqHJEnQ",
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/order", (req,res) => {
    const {order} = req.body;
    res.send(order._id);
})

app.post("/invoice", async (req, res) => {
  const { name, email, amount, contact } = req.body;

  try {
    const invoice = await razorpay.invoices.create({
      type: "invoice",
      date: parseInt(new Date().getTime() / 1000),
      line_items: [
        {
          name: "Save wildlife",
          amount: amount * 100,
          currency: "INR",
        },
      ],
      customer: {
        name: name,
        email: email,
        contact: contact
      },
    });
    res.status(200).send(invoice);
    console.log(invoice);

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.listen(8080, () => {
  console.log("listening the port at 8080");
});
