const midtransClient = require("midtrans-client");
const Payment = require("../models/payment");

// Setup Sn
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY_MIDTRANS,
});

const createPayment = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const { totalPrice, schedules } = req.body;
    const user = req.user;
    if (!totalPrice || !mentorId || !user) {
      return res.status(400).json({ message: "Missing required data" });
    }

    const order_id = `ORDER-${Date.now()}`;

    const paymentBody = {
      mentorId,
      userId: user.id,
      totalPrice,
      schedules,
    };

    const parameter = {
      transaction_details: {
        order_id: order_id,
        gross_amount: totalPrice,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        // first_name: user.email,
        email: user.email,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    const payment = new Payment(paymentBody);
    await payment.save();
    res.status(200).json({
      status: "success",
      token: transaction.token,
     
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getAllPayment = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id })
      .populate({
        path: "mentorId",
        select: "name role profilePicture phone",
      })
      .exec();
    console.log(payments);
    return res.status(200).json({
      status: "success",
      data: payments,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  createPayment,
  getAllPayment,
};
