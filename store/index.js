import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      movies: [],
      uMovies: []
    },
    mutations: {
      setMovies(state, movies) {
        state.movies = movies
      },
      setUMovies(state, movies) {
        state.uMovies = movies
      }
    },
    actions: {
      nuxtServerInit(vctx, ctx) {
        if (!process.client) {
          console.log(ctx.req.session)
        }
        return axios
          .get('https://nuxty-fbf26.firebaseio.com/movies.json')
          .then(res => {
            const dArray = []
            for (const key in res.data) {
              dArray.push({ ...res.data[key], id: key })
            }
            vctx.commit('setUMovies', dArray)
          })
          .catch(err => ctx.error(err))
      },
      setMovie(ctx, movie) {
        console.log('sd')
        ctx.commit('setMovies', movie)
      }
    },
    getters: {
      loadMovies: state => {
        return state.movies
      },
      uMovies: state => state.uMovies
    }
  })
}

export default createStore
