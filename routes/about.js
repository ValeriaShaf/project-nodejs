var express = require('express');
var router = express.Router();


/* GET developers listing. */
router.get('/about', (req, res) => {
    try {
        const developers = [
            {firstname: 'Valeria', lastname: 'Shafran', id: 320954258, email: 'valeshafran@gmail.com'},
            {firstname: 'Einav', lastname: 'Kogut', id: 318902285, email: 'einav.kogut123@gmail.com'}
        ];
        res.json(developers);
    } catch (error) {
        // Send an error response if there's an issue
        console.error('Error retrieving developer information:', error);
        res.status(500).json({ error: 'Failed to retrieve developer information' });
    }
});

module.exports = router;

