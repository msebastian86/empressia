<template>
  <section class="icons-row-section">
      <div class="grid-container">
        <ul class="[ icons-list ] [ reset-list ]">
          <li v-for="(icon, index) in icons" :key="index" class="icons-list__wrapper">
            <div class="icons-list__icon-container">
              <component :is="icon.iconUrl" />
            </div>
            <h5 v-text="icon.headline" class="[ font-sfnsd text-dark font-700 ]"/>
            <p v-text="icon.text" />
          </li>
        </ul>


      </div>
  </section>
</template>

<script>
import Accordeon from './elements/Accordeon';
import Diagnosis from '../assets/images/icons/seo/diagnosis.svg';
import Dicretia from '../assets/images/icons/seo/dicretia.svg';
import Receipt from '../assets/images/icons/seo/e-receipt.svg';
import Quickness from '../assets/images/icons/seo/quickness.svg';
import Reservation from '../assets/images/icons/seo/reservation.svg';
import Video from '../assets/images/icons/seo/video.svg';


export default {
  name: 'IconBlock',
  components: {
    Accordeon,
    Diagnosis,
    Dicretia,
    Receipt,
    Quickness,
    Reservation,
    Video
  },
  data() {
    return {
      icons: [
        { iconUrl: 'Reservation', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'Dicretia', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'Video', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'Receipt', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'Quickness', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'Diagnosis', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.icons-row-section {
  padding: 56px 0;
}

.icons-list {
  @include grid(2, 'flex-start', $gutter-horizontal: 8px, $gutter-vertical: 16px );
}

.icons-list__wrapper {
  text-align: center;

  .icons-list__icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    // background: map-get($colors, gray-medium);
    margin: 0 auto 32px auto;

    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
}

@include breakpoint-lg {
  .icons-list {
    @include grid(3, 'flex-start', $gutter-horizontal: 48px, $gutter-vertical: 136px );
  }

  .icons-row-section {
    padding: 136px 0;
  }

  .icons-list__wrapper {
    .icons-list__icon-container {
      margin: 0 auto 40px auto;
    }
  }
}
</style>
