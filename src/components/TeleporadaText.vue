<template>
  <section class="teleporada">
      <div class="grid-container">
        <h2 class="[ headline ] [ text-center text-dark font-700 ]" v-text="headline" />
        <div v-html="text" class="text-center" />

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
.headline {
  margin-bottom: 24px;
}
</style>
