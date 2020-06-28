const functions = require('firebase-functions');

const admin = require('firebase-admin');
const { object } = require('firebase-functions/lib/providers/storage');
const path =  require('path')
//levanta um servidor que vai se comunicar com toda a estrutura firebase
//let serviceAccount = require("../key/anoni-52994-firebase-adminsdk-88c8v-a5d0dce072.json");

//admin.initializeApp({

 //       credential: admin.credential.cert(serviceAccount),
   //     databaseURL: "https://anoni-52994.firebaseio.com"
    
//});
admin.initializeApp();
let db = admin.firestore(); 

exports.enviarMsg = functions.https
.onRequest((request, response)=>{
  let queryRef=db.collection('chat').doc('bate_papo')
       .collection('msg').doc();
       
queryRef.set({
    msg: request.body.msg,
    usuario: request.body.usuario,
    avatar:request.body.avatar,
}).then(function (){
    response.json({
        "ok" : true
    })
})       
  .catch(function (){
      response.json({
          "error" : true
      })
  })


    })


    exports.imageUpdateFirestore = functions.storage.object().onFinalize(async (object) =>{
        const filePatch = object.name;
        const fileName = path.basename(filePatch);

        await db.collection('imagens').doc(fileName).set(object);

        console.log(fileName, object);

        return

    })