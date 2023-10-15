const express = require("express");
const router = express.Router();
const db = require("../../firebase").db;

router.get("/:query", (req, res) => {
    const usersRef = db.collection('users')
    const queryRef = usersRef.where("nameIndex", "array-contains", req.params.query).get()
        .then((matches) => {
            if (matches.empty) {
                console.log("No Matches");
                return;
            }

            matches.forEach(user => {
                console.log(user.data().username);
            })
        })
});

module.exports = router;