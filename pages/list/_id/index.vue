<template>
  <section>
    <div class="columns is-mobile is-desktop">
      <!-- <div class="column is-half is-offset-one-fifth"> -->
      <div
        class="card"
        v-for="movie in data"
        :key="movie.id"
      >
        <div class="card-image">
          <a
            @click="$router.go(-1)"
            class="button back is-danger is-outlined"
          > &#x2190; Back</a>
          <figure class="image is-4by3">
            <img
              :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
              alt="Placeholder image"
            >
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                >
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{movie.title}}</p>
              <b-taglist class="subtitle is-6">
                <b-tag
                class="tager"
                  v-for="type in movie.genres"
                  :key="type.id"
                  :type="typer(type.name)"
                >{{type.name}}</b-tag>
              </b-taglist>
            </div>
          </div>

          <div class="content">
            {{movie.overview}} <a>@{{movie.title}}</a>.
            <a href="#">#{{movie.tagline}}</a>
            <br>
            <time datetime="2016-1-1">Release at: {{movie.release_date.replace(/-/g,'/')}}</time>
          </div>
        </div>
      </div>
      </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  validate(data) {
    console.log('validate', data)
    return /^\d+$/.test(data.params.id)
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    async getMovie() {
      const param = ['api_key=45802feae9d98fc53bf0b8c6519d6230']
      await this.$axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?${param}`
        )
        .then(({ data }) => {
          this.data = []
          this.data.push(data)
          console.log(data)
        })
        .catch(err => {
          console.error(err)
        })
    },
    typer(tmovie) {
      if (tmovie === 'Action') {
        return 'is-danger'
      } else if (tmovie === 'Science Fiction') {
        return 'is-info'
      } else if (tmovie === 'Thriller') {
        return 'is-warning'
      } else if (tmovie === 'Adventure') {
        return 'is-success'
      } else if (tmovie === 'Drama') {
        return 'is-dark'
      } else if (tmovie === 'Crime') {
        return 'is-purple'
      }
    }
  },
  // goBack(){
  //    this.$router.go(-1)
  // },
  created() {
    this.getMovie()
  }
}
</script>

<style scoped>
img {
  width: 300px;
}
time {
  font-weight: bold !important;
}
.tager{
  font-weight: bold !important;
}
.button {
  margin-top: 20px;
  margin-left: 20px;
  color: white !important;
  z-index: 99 !important;
  position: absolute !important;
}
</style>
