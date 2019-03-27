<template>
  <section class="section">
    <headx></headx>
    <edit-form
      @sumiter="onSubmit"
    />
  </section>
</template>

<script>
import axios from 'axios'
import EditForm from '~/components/Form/Edit'
import Headx from '@/components/Title/title'
export default {

  components: {
    EditForm,
    Headx
  },
  asyncData(context) {
    console.log(context)

    return axios
      .get(
        `https://nuxty-fbf26.firebaseio.com/movies/${context.params.id}.json`
      )
      .then(res => {
             const newEditMovie = {
        ...res.data,
        updatedDate: new Date()
      }
        context.store.commit('getMovie',{...newEditMovie,id: context.params.id});
        return {
          uMovies: res.data
        }
      })
      .catch(err => console.log(err))
  },
  methods: {
    onSubmit(editData) {

      this.$store
        .dispatch('editMovie',  editData)
    }
  }
}
</script>
