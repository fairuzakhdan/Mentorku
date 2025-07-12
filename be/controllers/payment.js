const Payment = require("../models/payment");

const createPayment = async (req, res) => {
  const { mentorId } = req.params;
  // const { user } = req.user;
  const paymentBody = {
    mentorId,
    userId: req.body.user,
    schedules: req.body.schedules,
  };
  console.log(paymentBody);
  try {
    const payment = new Payment(paymentBody);
    await payment.save();
    // console.log(payment);
    return res.status(200).json({
      status: "success",
      data: payment,
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

const getPayment = async (req, res) => {
  const payment = await Payment.find();
  return res.status(200).json({
    status: "success",
    data: payment,
  });
};

module.exports = {
  createPayment,
  getPayment,
};
