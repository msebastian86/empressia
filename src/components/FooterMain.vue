<template>
  <section class="footer-main">
    <div class="[ footer-main__container ] [ grid-container ]">
      <div class="[ column-left ]">
        <p v-text="bottomText" class="text-over-menu" />

        <nav class="footer-main__bottom-navigation">
          <ul class="[ menu-top ]">
            <div class="[ menu-top__body ] [ hide-scrollbar ]">
              <li v-for="(item, index) in menuItems" :key="index">
                <a :href="item.link" v-text="item.title" />
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <div class="[ column-right ]">
        <nav class="footer-main__bottom-navigation-side footer-main__bottom-navigation-side-first">
          <p v-text="nav1.headline" class="[ side-menu-title ] [ large font-700 text-blue ] [ d-none d-md-block ]" />
          <p class="[ mobile-toggler ] [ large font-700 text-blue ] [ d-md-none ] hidden-on-mobile" @click="toggleElementClass($event, {class: 'hidden-on-mobile', element: 'menu-side-1'})">{{ nav1.headline }} <DownSvg class="pointer"/></p>

          <ul class="[ menu-side ] hidden-on-mobile" ref="menu-side-1">
            <li v-for="(item, index) in nav1.elements" :key="index">
              <a href="#" v-text="item" />
            </li>
          </ul>
        </nav>

        <nav class="footer-main__bottom-navigation-side footer-main__bottom-navigation-side-second">
          <p v-text="nav2.headline" class="[ side-menu-title ] [ large font-700 text-blue ] [ d-none d-md-block ]" />
          <p class="[ mobile-toggler ] [ large font-700 text-blue ] [ d-md-none ] hidden-on-mobile" @click="toggleElementClass($event, {class: 'hidden-on-mobile', element: 'menu-side-2'})">{{ nav2.headline }} <DownSvg class="pointer"/></p>

          <ul class="[ menu-side ] hidden-on-mobile" ref="menu-side-2">
            <li v-for="(item, index) in nav2.elements" :key="index">
              <a href="#" v-text="item" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import DownSvg from '@/assets/images/icons/ui/chevron-down.svg';

export default {
  name: 'HelloWorld',
  props: {
    menuItems: Array
  },
  components: {
    DownSvg
  },
  methods: {
    toggleElementClass($event, options) {
      const el = this.$refs[options.element];

      if (el && options.class.length) {
        $event.target.classList.toggle(options.class);
        el.classList.toggle(options.class);
      }
    }
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
  padding: 30px 0 20px 0;
}

.menu-top {
  @extend .reset-list;
  height: 2em;
  overflow-y: hidden;
  position: relative;

  .menu-top__body {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    left: 0;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    position: absolute;
    right: 0;
    height: 100%;
    white-space: nowrap;
  }

  li {
    margin: 0 24px 0 0;
    padding: 0;
    display: inline-flex;
    align-items: center;

    a {
      color: map-get($colors, dark);
      text-decoration: none;
      font-size: 14px;
      line-height: 15px;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
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
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;

    a {
      color: map-get($colors, blue-text);
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.column-right {
  margin-top: 30px;
}

.mobile-toggler {
  display: inline-block;
  position: relative;
  padding-right: 30px;
  cursor: pointer;

  .pointer {
    content: '';
    display: inline-block;
    position: absolute;
    width: 12px;
    height: 12px;
    right: 0;
    top: calc(50% - 6px);
    transition: transform 200ms ease;
    transform: rotate(-90deg);
  }
}

.hidden-on-mobile {
  &.mobile-toggler {
    .pointer {
      transform: rotate(0deg);
    }
  }

  &.menu-side {
    display: none;
  }
}


@include breakpoint-md {
  .column-right {
    @include grid(2, $gutter-horizontal: 16px);
  }

  .mobile-toggler {
    display: none;
  }

  .menu-side {
    margin-bottom: 0;
  }

  .hidden-on-mobile {
    &.menu-side {
      display: block;
    }
  }
}


@include breakpoint-lg {
  .footer-main {
    padding: 64px 0 68px 0;
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

  .menu-top {
    margin-top: 54px;
  }

  .side-menu-title {
    margin-bottom: 24px;
  }
}
</style>
