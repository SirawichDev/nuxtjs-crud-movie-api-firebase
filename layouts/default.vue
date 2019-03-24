<template>
  <div>
<nav-bar/>
    <nuxt/>
        <footers/>
  </div>
</template>

<script>
import NavBar from '@/components/navBar'
import Footers from '@/components/footer'
export default {
  components:{
    NavBar,
    Footers
  }
}
</script>
