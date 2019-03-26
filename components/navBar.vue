<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">

    </a>

    <a role="button" @click="Onactive"  class="navbar-burger burger" :class="Isactive(active)" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="Isactive(active)">
    <div class="navbar-start">
      <nuxt-link class="navbar-item" to="/">
      <a >
        Home
      </a>
      </nuxt-link>
<nuxt-link class="navbar-item" to="/list">

      <a>
      Global Movies List
      </a>
</nuxt-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          User
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Profile
          </a>
          <nuxt-link to="/user/movieslist">
          <a class="navbar-item">
            Your Movies
          </a>
          </nuxt-link>
        <nuxt-link class="navbar-item" to="/user/createM/">
          <a >
                Create Your Movies
          </a>
        </nuxt-link>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <nuxt-link class="button is-light" to="/user/login">
              <a >
            Log in
          </a></nuxt-link>

        </div>
      </div>
    </div>
  </div>
</nav>

</template>


<script>
export default {
  data(){
    return{
      active: false
    }
  },
 methods:{
 Onactive(){
   console.log('xx');
    this.active = !this.active
  },
  Isactive(ac){
if(ac){
  return 'is-active'
} else{
  return ''
}
  }
 }
}
</script>
