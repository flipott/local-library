const Book = require("../models/book");

exports.index = (req, res) => {
    res.send("Not implemented: Site home page");
};

// Display list of all Books
exports.book_list = (req, res) => {
    res.send("Not implemented: Book list");
};

// Display detail page for Book
exports.book_detail = (req, res) => {
    res.send(`Not implemented: Book detail for ${req.params.id}`);
};

// Display Book create form on GET
exports.book_create_get = (req, res) => {
    res.send("Not implemented: Book create GET");
};

// Handle Book create on POST
exports.book_create_post = (req, res) => {
    res.send("Not implemented: Book create POST");
};

// Display Book delete form on GET
exports.book_delete_get = (req, res) => {
    res.send("Not implemented: Book delete GET");
};

// Handle Book delete on POST
exports.book_delete_post = (req, res) => {
    res.send("Not implemented: Book delete POST");
};

// Display Book update form on GET
exports.book_update_get = (req, res) => {
    res.send("Not implemented: Book update GET");
};

// Handle Book update on POST
exports.book_update_post = (req, res) => {
    res.send("Not implemented: Book update POST");
};