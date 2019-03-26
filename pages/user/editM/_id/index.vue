<template>
  <section class="section">

    <edit-form @sumiter="onSubmit" />
  </section>
</template>

<script>
import axios from 'axios'

import EditForm from '~/components/Form/Create'
export default {
  data() {
    return {
      data: {}
    }
  },
  components: {
    EditForm
  },
  asyncData(context) {
    return axios
      .get(`https://nuxty-fbf26.firebaseio.com/movies/${context.params.id}.json`)
      .then(res => console.log('asdas',res.data))
      .catch(err => console.log(err))
  },
  created(){
console.log(this.data);
  },
  methods: {
    onSubmit(createData) {
      this.$store
        .dispatch('createMovie', createData)
        .then(() => this.$router.push('/user/movieslist'))
    }
  }
}
</script>
