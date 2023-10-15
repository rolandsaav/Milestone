const express = require("express");
const router = express.Router();
const { goalRef, db } = require("../../firebase");
const { v4: uuidv4 } = require('uuid');
const { FieldValue } = require("@google-cloud/firestore");


//Get goals for user with id
router.get("/:userId", async (req, res) => {
    const id = req.params.userId;
    const user = await db.collection("users").doc(id).get();
    const userData = user.data();

    const goalIds = userData.goals.map((g) => {
        return g.uid;
    })

    let goals = [];

    const goalsRef = collection(db, "goals");

    goalIds.forEach(async element => {
        const goal = await goalsRef.doc(element).get();
        goals.push(goal);
    });


    return res.json(goals);
});

//Create goal for user with id
router.post("/:userId", async (req, res) => {
    const data = req.body.imageId;
    db.collection('users').doc(req.params.userId).update({
        goals: FieldValue.arrayUnion(data)
    })
    res.send(goals)
});

module.exports = router;