<script>
  //import router from "../router"
  import axios from 'axios'
  export default {
    name: 'Callback',
    methods: {
      auth: async function() {
        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8081'
          }
        }
        const URI = `http://localhost:3000/auth/google/callback${window.location.search}`;
        await axios(URI, options).then(async (res) =>{
          localStorage.setItem('token', res.data.token);
          window.location.href = 'http://localhost:8081/home'
        })
        .catch(err =>{
          console.log("E: ", err)
        })
      }
    },
    beforeMount(){
      this.auth()
   },
  }
</script>