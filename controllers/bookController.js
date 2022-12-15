const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

const async = require("async");

exports.index = (req, res) => {
    async.parallel(
        {
            book_count(callback) {
                Book.countDocuments({}, callback);
            },
            book_instance_count(callback) {
                BookInstance.countDocuments({}, callback);
            },
            book_instance_available_count(callback) {
                BookInstance.countDocuments({status: "Available"}, callback);
            },
            author_count(callback) {
                Author.countDocuments({}, callback);
            },
            genre_count(callback) {
                Genre.countDocuments({}, callback);
            },
        },
        (err, results) => {
            res.render("index", {
                title: "Local Library Home",
                error: err,
                data: results,
            });
        }
    );
};

// Display list of all Books
exports.book_list = (req, res, next) => {
    Book.find({}, "title author")
        .sort({title: 1})
        .populate("author")
        .exec((err, list_books) => {
            if (err) {
                return next(err);
            }
            res.render("book_list", {title: "Book List", book_list: list_books});
        });
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