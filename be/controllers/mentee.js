const Payment = require("../models/payment");

const getAllMenteForPayment = async (req, res) => {
  const mentee = await Payment.find({ mentorId: req.user.id }).populate({
    path: "userId",
    select: "email fullName telephone profilePicture",
  });
  return res.status(200).json({
    status: "success",
    data: mentee,
  });
};

const updateMenteeForPayment = async (req, res) => {
  try {
    const { _id, schedules, linkMeet, status } = req.body;
    if (!_id || !schedules || !linkMeet || !status) {
      return res.status(400).json({
        status: "failed",
        message: "Missing required fields",
      });
    }

    const payment = await Payment.findOne({
      _id,
      mentorId: req.user.id,
    });

    if (!payment) {
      return res.status(403).json({
        status: "failed",
        message: "Forbidden",
      });
    }

    payment.schedules = schedules;
    payment.linkMeet = linkMeet;
    payment.status = status;
    await payment.save();

    return res.status(200).json({
      status: "success",
      message: "Updated successfully",
      data: payment,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const deleteMenteeForPayment = async (req, res) => {
  const { paymentId } = req.params;
  const payment = await Payment.findOne({
    mentorId: req.user.id,
    _id: paymentId,
  });
  if (!payment) {
    return res.status(403).json({
      status: "failed",
      message: "Forbidden",
    });
  }
  await payment.deleteOne();
  return res.status(200).json({
    status: "success",
    message: "Payment successfullt deleted",
  });
};
module.exports = {
  getAllMenteForPayment,
  updateMenteeForPayment,
  deleteMenteeForPayment,
};
