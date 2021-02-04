<template>
  <section class="profit-block">
      <div class="grid-container">
        <h2 class="[ headline ] [ text-center text-dark font-700 ] [ m-a ]" v-text="headline" />
        <div v-html="text" class="[ text-below ] [ text-center ] [ m-a ]" />

        <SectionGfx class="section-bg-gfx" />
      </div>
  </section>
</template>

<script>
import SectionGfx from '../assets/images/home/section-profit--background.svg';

export default {
  name: 'ProfitBlock',
  data() {
    return {
      headline: 'Skorzystaj z najszybciej rozwijającej się gałęzi medycyny',
      text: '<p>Teleporada lekarska na naszym serwisie oznacza potwierdzoną skuteczność terapeutyczną, oszczędność czasu i pieniędzy.</p>'
    }
  },
  components: {
    SectionGfx
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
    z-index: -1;
  }
}

@include breakpoint-lg {
  .profit-block {
    min-height: 831px + 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headline {
    max-width: 944px;
  }

  .text-below {
    max-width: 768px;
  }
}
</style>
