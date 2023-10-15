const db = require("../../firebase").db;
const express = require("express");
const router = express.Router();
let users = require("../../TestUsers");

router.get("/", (req, res) => {
    res.json(users);
});

router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
        res.sendStatus(400);
    }
});

router.post("/", (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        uid: req.body.uid,
        username: req.body.username,
        goals: [],
        friends: []
    };

    if (newUser.username === undefined) {
        return res.sendStatus(400);
    }
    const dbRef = db.collection('users').doc(String(newUser.uid)).set(newUser);
});

router.put("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found) {
        const updateUser = req.body;
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name;
                user.email = updateUser.email ? updateUser.email : user.email;
                res.json({msg: "User Updated", user});
            }
        });
    } else {
        res.sendStatus(400);
    }
});

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

module.exports = router;