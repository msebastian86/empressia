<template>
  <section class="main-text">
      <div class="grid-container">
        <div class="row-lg-2">
          <div class="col col-left">
            <h1 v-text="headline" class="[ font-700 text-dark ]" />
            <div v-html="text" class="text" />

            <a href="#" class="button button--primary">Zarezerwuj termin <i class="button__icon button__icon-radio"></i></a>
            <a href="#" class="button button--ghost">Jak to działa?</a>
          </div>
          <div class="col col-right">
            <img src="../assets/images/home/illustration-hero.png" alt="Alt tag">
          </div>
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
.text {
  margin-bottom: 30px;
}

@include breakpoint-lg {
  .text {
    margin-bottom: 56px;
  }
}
</style>
