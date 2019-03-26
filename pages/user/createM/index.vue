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
      console.log('data', createData);
      axios.post('https://nuxty-fbf26.firebaseio.com/movies.json',createData).then(res => console.log(res)).catch(err => console.log(err))
  }
  }
}
</script>
