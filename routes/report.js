const express = require('express');
const router = express.Router();
const Cost = require('../models/costs'); // Importing the Cost model
const mongoose = require('mongoose');

router.get('/report', async (req, res) => {
    try {
        // Extract parameters from the request query
        const { user_id, month, year } = req.query;

        // Query the database to retrieve all cost items for the specified user, month, and year
        const costs = await Cost.find({ user_id, month, year });

        // Organize the retrieved cost items into categories
        const report = {
            food: [],
            health: [],
            housing: [],
            sport: [],
            education: [],
            transportation: [],
            other: []
        };

        // Iterate through the retrieved cost items and categorize them
        costs.forEach(cost => {
            report[cost.category].push({
                day: cost.day,
                description: cost.description,
                sum: cost.sum
            });
        });

        // Send the report object as a JSON response
        res.json(report);
    } catch (error) {
        // Send an error response if there's an issue
        console.error('Error generating cost report:', error);
        res.status(500).json({ error: 'Failed to generate cost report' });
    }
});

module.exports = router;