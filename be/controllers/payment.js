const midtransClient = require("midtrans-client");
const Payment = require("../models/payment");

// Setup Snap
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY_MIDTRANS,
});

const createPayment = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const { user, totalPrice, schedules } = req.body;

    if (!totalPrice || !mentorId || !user) {
      return res.status(400).json({ message: "Missing required data" });
    }

    const order_id = `ORDER-${Date.now()}`;

    const paymentBody = {
      mentorId,
      userId: req.body.userId || user.email,
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
        first_name: user.first_name,
        email: user.email,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    // Simpan ke DB
    const payment = new Payment(paymentBody);
    await payment.save();

    res.status(200).json({
      status: "success",
      token: transaction.token,
      redirect_url: transaction.redirect_url, // optional
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  createPayment,
};
