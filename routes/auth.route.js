const express = require("express");
const router = express.Router();

router.post('/signup', (req, res) => {
    if (req.body.name && req.body.password && req.body.email)
    {
        res.send(201).send("User Subscribed")
    } else
    {
        res.status(503).send("Please send body in the following manner:\n{\n'name':'User Name',\n'password':'Password'\n,\n'email':'your email address'\n} ")
    }
});

router.post('/login', (req, res) => {
    if (req.body.name && req.body.password)
    {
        res.send(201).send(`Logged in as ${req.body.name}`)
    } else
    {
        res.status(503).send("Please send body in the following manner:\n{\n'name':'User Name',\n'password':'Password'\n,} ")
    }
    
});

module.exports = router;