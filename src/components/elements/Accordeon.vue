<template>
  <section class="accordeon">
      <a href="#" v-text="title" class="accordeon__title" />
      <div href="#" v-html="text" class="accordeon__content" />
  </section>
</template>

<script>
export default {
  name: 'Accordeon',
  props: {
      title: String,
      text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
