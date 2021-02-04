<template>
  <section class="[ testimonials ] [ bg-gray-light ]">
      <div class="grid-container">
        <h3 v-text="headline" class="[ headline ] [ text-center text-dark ]" />
      </div>

      <div class="[ swiper-container--testimonials swiper-container ]">
        <div class="swiper-wrapper">
          <div v-for="(testimonial, index) in testimonials" :key="`${index} ${Math.random()}`" class="swiper-slide">
            <Testimonial :testimonial="testimonial" />
          </div>
        </div>
      </div>

      <div class="[ grid-container ] [ text-center ]">
        <div class="swiper-pagination-container">
          <div class="swiper-pagination-dot"></div>
          <div class="[ swiper-pagination swiper-pagination--testimonials ]" />
        </div>
      </div>
  </section>
</template>

<script>
import Testimonial from './elements/Testimonial';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
  name: 'TestimonialsBlock',
  components: {
    Testimonial
  },
  data() {
    return {
      swiper: null,
      headline: 'Co mówią zadowoleni klienci',
      testimonials: [
        { rank: 3, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolor, sit amet consectetur dolor, sit amet consectetur fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem dolor, sit amet consectetur dolor, sit amet consectetur dolor, sit amet consectetur ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 4, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 2, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
        { rank: 5, date: new Date(), text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit quis, possimus voluptate eos minima saepe quaerat aliquam ea nobis', avatar: 'https://loremflickr.com/640/360', name: 'Maria' },
      ]
    }
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper-container--testimonials', {
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
        on: {
          slideChangeTransitionStart: function() {
            const bulletSpacing = 18;
            const pagination = document.querySelector('.swiper-pagination-dot');
            pagination.style.transform = `translateX(${this.realIndex * bulletSpacing}px)`;
          },
        }
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.swiper-container--testimonials {
  margin: 0 0 40px 0;
}

.swiper-pagination-container {
  position: relative;
  width: auto;
  display: inline-flex;

  .swiper-pagination-dot{
    outline: none;
    display: block;
    width: 10px;
    height: 10px;
    background: map-get($colors, blue);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    transition: transform 0.8s cubic-bezier(0.71, 0.01, 0.29, 0.97);
  }

  .swiper-pagination--testimonials {
    z-index: 0;
    background: transparent;
    white-space: nowrap;
    line-height: 0;
    margin: 0 0 40px 0;

    /deep/ .swiper-pagination-bullet{
      outline: none;
      margin: 0 4px;
      width: 10px;
      height: 10px;
      background: rgba(map-get($colors, dark), .4);
      transition: background-color 0.4s cubic-bezier(0.71, 0.01, 0.29, 0.97);
      // transition-delay: 0.1s;

      &-active {
        background-color: map-get($colors, blue);
      }

      &:focus {
        outline: none;
      }

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}

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


@include breakpoint-lg {
  .headline {
    margin-bottom: 56px;
  }

  .testimonials {
    padding: 128px 0 96px 0;
    max-width: $blocks-max-width;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    &:before, &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 10%;
      top: 0;
      z-index: 2;
      max-width: 128px;
      pointer-events: none;
    }

    &:before {
      left: 0;
      background: linear-gradient(to left, transparent, rgba(white, 0.32), white);
    }

    &:after {
      right: 0;
      background: linear-gradient(to right, transparent, rgba(white, 0.32), white);
    }
  }

  .swiper-container {
    width: 140%;
    max-width: 140%;
    margin-left: -20%;
    margin-right: -20%;
  }

  .swiper-container--testimonials {
    margin-bottom: 56px;
  }
}
</style>
