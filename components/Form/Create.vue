<template>
  <section>
    <form @submit.prevent="onSave">

      <b-field
        horizontal
        label="Movie Name"
        :type="check"
        :message="err"
      >
        <b-input
          v-model="createData.mName"
          name="subject"
          expanded
        ></b-input>
      </b-field>

      <b-field
        horizontal
        label="From"
      >
        <b-input
          v-model="createData.postBy"
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
    <input v-model="createData.type" id="Adventure" type="radio" value="Adventure">
    Adventure
  </label>
  <label class="radio">
    <input v-model="createData.type" id="Action" type="radio" value="Action" checked>
    Action
  </label>
   <label class="radio">
    <input v-model="createData.type" id="Drama" type="radio" value="Drama" checked>
    Drama
  </label>
   <label class="radio">
    <input type="radio" id="Science Fiction" v-model="createData.type"  value="Science Fiction" checked>
    Science Fiction
  </label>
</div>
<vue-stars
name="demo"
active-color="#1749ff"
inactive-color="#00ddae"
shadow-color="#e9ff00"
hover-color="#4435dd"
:max="5"
:value="4"
:readonly="false"
char=""
inactive-char=""
:class="fa"
/>
      </b-field>

      <b-field
        horizontal
        label="Overview"
      >
        <b-input
          v-model="createData.Overview"
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
export default {
  data() {
    return {
      createData: {
        mName: '',
        postBy: '',
        release_data: '',
        type: '',
        Overview: '',
      },
        err: ''
    }
  },
  methods: {
    onSave() {
      console.log(this.createData);
      this.$emit('sumiter',this.createData);
    }
  }
}
</script>
