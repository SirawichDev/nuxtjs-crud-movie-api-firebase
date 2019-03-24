<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">

    </a>

    <a role="button" class="navbar-burger burger " aria-label="menu"  data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div  class="navbar-menu">
    <div class="navbar-start">
      <nuxt-link class="navbar-item"  no-prefetch to="/list">
      <a >
        Movie List
      </a>
      </nuxt-link>

      <a class="navbar-item">
        Create
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="$router.push('/login')">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
 methods:{
    checkit() {
      this.isActive = !this.isActive
    },
    goto(){
      console.log('xx');
      this.$router.push('/list')
    }
 }

}
</script>

<style scoped>
</style>
