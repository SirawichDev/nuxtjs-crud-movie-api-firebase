<template>

    <div class="tile is-ancestor">
  <div class="tile is-vertical is-20">
    <div class="tile">

    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">{{title}}</p>
        <p class="subtitle">{{sub}}</p>
        <div class="content">
        </div>
      </article>
    </div>
  </div>

</div>

</template>

<script>
export default {
  props:['title','sub']
}
</script>

<style scoped>

</style>
