const functions = require('firebase-functions');
const admin = require('firebase-admin');
const path = require('path');

//let serviceAccount = require("../keys/anonibus-a2d40-firebase-adminsdk-e7uei-eb1107af88.json");

//admin.initializeApp({
//  credential: admin.credential.cert(serviceAccount),
//  databaseURL: "https://anonibus-a2d40.firebaseio.com"
//});

admin.initializeApp();

let db = admin.firestore();

exports.enviarMensagem = functions.https
 .onRequest((request, response) =>{
   let queryRef = db.collection('chats').doc('sala_01')
      .collection('mensagens').doc();
   
   queryRef.set({
    mensagem:request.body.mensagem,
    usuario: request.body.usuario,
    avatar: request.body.avatar
  }).then(function () {
     response.json({
       "ok": true
     })
  })
    .catch(function () {
      response.json({
      "error" :true
      })

     })
})

exports.updateFirestore = functions.storage.object().onFinalize(async (object)=>{
  const filePath = object.name;
  const fileName = path.basename(filePath);

  await db.collection('imagens').doc(fileName).set(object);

  console.log(fileName, object)

  return

})