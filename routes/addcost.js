const express = require('express');
const router = express.Router();
const Cost = require('../models/costs');
const mongoose = require('mongoose');
const uuid = require('uuid');

// adding a new cost item using the POST method
router.post('/addcost', async (req, res) => {
    try {
        // Extract parameters from the request body
        const { user_id, year, month, day, description, category, sum } = req.body;

        // Ensure the category is one of the available ones
        const availableCategories = ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'];
        if (!availableCategories.includes(category)) {
            return res.status(400).json({ error: 'Invalid category' });
        }

        const id = uuid.v4(); // Generates a unique identifier

        // Create a new cost item
        const newCost = new Cost({
            user_id,
            year,
            month,
            day,
            description,
            id,
            category,
            sum
        });

        // Save the new cost item to the database
        await newCost.save();

        // Send a success response
        res.status(201).json({ message: 'Cost item added successfully', newCost });
    } catch (error) {
        // Send an error response if there's an issue
        console.error('Error adding cost item:', error);
        res.status(500).json({ error: 'Failed to add cost item' });
    }
});

module.exports = router;
