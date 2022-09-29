// Import the functions you need from the SDKs you nee
const firebaseConfig = {
  apiKey: "AIzaSyCE-ylQ53TXf5xVAxdsp1CCiQXFGlOIt1I",
  authDomain: "portfolio-6dfe1.firebaseapp.com",
  projectId: "portfolio-6dfe1",
  storageBucket: "portfolio-6dfe1.appspot.com",
  messagingSenderId: "202462958411",
  appId: "1:202462958411:web:b711a02e8c953db5f5cece",
  measurementId: "G-XQV362C1SG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();




function getVisitors() {
  db.collection("Visits").doc("VisitsCount").get().then(docRef => {
    
    firebase.firestore().collection(`Visits`).doc("VisitsCount").update({
      visitors: docRef.data().visitors+1
    })
    document.getElementById('result').innerHTML = "visitors count: "+docRef.data().visitors;
  })
 
}