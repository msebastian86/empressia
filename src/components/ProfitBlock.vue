<template>
  <section class="profit-block" ref="profit" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.55,
        },
      }">
      <div class="grid-container">
        <div class="logos-wrapper">
          <v-lazy-image :src="require('@/assets/images/home/contact-skype.png')" alt="Skype logo" class="logos-wrapper__logo" />
          <v-lazy-image :src="require('@/assets/images/home/contact-whatsapp.png')" alt="Whatsapp logo" class="logos-wrapper__logo" />
        </div>
        <h2 class="[ headline ] [ text-center text-dark font-700 ] [ m-a ]" v-text="headline" />
        <div v-html="text" class="[ text-below ] [ text-center ] [ m-a ]" />

        <ProfitBlockImage class="[ section-bg-gfx ] [ d-none d-lg-block ]" />
        <ProfitBlockImageBgDots class="[ section-bg-gfx section-bg-gfx--dots ]" />
      </div>
  </section>
</template>

<script>
import ProfitBlockImage from './ProfitBlockImage'
import ProfitBlockImageBgDots from '@/assets/images/home/section-profit--dots.svg';

export default {
  name: 'ProfitBlock',
  data() {
    return {
      headline: 'Skorzystaj z najszybciej rozwijającej się gałęzi medycyny',
      text: '<p>Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy.</p>'
    }
  },
  methods: {
    visibilityChanged(isVisible) {
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

.logos-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 auto 10px auto;
  position: relative;
  left: 22px;

  .logos-wrapper__logo {
    margin-left: -28px;
    max-width: 100px;
  }
}

.profit-block {
  overflow-x: hidden;
  position: relative;
  padding: 30px 0;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;

  .section-bg-gfx {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    &--dots {
      >g {
        width: 82%;
      }
    }
  }

  /deep/ .pop-out {
    will-change: opacity, transform;
  }
}

@include breakpoint-lg {
  .logos-wrapper {
    margin: 0 auto 35px auto;
    left: 22px;

    .logos-wrapper__logo {
      margin-left: -22px;
      max-width: 135px;
    }
  }

  .profit-block {
    padding: 40px 0;
    min-height: 831px + 160px;

    /deep/ .pop-out {
      transform-box: fill-box;
      transform-origin: center center;
      transform: scale(0);
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.075, 0.820, 0.165, 1.000);

      @for $i from 1 through 15 {
        &:nth-of-type(#{$i}) {
          transition-delay: #{$i * 100}ms;
        }
      }
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
