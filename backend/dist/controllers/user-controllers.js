import User from "../models/User.js";
import { hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.error("Error in getAllUsers:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user", error });
    }
};
//# sourceMappingURL=user-controllers.js.map