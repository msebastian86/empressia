<template>
  <section class="newsletter-block">
      <div class="row">
        <h2 v-text="headline" />

        <a href="#" class="button">Zarezerwuj termin już teraz</a>

        <ul class="text-list">
          <li v-for="(text, index) in textList" :key="index">
            {{ text }}
          </li>
        </ul>
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

</style>
