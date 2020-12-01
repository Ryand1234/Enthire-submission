<template>
  <div class="is-family-sans-serif">
    <div class="container">
      <div class="title has-text-centered is-align-items-center has-text-link">
        Social Login
      </div>
      <div class="has-text-grey-dark">
        Social login is a form of single sign-on using existing information from a social networking service such as Facebook, Twitter or Google, to sign into a third party website instead of creating a new login account specifically for that website. It is designed to simplify logins for end users as well as provide more and more reliable demographic information to web developers
      </div>
      <button>
        <a class="btn btn-outline-dark" href="http://localhost:3000/auth/google" role="button" style="text-transform:none">
        <img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
        Login with Google
      </a>
    </button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
