<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <Login />
    <Footer />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Login,
    Footer
  }
}
</script>
