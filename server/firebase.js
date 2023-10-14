const firestore = require("@google-cloud/firestore")

const db = new firestore.Firestore({
  projectId: 'milestone-401923 ',
  keyFilename: "service-key.json",
});

const goalRef = db.collection("goals")

module.exports = {
  goalRef,
  db
}