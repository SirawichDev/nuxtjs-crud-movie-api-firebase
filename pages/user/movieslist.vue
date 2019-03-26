<template>
  <div>
    <h1>your Movies</h1>
    <movie-list :uMovie="uMovies"/>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from "vuex";
import MovieList from '@/components/user/UserTable'
export default {
  components:{
    MovieList
  },
  data(){
    return{

    }
  },
computed:{
  ...mapGetters(['uMovies'])
},

}
</script>
