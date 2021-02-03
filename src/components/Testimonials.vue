<template>
  <section class="[ testimonials ] [ bg-gray-light ]">
      <div class="grid-container">
        <h3 v-text="headline" class="[ headline ] [ text-center text-dark ]" />
      </div>

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(testimonial, index) in testimonials" :key="`${index} ${Math.random()}`" class="swiper-slide">
            <Testimonial :testimonial="testimonial" />
          </div>
        </div>
      </div>

      <div class="grid-container">
        <div class="[ swiper-pagination swiper-pagination--testimonials ]" />
      </div>
  </section>
</template>

<script>
import Testimonial from './elements/Testimonial';
// import Swiper from 'swiper';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'MainText',
  components: {
    Testimonial
  },
  data() {
    return {
      swiper: null,
      headline: 'Co mówią zadowoleni klienci',
      testimonials: [
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolor, sit amet consectetur dolor, sit amet consectetur fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem dolor, sit amet consectetur dolor, sit amet consectetur dolor, sit amet consectetur ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
      ]
    }
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        passiveListeners: false,
        observer: true,
        observeParents: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination--testimonials',
          clickable: true
        },
        breakpoints: {
          1024: {
            centeredSlides: true,
            slidesPerView: 5,
            spaceBetween: 32,
          }
        },
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headline {
  margin-bottom: 32px;
}

.testimonials {
  padding: 56px 0 40px 0;

   .swiper-slide {
     height: auto;
     display: flex;

     /deep/ .testimonial {
       flex: 1;
     }
    }
}

.swiper-pagination--testimonials {
  position: static;
  display: block;
  width: auto;
  margin: 32 auto 0 auto;

  /deep/ .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    margin: 0 4px;
    background: rgba(map-get($colors, dark), 0.08);
    opacity: 1;

    &.swiper-pagination-bullet-active {
      background: map-get($colors, blue);
    }
  }
}

@include breakpoint-lg {
  .headline {
    margin-bottom: 56px;
  }

  .testimonials {
    padding: 128px 0 96px 0;
    max-width: $blocks-max-width;
    margin: 0 auto;
    overflow: hidden;
  }

  .swiper-container {
    width: 140%;
    max-width: 140%;
    margin-left: -20%;
    margin-right: -20%;
  }

  .swiper-pagination--testimonials {
    margin-top: 56px;
  }
}
</style>
