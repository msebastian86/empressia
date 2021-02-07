<template>
  <section class="faq-block">
    <div class="grid-container">
      <div class="row-lg-2">
        <div class="[ col-left ] [ text-center text-lg-left ]">
          <h3 v-text="headline" class="[ text-dark ]" />

          <a href="#" class="button button--ghost">Sprawdź całe FAQ</a>

          <v-lazy-image :src="require('@/assets/images/home/illustration-faq.png')" alt="Alt tag" class="[ block-image ] [ d-none d-lg-block ]" />
        </div>
        <div class="[ col-right ]">
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
  name: 'FaqBlock',
  components: {
    Accordeon
  },
  data() {
    return {
      headline: 'Najczęściej zadawane pytania',
      accordeons: [
        { title: 'Jakie są korzyści teleporady lekarskiej na naszym serwisie?', text: '<p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit</strong></p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis incidunt voluptatem temporibus numquam odit, delectus maxime consequatur harum cum?</p>'},
        { title: 'Czy jest możliwość odwołania wcześniej zarezerwowanej wizyty?', text: '<p>W przypadkach losowych gdy nie mogą Państwo zrealizować wizyty w umówionym terminie istnieje możliwość zmiany daty wizyty bądź jej odwołania do 24h przed planowym terminem. Dokonają Państwo tego za pomocą linka przesłanego w potwierdzeniu rezerwacji na podany przez Państwa adres e-mail.</p>'},
        { title: 'Co się dzieje w przypadku problemów technicznych?', text: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis incidunt voluptatem temporibus numquam odit, delectus maxime consequatur harum cum?</p>'},
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.faq-block {
    padding: 40px 0 40px 0;
}

.col-left {
  padding-bottom: 40px;
}

@include breakpoint-lg {
  .faq-block {
    padding: 136px 0 128px 0;
    overflow-x: hidden;
  }

  .col-left {
    padding-bottom: 0;
    padding-right: 32px;

    .block-image {
      max-width: 100%;
      max-width: 657px;
      margin-left: -29.5%;
      margin-top: 25px;
    }

    h4 {
      max-width: 440px;
    }
  }
}
</style>
