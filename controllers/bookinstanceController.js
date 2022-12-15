const bookInstance = require("../models/bookinstance");

// Display list of all BookInstances
exports.bookinstance_list = (req, res) => {
    res.send("Not implemented: BookInstance list");
};

// Display detail for a specific BookInstance
exports.bookinstance_detail = (req, res) => {
    res.send(`Not implemented: BookInstance detail for ${res.params.id}`);
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = (req, res) => {
    res.send("Not implemented: BookInstance create GET");
}

// Handle BookInstance create on POST
exports.bookinstance_create_post = (req, res) => {
    res.send("Not implemented: BookInstance create POST");
};

// Display BookInstance delete form on GET
exports.bookinstance_delete_get = (req, res) => {
    res.send("Not implemented: BookInstance delete GET");
};

// Handle BookInstance delete on POST
exports.bookinstance_delete_post = (req, res) => {
    res.send("Not implemented: BookInstance delete POST");
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = (req, res) => {
    res.send("Not implemented: BookInstance update GET");
};

// Handle BookInstance update on POST
exports.bookInstance_update_post = (req, res) => {
    res.send("Not implemented: BookInstance update POST");
};