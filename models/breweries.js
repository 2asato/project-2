const mongoose = require('mongoose');

const brewerySchema = mongoose.Schema({
    name: String,
    pic: String,
    website: String,
    phone: String,
    hours: String,
    food: String,
    kids: String,
    cc: String,
    outdoor: String,
})
const Breweries =mongoose.model('Breweries', brewerySchema);

module.exports = Breweries;
