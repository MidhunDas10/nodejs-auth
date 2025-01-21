const express = require('express');
const { getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook } = require('../controllers/book-controller');
//create express router
const router = express.Router();

//Create routes that are related to books
router.get('/get',getAllBooks);
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

//export router  
module.exports = router;
