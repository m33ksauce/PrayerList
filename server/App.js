var express = require('express');
var app = express();
var apirouter = express.Router();

// Here be routes
var prayerRouter = require('./routes/prayer');

var conf = {
    port: process.env.PORT || 8080
}

apirouter.use('/prayer', prayerRouter);

app.use('/api', apirouter);


app.listen(conf.port, () => console.log('Service started on port ' + conf.port));