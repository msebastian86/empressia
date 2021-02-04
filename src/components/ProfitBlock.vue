<template>
  <section class="profit-block" ref="profit" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.65,
        },
      }">
      <div class="grid-container">
        <h2 class="[ headline ] [ text-center text-dark font-700 ] [ m-a ]" v-text="headline" />
        <div v-html="text" class="[ text-below ] [ text-center ] [ m-a ]" />

        <ProfitBlockImage class="section-bg-gfx" />

        <ProfitBlockImageBgDots class="section-bg-gfx" />
      </div>
  </section>
</template>

<script>
import ProfitBlockImage from './ProfitBlockImage'
import ProfitBlockImageBgDots from '../assets/images/home/section-profit--dots.svg';

export default {
  name: 'ProfitBlock',
  data() {
    return {
      headline: 'Skorzystaj z najszybciej rozwijającej się gałęzi medycyny',
      text: '<p>Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy.</p>'
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.$refs['profit'].classList.add('visible');
      } else {
        this.$refs['profit'].classList.remove('visible');
      }
    }
  },
  components: {
    ProfitBlockImage,
    ProfitBlockImageBgDots,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headline {
  margin-bottom: 24px;
}

.profit-block {
  position: relative;

  .section-bg-gfx {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // z-index: -1;
    z-index: 2;
  }
}

@include breakpoint-lg {
  .profit-block {
    min-height: 831px + 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    /deep/ .pop-out {
      transform-box: fill-box;
      transform-origin: center center;
      transform: scale(0);
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.075, 0.820, 0.165, 1.000);

      &:nth-of-type(1) { transition-delay: 100ms;}
      &:nth-of-type(2) { transition-delay: 200ms;}
      &:nth-of-type(3) { transition-delay: 300ms;}
      &:nth-of-type(4) { transition-delay: 400ms;}
      &:nth-of-type(5) { transition-delay: 500ms;}
      &:nth-of-type(6) { transition-delay: 600ms;}
      &:nth-of-type(7) { transition-delay: 700ms;}
      &:nth-of-type(8) { transition-delay: 800ms;}
      &:nth-of-type(9) { transition-delay: 900ms;}
      &:nth-of-type(10) { transition-delay: 1000ms;}
      &:nth-of-type(11) { transition-delay: 1100ms;}

    }

    &.visible {
      /deep/ .pop-out {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .headline {
    max-width: 944px;
  }

  .text-below {
    max-width: 768px;
  }
}
</style>
