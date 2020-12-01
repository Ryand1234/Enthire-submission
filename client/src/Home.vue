<template>
  <div>
	<a href="http://localhost:8081">
		<img alt="Vue logo" src="./assets/logo.png">
	</a>
    <Home />
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Home,
    Footer
  }
}
</script>
