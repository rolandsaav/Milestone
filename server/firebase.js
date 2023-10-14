const firestore = require("@google-cloud/firestore")

const db = new firestore.Firestore({
  projectId: 'milestone-401923 ',
  keyFilename: "service-key.json",
});

module.exports = db;