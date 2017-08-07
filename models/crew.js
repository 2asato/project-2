const mongoose = require('mongoose');
const Breweries = require('./breweries.js');

const crewSchema = mongoose.Schema({
    name: String,
    profile_pic: String,
    fav_beer: String,
    fav_brewery: String,
    about: String,
    breweries: [Breweries.schema],
});

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;
