var mongoose = require('mongoose');

var PrayerSchema = new mongoose.Schema({
    title: 'string',
    owner: 'string',
    body: 'string'
});

module.exports = mongoose.model('Prayer', PrayerSchema);