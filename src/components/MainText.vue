<template>
  <section class="main-text">
      <div class="row">
        <div class="col col-left">
          <h1 v-text="headline" />
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
      headline: 'Konsultacje z lekarzem',
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum ex molestiae minima porro neque blanditiis ratione fuga voluptate vitae quo magni repellendus atque, labore distinctio eius, deserunt esse debitis.</p>'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
