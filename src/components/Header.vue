<template>
  <header class="header" ref="sticky-header">
      <div class="grid-container">
        <nav class="header__navigation-wrapper">
          <div class="header__navigation-left">
            <a href="/" title="Home"><LogoSvg alt="Logo" class="logo" /></a>

            <ul class="menu">
              <li v-for="(item, index) in menuItems" :key="`${index} ${Math.random()}`">
                <a :href="item.link" v-text="item.title" />
              </li>
            </ul>
          </div>

          <div class="header__navigation-right">
            <a href="#" class="[ navigation__button ] [ button button--primary button--medium ]">Zapisz się na wizytą on-line</a>
          </div>
        </nav>
      </div>
  </header>
</template>

<script>
import LogoSvg from '../assets/images/icons/logos/logo_empressiaColor.svg';

export default {
  name: 'HelloWorld',
  props: {
    menuItems: Array
  },
  components: {
    LogoSvg,
  },
  mounted() {
    this.stickyHeaderEvents();
  },
  methods: {
    stickyHeaderEvents() {
      const headerElement = this.$refs['sticky-header'];

      const observer = new IntersectionObserver(
        ([e]) => {
          e.target.classList.toggle('is-stuck', e.intersectionRatio < 1);
        },
        {threshold: [1]}
      );

      observer.observe(headerElement)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 20px 0;
  position: sticky;
  top: -1px; // observer hack
  width: 100%;
  background: white;
  z-index: map-get($zindex, sticky-menu);
  transition: border 350ms ease;
  will-change: border;
  border-bottom: 0 solid transparent;

  &.is-stuck {
    border-bottom: 1px solid rgba(map-get($colors, dark), 0.06);
  }
}

.menu {
  @extend .reset-list;
  display: flex;
  align-content: baseline;
  justify-content: space-between;

  li {
    margin: 0 24px 0 0;
    padding: 1px 0 0 0;

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

.header__navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .header__navigation-left {
    display: flex;
    align-content: center;
    justify-content: flex-start;

    > * {
      margin-right: 16px;
    }
  }
}

.navigation__button {
  margin: 0;
}

@include breakpoint-lg {
  .header {
    padding: 40px 0;
  }

  .logo {
    width: 100%;
    max-width: 256px;
  }

  .header__navigation-wrapper {
    .header__navigation-left {
      > * {
        margin-right: 48px;
      }
    }
  }
}
</style>
