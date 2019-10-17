<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  async mounted () {
    const currentUser = firebase.auth().currentUser
    console.log(currentUser)
    await this.getUsers()
    // const usersFromState = this.$store.state.members.usersCollection
    // console.log(usersFromState.length)
  },
  methods: {
    ...mapActions('users', ['getCurrentUser']),
    ...mapActions('members', ['getUsers'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
