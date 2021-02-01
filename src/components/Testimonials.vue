<template>
  <section class="testimonials">
      <h2 v-text="headline" />

      <ul class="testimonial-list">
        <li v-for="(testimonial, index) in testimonials" :key="`${index} ${Math.random()}`">
          <Testimonial :testimonial="testimonial" />
        </li>
      </ul>
  </section>
</template>

<script>
import Testimonial from './elements/Testimonial'

export default {
  name: 'MainText',
  components: {
    Testimonial
  },
  data() {
    return {
      headline: 'Co mówią zadowoleni klienci',
      testimonials: [
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
