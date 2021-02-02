<template>
  <section class="newsletter-block">
      <div class="grid-container">
        <div class="[ newsletter-body ] [ bg-blue text-white ]">
          <h2 v-text="headline" />

          <a href="#" class="button button--invert">Zarezerwuj termin już teraz</a>

          <ul class="[ text-list ] [ d-none d-lg-block ]">
            <li v-for="(text, index) in textList" :key="index">
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
  </section>
</template>
<script>

export default {
  name: 'NewsletterBlock',
  data() {
    return {
      headline: 'Zapisz się na wizytę on-line',
      textList: [
        'konsultacja bez zakładania konta',
        'pełna dyskrecja',
        'kontakt przez Skype lub WhatsApp',
        'rezerwacja terminu on-line',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.newsletter-body {
  padding: 40px;
  border-radius: 8px;
  box-shadow: 17px 24px 30px 0 rgba(39,33,99,0.12);
}

@include breakpoint-lg {
  .newsletter-body {
    padding: 80px 50% 80px 80px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    box-shadow: 24px 32px 56px 0 rgba(39,33,99,0.12);


    .text-list {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%);

      > li{
        margin: 16px 0;
      }
    }

    &:before, &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      left: 50%;
      z-index: 2;
      pointer-events: none;
    }

    &:before {
      top: 0;
      background: linear-gradient(map-get($colors, blue), transparent);
    }

    &:after {
      bottom: 0;
      background: linear-gradient(transparent, map-get($colors, blue));

    }
  }
}
</style>
