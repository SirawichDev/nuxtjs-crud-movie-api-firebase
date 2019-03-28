<template>
<section class="section">
  <h1>Movie List</h1>
  <no-ssr placeholder="Loading">

<tables/>
  </no-ssr>
</section>
</template>

<script>
import Tables from '~/components/Table.vue'

export default {
components:{
  Tables
  },

}
</script>

<style scopped>
h1{
  font-weight: bold;
  font-size: 20px;
  text-align: center !important;
}
</style>
