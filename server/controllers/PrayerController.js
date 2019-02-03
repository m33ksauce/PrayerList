var PrayerModel = require('../models/PrayerModel.js')

let getAll = async () => {
    var prayers = new Array();
    await PrayerModel.find().cursor().eachAsync(async (prayer) => {
        prayers.push(prayer);
    });
    console.log(prayers);
    return prayers;
}

let getByID = async (id) => {
    console.log(id);
    var prayer = PrayerModel.findById(id)
    console.log(prayer)
    return await PrayerModel.findById(id);
}

let create = async (json) => {
    // var existing = getByID(id);
    // if (existing) {
    //     return existing;
    // }
    var prayer = new PrayerModel(json);
    console.log('Created prayer: ' + prayer);
    prayer.save((err) => {if (err) {console.log("Couldn't save!")}})
    return prayer;
}

let remove = (id) => {
    //
}

let update = (prayer) => {
    
}

module.exports = function() {
    return {
        getAll,
        getByID,
        create
    };
};