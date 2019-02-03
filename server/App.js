var config = require('./Config');
// var database = require('./datasource/Database').New(config);
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require ("mongoose");
var app = express();
var apirouter = express.Router();

// Here be routes
var prayerRouter = require('./routes/prayer');

var conf = {
    port: process.env.PORT || 8080
}

mongoose.connect(config.mongodb, {useNewUrlParser: true}, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + config.mongodb + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + config.mongodb);
    }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apirouter.use('/prayers', prayerRouter);

app.use('/api', apirouter);

app.listen(config.port  ? config.port : 8080, () => console.log('Service started on port ' + conf.port));