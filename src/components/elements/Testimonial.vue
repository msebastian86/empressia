<template>
  <blockquote class="testimonial">
      <div class="testimonial__top">
        <div class="top-top">
          <div class="testimonial__rank">
            <Rank :rank="testimonial.rank" />
          </div>
          <div class="testimonial__date">
            {{ testimonial.date | dateFormat('DD MMMM YYYY') }}
          </div>
        </div>
        <p v-text="testimonial.text" class="testimonial__text"/>
      </div>

      <cite class="testimonial__cite" ref="cite">
        <div class="img-wrapper">
          <EyeSvg class="img-wrapper__cover" />
          <v-lazy-image :src="testimonial.avatar" alt="avatar alt" />
        </div>
        <p v-text="testimonial.name" />
      </cite>
  </blockquote>
</template>

<script>
import Rank from './Rank';
import EyeSvg from '../../assets/images/icons/ui/eye.svg';

export default {
  name: 'Testimonial',
  props: {
    testimonial: Object,
  },
  components: {
    Rank,
    EyeSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .testimonial {
   border-radius: 4px;
   background: white;
   padding: 24px 16px 16px 16px;
   margin: 0;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid map-get($colors, gray-medium);

   .testimonial__top {
     .top-top {
        display: flex;
        align-content: center;
        justify-content: space-between;
     }
   }

    .testimonial__date {
      color: rgba(map-get($colors, dark), 0.32);
      font-size: 14px;
      line-height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
    }

   .testimonial__text {
     margin: 16px 0 0 0;

     :last-child {
        margin-bottom: 0;
      }
   }

   .testimonial__cite {
      margin: 16px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;


      .img-wrapper {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin: 0 16px 0 0;
        cursor: pointer;

        .img-wrapper__cover {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          will-change: transform;
          transition: transform 0.6s ease;
        }

        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          width: 100%;
          min-height: 100%;
        }

        &:hover, &:focus {
          .img-wrapper__cover {
            transform: translateX(-105%);
          }

          + p {
            opacity: 1;
          }
        }
      }

      p {
        @extend .font-sfnsd;
        margin: 0;
        font-style: normal;
        color: map-get($colors, dark);
        opacity: 0;
        will-change: opacity;
        transition: opacity 0.6s ease;
        transition-delay: 0.15s;
      }

      :last-child {
        margin-bottom: 0;
      }
    }

 }

 @include breakpoint-lg {
    .testimonial {
      padding: 56.5px 48.5px 48.5px 48.5px;
      border-radius: 8px;

      .testimonial__text {
        margin-top: 23px;
      }

      .testimonial__cite {
        margin-top: 23px;
      }
    }
 }
</style>
