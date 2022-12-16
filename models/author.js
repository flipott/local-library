const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function() {
    let fullname = "";
    if (this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`
    }
    if (!this.first_name || !this.family_name) {
        fullname = "";
    }
    return fullname;
});

AuthorSchema.virtual("url").get(function() {
    return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_formatted").get(function () {
    if (this.date_of_birth && this.date_of_death) {
        const birthStr = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
        console.log(birthStr);
        const deathStr = DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED);
        return `${birthStr} - ${deathStr}`
    } else if (this.date_of_birth && !this.date_of_death) {
        const birthStr = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
        return `${birthStr}`
    } else {
        return 'Date of birth unknown';
    }
})


module.exports = mongoose.model("Author", AuthorSchema);