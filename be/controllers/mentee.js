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

module.exports = { getAllMenteForPayment };
