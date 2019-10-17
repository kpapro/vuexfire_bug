import { firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const getUsers = firestoreAction(async ({ bindFirestoreRef, state }) => {
  // debugger
  await bindFirestoreRef('availableMembers', firebase.firestore().collection('users'))
  console.log(state.availableMembers.length)
  debugger
})
