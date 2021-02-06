<template>
  <section class="newsletter-block">
      <div class="grid-container">
        <div class="[ newsletter-body ] [ bg-blue text-white ]">
          <h2 v-text="headline" />

          <a href="#" class="button button--invert">Zarezerwuj termin już teraz</a>

          <ul class="[ text-list ] [ reset-list ] [ d-none d-lg-block ]">
            <li v-for="(text, index) in textList" :key="index">
              <div class="check">
                <CheckSvg/>
              </div>

              {{ text }}
            </li>
          </ul>
        </div>
      </div>
  </section>
</template>

<script>
import CheckSvg from '../assets/images/icons/ui/check.svg';

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
  components: {
    CheckSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.newsletter-body {
  padding: 30px;
  border-radius: 8px;
  box-shadow: 17px 24px 30px 0 rgba(39,33,99,0.12);

  .button {
    width: 100%;
  }
}

@include breakpoint-md {
  .newsletter-body {
    .button {
      width: auto;
    }
  }
}

@include breakpoint-lg {
  .newsletter-body {
    padding: 80px  (5/12)*100% 80px 80px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    box-shadow: 24px 32px 56px 0 rgba(39,33,99,0.12);

    .button {
      width: auto;
    }

    h2 {
      max-width: 469px;
      margin-bottom: 16px;
    }


    .text-list {
      position: absolute;
      left: calc((7/12)*100% + 16px);
      top: 50%;
      transform: translateY(-50%);

      > li{
        margin: 18px 0;
        position: relative;
        padding-left: 44px;

        .check {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(white, 0.16);
          border-radius: 50%;
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          left: 0;
          top: 50%;
          transform: translateY(-50%);

          svg {
            transform: scale(1.2);

            path {
              fill: white;
            }
          }
        }
      }
    }

    &:before, &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      left: (7/12)*100%;
      z-index: 2;
      pointer-events: none;
    }

    &:before {
      top: 0;
      background: linear-gradient(map-get($colors, blue), rgba(map-get($colors, blue), 0.75), transparent);
    }

    &:after {
      bottom: 0;
      background: linear-gradient(transparent, rgba(map-get($colors, blue), 0.75), map-get($colors, blue));

    }
  }
}
</style>
