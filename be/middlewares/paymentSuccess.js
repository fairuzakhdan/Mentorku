const Payment = require("../models/payment");
const paymentSuccess = async (req, res, next) => {
  const userId = req.user.id;
  //   const { mentorId } = req.params;

  try {
    const payment = await Payment.findOne({
      userId,
      status: "success",
      //   mentorId,
    });
    if (!payment) {
      return res.status(403).json({
        status: "forbidden",
        message: "Akses ditolak, belum membayar mentor ini",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};
module.exports = paymentSuccess;
