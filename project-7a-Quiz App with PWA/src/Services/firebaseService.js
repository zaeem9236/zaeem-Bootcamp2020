import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5AhWv7uBBBd8W7yIppmYf5MOCl0hAjVg",
    authDomain: "project-7a-quiz-app.firebaseapp.com",
    databaseURL: "https://project-7a-quiz-app.firebaseio.com",
    projectId: "project-7a-quiz-app",
    storageBucket: "project-7a-quiz-app.appspot.com",
    messagingSenderId: "834818304725",
    appId: "1:834818304725:web:a49dffc95a568f2d2f905c",
    measurementId: "G-JFT3VMKT4L"
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