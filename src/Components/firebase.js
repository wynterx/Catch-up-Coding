import * as firebase from 'firebase';

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyCw7jFwDy6zku6TNL9dvVxjQ-hViH_Ccq0',
  authDomain: 'test-c53d2.firebaseapp.com',
  databaseURL: 'https://test-c53d2.firebaseio.com',
  projectId: 'test-c53d2',
  storageBucket: 'test-c53d2.appspot.com',
  messagingSenderId: '588996854149',
};

export default firebase.initializeApp(config);
