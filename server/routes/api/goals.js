const express = require("express");
const router = express.Router();
const goals = require("../../GoalData")

//Get goals for user with id
router.get("/:userId", (req, res) => {
    const id = parseInt(req.params.userId);

    const results = goals.filter(u => {
        return u.id === id;
    })

    if (results != undefined) {
        res.json(results)
    }
    res.send("Could not find goals by this user")
});

//Create goal for user with id
router.post("/:id", (req, res) => {
    const data = req.body.data;

    goals.push(data);
    res.send("Goal uploaded")
});

module.exports = router;