<template>
  <blockquote class="testimonial">
      <div class="testimonial__top">
        <div class="testimonial__tank">
          {{ testimonial.rank }}
        </div>
        <div class="testimonial__date">
          {{ testimonial.date | dateFormat('DD MMMM YYYY') }}
        </div>
      </div>

      <p v-text="testimonial.text" class="testimonial__text"/>

      <cite class="testimonial__cite">
        <img :src="testimonial.avatar" alt="avatar alt">
        <p v-text="testimonial.name" />
      </cite>
  </blockquote>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    testimonial: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
