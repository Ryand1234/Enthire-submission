<template>
	<div class="is-family-sans-serif">
		<div class="container">
			<div class="title has-text-centered is-align-items-center has-text-link">
				Social Login
			</div>
			<div class="has-text-grey-dark">
			Welcome, {{profile.name}}. You have successfully logged in to Social site using Google Authentication.<br>
			Your email id is {{profile.email}}. JWT authentication is used to help in further authentication. JWT Token is generated from provider id, email, and name.<br>
			This Token will expire in {{profile.exp}}. Thank you logging in.
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Home',
		data(){
			return{
				profile: null
			}
		},
		methods: {
			init: async function(){
				const token = localStorage.getItem('token');
				const options = {
					method: 'GET',
					headers: {
					Accept: 'application/json',
					'Access-Control-Allow-Origin': 'http://localhost:8081',
					authorization: `${token}`
					},
				}
				const URI = `http://localhost:3000/home`;
				await axios(URI, options).then(async (res) =>{
					console.log("H: ", res)
					this.profile = res.data.user;
				})
				.catch(err =>{
					console.log("E: ",err)
					})
				}
			},
			beforeMount(){
				this.init()
			},
	}
</script>