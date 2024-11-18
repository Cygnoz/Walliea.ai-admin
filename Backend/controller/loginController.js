const Login = require('../model/loginSchema')
const bcrypt = require('bcrypt');

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
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Login.findOne({ username }).lean();
        if (!user) {
            return res.status(400).json({ message: "Invalid username" });
        }   
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return res.status(200).json({ message: "Logged in successfully" });
        }   
        res.status(400).json({ message: "Invalid username or password" });
    }   
    catch (err) {
        res.status(500).send
    }
}

module.exports = {
    register,
    login,
}