import Seller from "../models/Seller.js";

export const approvedSellerOnly = async (req, res, next) => {
  if (req.user.role !== "seller") {
    return res.status(403).json({ message: "Seller access only" });
  }

  const seller = await Seller.findOne({ userId: req.user._id });

  if (!seller || seller.status !== "approved") {
    return res
      .status(403)
      .json({ message: "Seller not approved" });
  }

  req.seller = seller; // attach seller profile
  next();
};
