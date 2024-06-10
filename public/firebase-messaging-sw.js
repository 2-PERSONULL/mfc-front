// Import the functions you need from the SDKs you need
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAW2MFJvZwDuuXvFIn7H8-eK6ifJTCqAV0',
  authDomain: 'mfc-test-11f45.firebaseapp.com',
  projectId: 'mfc-test-11f45',
  storageBucket: 'mfc-test-11f45.appspot.com',
  messagingSenderId: '882716100458',
  appId: '1:882716100458:web:9357ba93a4199638c48713',
  measurementId: 'G-L63G43HW8C',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/images/mfc-logo.png',
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})
