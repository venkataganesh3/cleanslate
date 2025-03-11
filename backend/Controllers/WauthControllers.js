const UserModel = require("../Models/Worker");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const wsignup = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, cpassword } = req.body;

        // Validate password confirmation
        if (password !== cpassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Check if email already exists
        const user = await UserModel.findOne({ email: email.trim().toLowerCase() });
        if (user) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new UserModel({
            name,
            email: email.trim().toLowerCase(),
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            success: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error', success: false });
    }
}

const wlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email.trim().toLowerCase() });

        if (!user) {
            return res.status(403).json({ error: 'User does not exist' });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({ error: 'Invalid Password' });
        }

        const jwtToken = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            success: true,
            name: user.name,
            email: user.email,
            token: jwtToken
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error', success: false });
    }
}

module.exports = {
    wsignup,
    wlogin
};
