const express = require('express');
const router = express.Router();

// @route        POST api/users
//@desc          Register a users
//@access        Public
router.post('/api/users', (req, res) => {
    res.send('register a user');
});

module.export = router;