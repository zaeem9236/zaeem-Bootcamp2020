importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

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
  firebase.messaging();

  self.addEventListener('push', function(event) {
    console.log('Received a push message',event);
});

