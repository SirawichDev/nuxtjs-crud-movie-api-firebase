import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      movies: []
    },
    mutations: {
      setMovies(state, movies) {
        state.movies = movies
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
            vctx.commit('setMovies', dArray)
          })
          .catch(err => ctx.error(e))
      },
      setMovie(ctx, movie) {
        console.log('sd')
        ctx.commit('setMovies', movie)
      }
    },
    getters: {
      loadMovies: state => {
        return state.movies
      }
    }
  })
}

export default createStore
