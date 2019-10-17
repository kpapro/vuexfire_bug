<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  async mounted () {
    // debugger
    await this.getUsers()
    const usersFromState = this.$store.state.users.usersCollection
    console.log(usersFromState.length)
  },
  methods: {
    ...mapActions('users', ['getUsers'])
  }
}
</script>
