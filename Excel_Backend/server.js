// // Load environment variables
// const dotenv = require('dotenv');
// dotenv.config();

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');

// const User = require('./Model/User'); // Make sure the path is correct

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));
// app.post('/api/register', async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || 'user',
//     });

//     await user.save();

//     res.status(201).json({ message: 'User registered successfully', user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: 'Invalid email or password' });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

//     // Generate JWT
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,  // Use secret from .env
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

