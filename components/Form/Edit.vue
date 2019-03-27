<template>
  <section>
    <h1>{{movie.id}}</h1>
    <form @submit.prevent="onSave">

      <b-field
        horizontal
        label="Movie Name"
      >
        <b-input
          v-model="movie.mName"
          name="subject"
          expanded
        ></b-input>
      </b-field>

      <b-field
        horizontal
        label="From"
      >
        <b-input
          v-model="movie.postBy"
          name="name"
          placeholder="Name"
          expanded
        ></b-input>
      </b-field>

      <b-field
        horizontal
        label="Type"
      >

        <div class="control">
          <label class="radio">
            <input
              v-model="movie.type"
              id="Adventure"
              type="radio"
              value="Adventure"
            >
            Adventure
          </label>
          <label class="radio">
            <input
              v-model="movie.type"
              id="Action"
              type="radio"
              value="Action"
              checked
            >
            Action
          </label>
          <label class="radio">
            <input
              v-model="movie.type"
              id="Drama"
              type="radio"
              value="Drama"
              checked
            >
            Drama
          </label>
          <label class="radio">
            <input
              type="radio"
              id="Science Fiction"
              v-model="movie.type"
              value="Science Fiction"
              checked
            >
            Science Fiction
          </label>
        </div>

      </b-field>

      <b-field
        horizontal
        label="Overview"
      >
        <b-input
          v-model="movie.Overview"
          type="textarea"
        ></b-input>
      </b-field>

      <b-field horizontal>
        <!-- Label left empty for spacing -->
        <p class="control">
          <button
            type="submit"
            class="button is-primary"
          >
            Create Movie
          </button>
        </p>
      </b-field>

    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    onSave() {
      console.log(this.ss)
      this.$emit('sumiter', this.movie)
    }
  },
  computed: {
    ...mapGetters(['movie'])
  },
  created() {
    console.log('xx', this.movie)
  }
}
</script>
