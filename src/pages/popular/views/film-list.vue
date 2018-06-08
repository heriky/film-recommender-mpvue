<template>
  <div>
    <film-card v-for="(item, index) in items" :key="index"/>
  </div>
</template>

<script>
  import FilmCard from './film-card';

  export default {
    name: "film-list",
    components: { FilmCard },
    data() {
      return { items: [1, 2, 3, 4, 5] };
    }
  }
</script>

<style scoped>

</style>
