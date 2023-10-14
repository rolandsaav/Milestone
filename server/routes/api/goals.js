const express = require("express");
const router = express.Router();
const goals = require("../../GoalData");
const { goalRef } = require("../../firebase");
const { v4: uuidv4 } = require('uuid');

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
router.post("/:userId", async (req, res) => {
    const data = req.body;
    const doc = goalRef.doc(uuidv4())
    await doc.set(data)
    goals.push(data);
    res.send(goals)
});

module.exports = router;