import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDClCQtDkC_ZlR7p-uQ8nG18aUlZ-z8LYo',
  authDomain: 'react-native-firebase-9d435.firebaseapp.com',
  databaseURL: 'https://react-native-firebase-9d435.firebaseio.com',
  projectId: 'react-native-firebase-9d435',
  storageBucket: 'react-native-firebase-9d435.appspot.com',
  messagingSenderId: '408813806483',
  appId: '1:408813806483:android:3a5c6f72b6203bf89e7e66',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
