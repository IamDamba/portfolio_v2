const firebase = require("../data/firebase");
const firestore = firebase.firestore();
const storage = firebase.storage();
const ref = firestore.collection("projects");
const gsRef = storage.ref().child('cv.pdf');

global.XMLHttpRequest = require("xhr2");

//---------------------------------------| Functions

module.exports.allProjects_get = async (req, res) => {
  let data = [];

  try {
    await ref
      .orderBy("project_id", "asc")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.project_get = async (req, res) => {
  const [id] = req.query.id;
  let data = [];

  try {
    await ref
      .where("project_id", "==", parseInt(id))
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          data = doc.data();
          res.status(200).json(data);
        });
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.cv_get = async (req, res) => {
  try {
    gsRef
      .getDownloadURL()
      .then((url) => {
        res.status(200).send(url);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
