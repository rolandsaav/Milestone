const express = require("express");
const router = express.Router();
const db = require("../../firebase").db;

router.get("/:query", (req, res) => {
    const usersRef = db.collection('users')
    const queryRef = usersRef.where("nameIndex", "array-contains", req.params.query).get()
        .then((matches) => {
            if (matches.empty) {
                console.log("No Matches");
                return res.sendStatus(400);
            }

            return res.send(matches.docs.map(doc => doc.data()));
        })
});

module.exports = router;