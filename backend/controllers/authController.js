import User from "../models/User.js";
import Seller from "../models/Seller.js";
import generateToken from "../utils/generateToken.js";

/* ================= CUSTOMER ================= */

export const registerCustomer = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const exists = await User.findOne({ $or: [{ email }, { phone }] });
    if (exists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      phone,
      password,
      role: "customer"
    });

    res.status(201).json({
      token: generateToken(user._id),
      role: user.role
    });
  } catch {
    res.status(500).json({ message: "Customer registration failed" });
  }
};

export const loginCustomer = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  const user = await User.findOne({
    $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
  });

  if (!user || user.role !== "customer")
    return res
      .status(403)
      .json({ message: "Only customers can log in here" });

  if (!(await user.matchPassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    token: generateToken(user._id),
    role: user.role
  });
};

/* ================= SELLER ================= */

export const registerSeller = async (req, res) => {
  const {
    name,
    email,
    phone,
    password,
    brandName,
    ownerName,
    NIC
  } = req.body;

  try {
    const exists = await User.findOne({ $or: [{ email }, { phone }] });
    if (exists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      phone,
      password,
      role: "seller"
    });

    await Seller.create({
      userId: user._id,
      brandName,
      ownerName,
      NIC,
      phone,
      email
    });

    res.status(201).json({
      message: "Seller registered. Awaiting admin approval."
    });
  } catch {
    res.status(500).json({ message: "Seller registration failed" });
  }
};

export const loginSeller = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  const user = await User.findOne({
    $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
  });

  if (!user || user.role !== "seller")
    return res
      .status(403)
      .json({ message: "Only sellers can log in here" });

  if (!(await user.matchPassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const seller = await Seller.findOne({ userId: user._id });

  if (!seller || seller.status !== "approved")
    return res
      .status(403)
      .json({ message: "Seller account not approved yet" });

  res.json({
    token: generateToken(user._id),
    role: user.role
  });
};
