const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { full_name, home_address, phone_number, whatsapp_number, email, teacher_type, password } = req.body;

        if (!req.file || !req.file.path) {
            return res.status(400).json({ message: "CV file is required and must be uploaded as a PDF." });
        }
        

        // Check for validation errors
        const errors = [];
        if (!full_name || !home_address || !phone_number || !whatsapp_number || !email || !teacher_type || !password) {
            errors.push("All fields are required.");
        }

        if (password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        if (errors.length > 0) {
            return res.status(400).json({ message: errors.join(" ") });
        }

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phone_number }, { whatsapp_number }, {full_name}],
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists with the provided name, email, phone number, or WhatsApp number." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the new user
        const newUser = new User({
            full_name,
            home_address,
            phone_number,
            whatsapp_number,
            email,
            teacher_type,
            password: hashedPassword,
            cv: req.file.path,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error creating user:", error); // Log the error for debugging
        res.status(500).json({ message: "Server error ", error: error.message });
    }
    
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const token = jwt.sign(
            { id: user._id, role: user.teacher_type },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, message: "Login successful." });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Update user by ID
exports.updateUserById = async (req, res) => {
    try {
        const { full_name, home_address, phone_number, whatsapp_number, email, teacher_type, cv, status } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { full_name, home_address, phone_number, whatsapp_number, email, teacher_type, cv, status },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};