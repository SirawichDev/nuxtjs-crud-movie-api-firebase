<template>
  <div>
    <titles
      title="Your Movies"
      sub="Miewmiew"
    ></titles>
<no-ssr  placeholder="Loading...">
    <movie-list

      @delete="Delete"
      :uMovie="uMovies"
    />
  </no-ssr>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import MovieList from '@/components/user/UserTable'
import Titles from '@/components/Title/title'
export default {
  components: {
    MovieList,
    Titles
  },
  data() {
    return {}
  },
  methods: {
    Delete(id) {
      console.log(id)
      this.$store.dispatch('deleteMovie', id)
    }
  },
  computed: {
    ...mapGetters(['uMovies', 'isloaded'])
  }
}
</script>
