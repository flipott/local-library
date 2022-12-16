const Genre = require("../models/genre");

// Display list of all Genres
exports.genre_list = (req, res, next) => {
    Genre.find()
      .sort([["name", "ascending"]])
      .exec((err, list_genres) => {
        if (err) {
          return next(err);
        }
        res.render("genre_list", {
          title: "Genre List",
          genre_list: list_genres,
        });
      });
  };

// Display detail page for specific Genre
exports.genre_detail = (req, res) => {
    res.send(`Not implemented: Genre detail for ${req.params.id}`);
};

// Display Genre create form on GET
exports.genre_create_get = (req, res) => {
    res.send("Not implemented: Genre create GET");
};

// Handle Genre create on POST
exports.genre_create_post = (req, res) => {
    res.send("Not implemented: Genre create POST");
};

// Display Genre delete form on GET
exports.genre_delete_get = (req, res) => {
    res.send("Not implemented: Genre delete GET");
};

// Handle Genre delete on POST
exports.genre_delete_post = (req, res) => {
    res.send("Not implemented: Genre delete POST");
};

// Display Genre update form on GET
exports.genre_update_get = (req, res) => {
    res.send("Not implemented: Genre update GET");
};

// Handle Genre update on POST
exports.genre_update_post = (req, res) => {
    res.send("Not implemented: Genre update POST");
};