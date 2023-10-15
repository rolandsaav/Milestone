const db = require("../../firebase").db;
const express = require("express");
const router = express.Router();
let users = require("../../TestUsers");
const { FieldValue } = require("@google-cloud/firestore");

router.get("/:id", (req, res) => {
    const userInfo = db.collection('users').doc(String(req.params.id)).get()
        .then((userInfo) => {
            return res.json(userInfo.data());
        }).catch((error) => {
            console.log(error);
        })
});

router.post("/", (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        uid: req.body.uid,
        username: req.body.username,
        goals: [],
        friends: [],
        nameIndex: req.body.nameIndex
    };

    if (newUser.username === undefined) {
        return res.sendStatus(400);
    }
    db.collection('users').doc(String(newUser.uid)).set(newUser);
});

router.post("/goal", (req, res) => {
    console.log(req.body);
    const newGoal = {
        uid: req.body.uid,
        title: req.body.title,
        streak: 0,
        category: req.body.category,
        duration: req.body.duration,
        description: req.body.description,
    };

    db.collection('users').doc(String(req.body.userId)).update({
        goals: FieldValue.arrayUnion(newGoal)
    });
    db.collection('goals').doc(String(newGoal.uid)).set(newGoal);
    res.send("Success")
});

router.post("/friend", (req, res) => {
    db.collection('users').doc(String(req.body.uid)).update({
        friends: FieldValue.arrayUnion(req.body.friendId)
    })
    db.collection('users').doc(String(req.body.friendId)).update({
        friends: FieldValue.arrayUnion(req.body.uid)
    })
})

router.delete("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        users = users.filter(user => user.id !== parseInt(req.params.id));
        res.json({
            msg: "User Deleted",
            users
        });
    } else {
        res.sendStatus(400);
    }
});

router.delete("/goal/:id", (req, res) => {
    //TODO
    db.collection('goals').doc(req.body.uid).delete()
    .then(() => {
        console.log("deleted goal")
        db.collection('users').doc(req.body.userId).update({
            goal: FieldValue.arrayRemove()
        })
    }).catch((error) => {
        console.log(error);
    })
})

module.exports = router;