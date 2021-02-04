<template>
  <section class="main-text-block">
      <div class="grid-container">
        <div class="row-main">
          <div class="col col-left">
            <h1 v-text="headline" class="[ font-700 text-dark ]" />
            <div v-html="text" class="text" />

            <a href="#" class="button button--primary button--has-icon">Zarezerwuj termin <span class="button__icon button__icon-circle"><BtnIcoSvg/></span></a>
            <a href="#" class="button button--ghost">Jak to działa?</a>
          </div>
          <div class="col col-right">
            <img src="../assets/images/home/illustration-hero.png" alt="Alt tag" class="block-image">
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import BtnIcoSvg from '../assets/images/icons/ui/btn-ico-circle.svg';

export default {
  name: 'MainTextBlock',
  data() {
    return {
      headline: 'Konsultacje z lekarzem',
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum ex molestiae minima porro neque blanditiis ratione fuga voluptate vitae quo magni repellendus atque, labore distinctio eius, deserunt esse debitis.</p>'
    }
  },
  components: {
    BtnIcoSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
  margin-bottom: 30px;
}

@include breakpoint-lg {
  .main-text-block {
    padding: 101px 0 160px;
  }

  .text {
    margin-bottom: 56px;
  }

  .row-main {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;

    .col-left {
      flex: 0 0 (5/12)*100%;
    }

    .col-right {
      flex: 0 0 (7/12)*100%;
      position: relative;

      .block-image {
        position: absolute;
        width: 100%;
        max-width: 696px;
        right: -11.5%;
      }
    }
  }
}

@include breakpoint-lg {
  .main-text-block {
    overflow-x: hidden;
  }
}
</style>
