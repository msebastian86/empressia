<template>
  <section class="footer-main">
    <div class="[ footer-main__container ] [ grid-container ]">
      <div class="[ column-left ]">
        <p v-text="bottomText" class="text-over-menu" />

        <nav class="footer-main__bottom-navigation">
          <ul class="menu">
            <li v-for="(item, index) in menuItems">
              <a :href="item.link" v-text="item.title" />
            </li>
          </ul>
        </nav>
      </div>

      <div class="[ column-right ]">
        <nav class="footer-main__bottom-navigation-side footer-main__bottom-navigation-side-first">
          <p v-text="nav1.headline" class="[ large font-700 text-blue ]" />

          <ul class="menu-side">
            <li v-for="(item, index) in nav1.elements">
              <a href="#" v-text="item" />
            </li>
          </ul>
        </nav>

        <nav class="footer-main__bottom-navigation-side footer-main__bottom-navigation-side-second">
          <p v-text="nav2.headline" class="[ large font-700 text-blue ]" />

          <ul class="menu-side">
            <li v-for="(item, index) in nav2.elements">
              <a href="#" v-text="item" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
// import LogoEmpressia from '../assets/images/icons/logos/mark_empressiaColor.svg';

export default {
  name: 'HelloWorld',
  props: {
    menuItems: Array
  },
  components: {
    // LogoEmpressia
  },
  data() {
    return {
      bottomText: 'Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu.',
      nav1: { headline: 'Program w przypadkach', elements: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'skin biopsy with a histological examination', 'curettage e.g. focus of molluscum contagiosum', 'Lorem, ipsum dolor.']},
      nav2: { headline: 'Najpopularniejsze wpisy', elements: ['Obowiązkowo na lato. 9 rzeczy, które warto wiedzieć o filtrach SPF', 'Jak walczyć z trądzikiem w każdym wieku?', '5 zasad bezpiecznego opalania', 'Jak przygotować się do wizyty u dermatologa?', 'Skutecznie pozbądź się zaczerwienień na twarzy']}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-main {
  padding: 30px 0 40px 0;
}

.menu {
  @extend .reset-list;
  display: flex;
  align-content: baseline;
  justify-content: flex-start;

  li {
    margin: 0 24px 0 0;
    padding: 0;

    a {
      color: map-get($colors, dark);
      text-decoration: none;
      font-size: 14px;
      line-height: 15px;
      font-weight: bold;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.menu-side {
  @extend .reset-list;
  margin-bottom: 16px;

  li {
    a {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 12px;
      color: map-get($colors, blue-text);
      text-decoration: none;
      font-weight: bold;
    }
  }
}

@include breakpoint-md {
  .column-right {
    @include grid(2, $gutter-horizontal: 16px);
  }
}

@include breakpoint-lg {
  .footer-main {
    padding: 64px 0 80px 0;
  }

  .column-right {
    @include grid(2, $gutter-horizontal: 64px);
  }

  .footer-main__container {
    @include grid(2, $gutter-horizontal: 16px);
  }

  .text-over-menu {
    max-width: 440px;
    margin-right: auto;
  }

  .menu {
    margin-top: 64px;
  }
}
</style>
