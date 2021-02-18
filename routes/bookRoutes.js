const express = require('express');
const bookController = require('../Controller/bookController');

const router = express.Router();

router.get('/', bookController.search_book);
router.post('/find', bookController.find_book);
router.get('/not_found', bookController.book_not_found);
router.get('/details/:id', bookController.book_details);

module.exports = router; 