const firestore = require("@google-cloud/firestore")
const key = require("./service-key.json")

const db = new firestore.Firestore({
  projectId: "milestone-401923",
  keyFilename: "./service-key.json",
});

const goalRef = db.collection("goals")

goalRef.get()

module.exports = {
  goalRef,
  db
}