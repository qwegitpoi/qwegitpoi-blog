// Firebase SDK 配置

const firebaseConfig = {

apiKey:
"AIzaSyA-8LCfJCnWFKuOZght5GYX-SATKw0goXk",

authDomain:
"qwegitpoi-blog.firebaseapp.com",

projectId:
"qwegitpoi-blog",

storageBucket:
"qwegitpoi-blog.firebasestorage.app",

messagingSenderId:
"313324557146",

appId:
"1:313324557146:web:4a93868894c9329006d963"

};


// 初始化 Firebase

firebase.initializeApp(firebaseConfig);


// Firestore

const db =
firebase.firestore();


// 登录

const auth =
firebase.auth();