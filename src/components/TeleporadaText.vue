<template>
  <section class="teleporada">
      <div class="row">
        <div class="col col-left">
          <h2 v-text="headline" />
          <div v-html="text" />
        </div>
        <div class="col col-right">
          <img src="http://placekitten.com/200/300" alt="Alt tag">
        </div>
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
