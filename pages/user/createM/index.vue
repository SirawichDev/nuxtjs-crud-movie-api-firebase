<template>
  <section class="section">

    <create-form @sumiter="onSubmit"/>
  </section>
</template>

<script>
import axios from 'axios'

import CreateForm from '~/components/Form/Create'
export default {
  components:{
    CreateForm
  },
  methods:{

    onSubmit(createData){
    this.$store.dispatch('createMovie',createData).then(()=> this.$router.push('/user/movieslist'))
  }
  },

}
</script>
