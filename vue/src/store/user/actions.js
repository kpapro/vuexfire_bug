import { firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const getCurrentUser = firestoreAction(async ({ bindFirestoreRef }, id) => {
  debugger
  await bindFirestoreRef('currentUser', firebase.firestore().collection('users').doc(id))
})
