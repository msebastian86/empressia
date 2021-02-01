<template>
  <section class="teleporada">
      <div class="grid-container">
        <h2 class="text-center text-lg-right" v-text="headline" />
        <div v-html="text" />

        <img src="http://placekitten.com/200/300" alt="Alt tag">
      </div>
  </section>
</template>

<script>
export default {
  name: 'MainText',
  data() {
    return {
      headline: 'Skorzystaj z najszybciej rozwijającej się gałęzi medycyny',
      text: '<p>Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy.</p>'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
