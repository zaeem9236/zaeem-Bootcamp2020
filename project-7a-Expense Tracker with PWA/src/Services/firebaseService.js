import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQwKceN0TZ6zdYnU-lfQxa9bJ6fHMd-m8",
    authDomain: "project-7a-expense-tracker.firebaseapp.com",
    databaseURL: "https://project-7a-expense-tracker.firebaseio.com",
    projectId: "project-7a-expense-tracker",
    storageBucket: "project-7a-expense-tracker.appspot.com",
    messagingSenderId: "748418223638",
    appId: "1:748418223638:web:a703748c9ec49c5c726f37"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if (permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>",currentToken);
                }else{
                    console.log("No instance ID token available. Request permission to generate one.");
                }
            }).catch((err) => {
                console.log("An error occurred while retrieving token.",err);
            });
        }
    })
}