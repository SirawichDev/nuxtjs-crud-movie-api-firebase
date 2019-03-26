import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: {
      movies: [],
      uMovies: [],
      loaded: true
    },
    mutations: {
      setMovies(state, movies) {
        state.movies = movies
      },
      setUMovies(state, movies) {
        console.log('u', state.uMovies)
        state.uMovies = movies
      },
      loaded(state, load) {
        console.log('sd', state.loaded)
        state.loaded = load
      },
      createMovies(state, movie) {
        state.uMovies.push(movie)
      }
    },
    actions: {
      async nuxtServerInit(vctx, ctx) {
        if (!process.client) {
          console.log(ctx.req.session)
        }
        vctx.commit('loaded', true)
        return await axios
          .get('https://nuxty-fbf26.firebaseio.com/movies.json')
          .then(res => {
            const dArray = []
            for (const key in res.data) {
              dArray.push({ ...res.data[key], id: key })
            }
            vctx.commit('setUMovies', dArray)
            vctx.commit('loaded', false)
          })
          .catch(err => ctx.error(err))
      },
      setMovie(ctx, movie) {
        console.log('sd')
        ctx.commit('setMovies', movie)
      },
      async createMovie(ctx, createData) {
        const newMovie = {
          ...createData,
          updatedDate: new Date()
        }
        await axios
          .post('https://nuxty-fbf26.firebaseio.com/movies.json', createData)
          .then(res => {
            ctx.commit('createMovies', { ...newMovie, id: res.data.name })
            ctx.commit('loaded', false)
          })
          .catch(err => console.log(err))
      }
    },
    getters: {
      isloaded: state => {
        return state.loaded
      },
      loadMovies: state => {
        return state.movies
      },
      uMovies: state => {
        return state.uMovies
      }
    }
  })
}

export default createStore
