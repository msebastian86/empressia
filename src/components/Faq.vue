<template>
  <section class="teleporada">
    <div class="grid-container">

      <div class="row-lg-2">
        <div class="col col-left">
          <h2 v-text="headline" />

          <div>
            <a href="#">Sprawdź całe FAQ</a>
          </div>

          <img src="http://placekitten.com/200/300" alt="Alt tag">
        </div>
        <div class="col col-right">
          <ul class="[ faq-list ] [ reset-list ]">
            <li v-for="(accordeon, index) in accordeons" :key="`${index} ${Math.random()}`">
              <Accordeon :title="accordeon.title" :text="accordeon.text" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Accordeon from './elements/Accordeon'

export default {
  name: 'MainText',
  components: {
    Accordeon
  },
  data() {
    return {
      headline: 'Najczęściej zadawane pytania',
      accordeons: [
        { title: 'Jakie są korzyści teleporady lekarskiej na naszym serwisie?', text: '<p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit</strong></p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis incidunt voluptatem temporibus numquam odit, delectus maxime consequatur harum cum?</p>'},
        { title: 'Jak zrealizuję konsultację?', text: '<p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit</strong></p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis incidunt voluptatem temporibus numquam odit, delectus maxime consequatur harum cum?</p>'},
        { title: 'Co się dzieje w przypadku problemów technicznych?', text: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis incidunt voluptatem temporibus numquam odit, delectus maxime consequatur harum cum?</p>'},
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
