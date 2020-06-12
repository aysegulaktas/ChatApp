const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('service is up and running');
});

module.exports = router;