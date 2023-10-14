const express = require("express");
const router = express.Router();
const goals = require("../../GoalData");
const { goalRef } = require("../../firebase");

//Get goals for user with id
router.get("/:userId", (req, res) => {
    const id = parseInt(req.params.userId);

    const results = goals.filter(u => {
        return u.id === id;
    })

    if (results != undefined) {
        return res.send(results)
    } 
    else {
        return res.send("Could not find goals by this user")
    }
});

//Create goal for user with id
router.post("/:userId", (req, res) => {
    const data = req.body;
    goals.push(data);
    res.send(goals)
});

module.exports = router;