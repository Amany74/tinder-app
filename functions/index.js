

const functions = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// import admin lib
const admin = require("firebase-admin");

// Initialize admin lib
admin.initializeApp();

// From admin invoke firestore
const firestore = admin.firestore();
exports.get = functions(async (request, response) => {
  response.send("Hello from get!");
  // excute insertion in users collection
  await firestore.collection("users").add({name: "jessy"});
});
exports.post = functions((request, response) => {
  logger.info("Hello I am post !", {structuredData: true});
  response.send("Hello from post!");
});

