const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // #swagger.tags = ['Messages']
    // #swagger.summary = 'Return a Message'
    // #swagger.description = 'Return a message property with some string'
    res.setHeader('Content-Type', 'application/json')
    res.json({'message': 'messages'});
});

module.exports = router;