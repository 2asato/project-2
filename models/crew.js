const mongoose = require('mongoose');

const crewSchema = mongoose.Schema({
    name: String,
    profile_pic: String,
    fav_beer: String,
    fav_brewery: String,
    about: String,
});

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;
