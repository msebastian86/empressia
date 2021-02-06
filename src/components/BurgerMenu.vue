<template>
  <nav class="burger-menu">
      <a href="#" title="Go to top"><LogoSvg alt="Logo" class="[ burger-menu__logo ]" /></a>

      <div class="burger-menu__body" :aria-hidden="`${isMenuClosed}`" role="navigation">
        <div class="[ burger-menu__container ] [ grid-container ]">
          <ul class="burger-menu__list">
            <li v-for="(item, index) in menuItems" :key="`${index} ${Math.random()}`" class="burger-menu__list-item">
              <a :href="item.link" v-text="item.title" class="burger-menu__list-link"/>
            </li>
          </ul>
        </div>
      </div>

      <div class="burger-menu__burger" :class="{ 'burger-menu__burger-opened': !isMenuClosed }" @click="toggleBurgerMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  </nav>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import LogoSvg from '../assets/images/icons/logos/logo_empressiaColor.svg';

export default {
  name: 'BurgerMenu',
  props: {
    menuItems: Array
  },
  data() {
    return {
      isMenuClosed: true,
    }
  },
  components: {
    LogoSvg
  },
  methods: {
      toggleBurgerMenu: function(e) {
          e.preventDefault();
          this.isMenuClosed = !this.isMenuClosed;
      }
  },
  watch: {
    isMenuClosed: function (val) {
      if(val) {
        enableBodyScroll(document.body);
      } else {
        disableBodyScroll(document.body)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    opacity: 1;
  }
}

.burger-menu__logo {
  position: fixed;
  width: 200px;
  left: map-get($gutters, sm);
  top: 22px;
  z-index: map-get($zindex, burger-menu) + 5;
}

.burger-menu__burger {
  position: fixed;
  right: map-get($gutters, sm);
  top: map-get($gutters, sm);
  z-index: map-get($zindex, burger-menu) + 10;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  width: 50px;
  height: 39px;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 7px;
    width: 100%;
    background: map-get($colors, blue);
    border-radius: 7px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    will-change: transform;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2), span:nth-child(3) {
    top: 15px;
  }

  span:nth-child(4) {
    top: 30px;
  }

  &.burger-menu__burger-opened span:nth-child(1) {
    top: 15px;
    width: 0%;
    left: 50%;
  }

  &.burger-menu__burger-opened span:nth-child(2) {
    transform: rotate(45deg);
  }

  &.burger-menu__burger-opened span:nth-child(3) {
    transform: rotate(-45deg);
  }

  &.burger-menu__burger-opened span:nth-child(4) {
    top: 15px;
    width: 0%;
    left: 50%;
  }
}

.burger-menu__body {
  background: white;
  will-change: transform;
  z-index: map-get($zindex, burger-menu);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  transition: transform 300ms ease;
  transform: translateX(-100%);
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: center;

  .burger-menu__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[aria-hidden="false"] {
    transform: translateX(0);

    .burger-menu__list {
      li {
        will-change: transition, opacity;
        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        @for $i from 1 through 15 {
          &:nth-of-type(#{$i}) {
            animation-delay: #{$i * 100}ms;
          }
        }
      }
    }
  }
}

.burger-menu__list {
  @extend .reset-list;
  display: block;

  li {
    text-align: center;
    margin: 5px 0;

    a {
      font-weight: bold;
      color: black;
      text-decoration: none;
      font-size: 18px;
      padding: 5px;
      display: inline-block;
    }
  }
}
</style>
