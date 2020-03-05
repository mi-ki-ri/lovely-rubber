const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const axios = require("axios");

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.rubber = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  //// Push the new message into the Realtime Database using the Firebase Admin SDK.
  //const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  //res.redirect(303, snapshot.ref.toString());

  let accestokenURL = "https://api.ce-cotoha.com/v1/oauth/accesstokens";

  axios
    .post(
      accestokenURL,
      {
        grantType: "client_credentials",
        clientId: "rn3Js16ipBG3DXTWfQT4DWtWnhdqNVuX",
        clientSecret: "7dENECGdcRoilIGY"
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(result => {
      let accesstoken = result.data.access_token;

      let apiURL = "https://api.ce-cotoha.com/api/dev/nlp/beta/summary";

      axios
        .post(
          apiURL,
          {
            document: original,
            sent_len: 1
          },
          {
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
              Authorization: "Bearer " + accesstoken
            }
          }
        )
        .then(summary => {
          res.send(summary.data.result + "だね");
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });

  //res.send(text);
});
