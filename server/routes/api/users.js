const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../TestUsers");

router.get("/", (req, res) => {
    res.json(users);
});

router.get("/:id", (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
})