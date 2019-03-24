<template>
  <div>
<nav-bar/>
    <nuxt/>
    <footer/>
  </div>
</template>

<script>
import NavBar from '@/components/navBar';
import Footer from './footer'
export default {
  components:{
    NavBar,
    Footer
  }
}
</script>
