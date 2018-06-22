var express = require('express');
var router = express.Router();

router.get("/:id", (req, res) => {
    res.send("hello");
});

module.exports = router;