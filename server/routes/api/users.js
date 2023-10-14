const express = require("express");
const router = express.Router();
const uuid = require("uuid");
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
        uid: uuid.v4(),
        username: req.body.username,
        goals: [],
        friends: []
    };

    console.log(req.body);
    console.log(newUser.username);

    if (newUser.username === undefined) {
        return res.sendStatus(400);
    }

    users.push(newUser);
    res.json(users);
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