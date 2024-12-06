const Login = require('../model/loginSchema');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
require('dotenv').config(); 

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await Login.create({ username, password: hashedPassword });
        res.status(201).json({ user });
    } catch (err) {
        res.status(500).send(err);
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Login.findOne({ username }).lean();
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const secretKey = process.env.SECRET_KEY;
        const bytes = CryptoJS.AES.decrypt(password, secretKey);
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

        // Compare the decrypted password with the stored hashed password
        const isMatch = await bcrypt.compare(decryptedPassword, user.password);
        if (isMatch) {
            return res.status(200).json({ message: "Logged in successfully" });
        }

        res.status(400).json({ message: "Invalid username or password" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = {
    register,
    login,
};
