var express = require('express');
var router = express.Router();
var PrayerController = require('../controllers/PrayerController')();

router.get("/", async (req, res) => {
    console.log("got it")
    res.json(await PrayerController.getAll());
})

router.get("/:id", async (req, res) => {
    res.json(await PrayerController.getByID(req.params.id));
});

router.post("/", async (req, res) => {
    if (req.get('content-type') != 'application/json') {
        res.sendStatus(415);
        return
    }
    if (!req.body) {
        res.sendStatus(400);
        return
    }
    console.log(req.body);
    res.json(await PrayerController.create(req.body));
})

module.exports = router;