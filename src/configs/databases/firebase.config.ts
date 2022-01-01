// import * as dotenv from 'dotenv';
// import 'dotenv/config';
// import * as firebase from 'firebase-admin';

// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// if (!firebase.apps?.length) {
//   const firebase_params = {
//     type: process.env.FIREBASE_TYPE,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     clientId: process.env.FIREBASE_CLIENT_ID,
//     authUri: process.env.FIREBASE_AUTH_URI,
//     tokenUri: process.env.FIREBASE_TOKEN_URI,
//     authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
//     clientC509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
//   };

//   firebase.initializeApp({
//     credential: firebase.credential.cert(firebase_params),
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   });
// }

// export const db = firebase.firestore();
// export const fcm = firebase.messaging();
// export const fb = firebase.database();
