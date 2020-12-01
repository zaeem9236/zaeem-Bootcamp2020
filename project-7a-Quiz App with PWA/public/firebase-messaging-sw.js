importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

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
  firebase.messaging();

  self.addEventListener('push', function(event) {
    console.log('Received a push message',event);
});