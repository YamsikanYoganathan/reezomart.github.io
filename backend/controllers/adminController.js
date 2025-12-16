import Seller from "../models/Seller.js";

/* Admin Login */
export const adminLogin = (req, res) => {
  res.json({ message: "Admin authenticated" });
};

/* Get All Pending Sellers */
export const getPendingSellers = async (req, res) => {
  const sellers = await Seller.find({ status: "pending" }).populate(
    "userId",
    "name email phone"
  );
  res.json(sellers);
};

/* Approve Seller */
export const approveSeller = async (req, res) => {
  const { sellerId } = req.params;

  const seller = await Seller.findById(sellerId);
  if (!seller)
    return res.status(404).json({ message: "Seller not found" });

  seller.status = "approved";
  await seller.save();

  // Future: send email/SMS notification here
  res.json({ message: "Seller approved successfully" });
};
