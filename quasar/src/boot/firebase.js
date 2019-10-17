import firebase from 'firebase/app'
import 'firebase/auth'

export default async ({ store }) => {
  const config = {
    apiKey: 'AIzaSyCJ752KMIQ4gNCnD5kRyc3Xcbnhfo4hj5o',
    authDomain: 'vuexfire-bug.firebaseapp.com',
    databaseURL: 'https://vuexfire-bug.firebaseio.com',
    projectId: 'vuexfire-bug',
    storageBucket: 'vuexfire-bug.appspot.com',
    messagingSenderId: '866764616081',
    appId: '1:866764616081:web:df0ecc6295a2f1d326ea30'
  }

  firebase.initializeApp(config)

  // debugger
  await store.dispatch('users/getCurrentUser')
  // debugger
}
