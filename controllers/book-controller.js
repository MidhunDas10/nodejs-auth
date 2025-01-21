const Book = require('../models/book');
const getAllBooks =async (req, res) => {
    try{
        const allBooks = await Book.find({});
        console .log('Frontend request to get all books',allBooks );
        if (allBooks) {
            res.status(201).json(
                {
                    success: true,
                    message: "Listing all books !",
                    data: allBooks   
                }
            );
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
const addNewBook =async (req, res) => {
    try{
        const newBookFormData = req.body;
        const newBook = await Book.create(newBookFormData);
        if (newBook) {
            res.status(201).json(
                {
                    success: true,
                    message: "New book created",
                    data: newBook   
                }
            );
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
const updateBook =async (req, res) => {};
const deleteBook =async (req, res) => {};
const getSingleBookById =async (req, res) => {
    try{
        console.log(req.params);
        const bookId = req.params.id;
        const book = await Book.findById(bookId); 
        if (!book) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Book not found !",
                    data: {}   
                }
            );
        } 
            res.status(201).json(
                {
                    success: true,
                    message: "Book found !",
                    data: book   
                }
            );
        

    } catch (error) { 

    }
};



module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook};