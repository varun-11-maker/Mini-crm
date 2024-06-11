const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
console.log('Environment variables loaded.');

// Import database connection
const db = require('./models/db');
console.log('Database connection file loaded.');

// Import routes
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const campaignRoutes = require('./routes/campaignRoutes');

const app = express();
console.log('Express app initialized.');

// Middleware
app.use(express.json());
console.log('Middleware set up.');

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/campaigns', campaignRoutes);
console.log('Routes set up.');

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
