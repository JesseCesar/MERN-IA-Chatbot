import User from "../models/User.js";
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
//# sourceMappingURL=user-controllers.js.map