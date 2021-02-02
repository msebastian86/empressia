<template>
  <header class="header">
      <div class="grid-container">
        <nav class="header-navigation-wrapper">
          <a href="/" title="Home"><LogoSvg alt="Logo" class="logo" /></a>

          <ul class="menu">
            <li v-for="(item, index) in menuItems" :key="`${index} ${Math.random()}`">
              <a :href="item.link" :title="item.title" v-text="item.title" />
            </li>
          </ul>

          <a href="#" class="[ navigation__button ] [ button button--primary button--medium ]">Zapisz się na wizytą on-line</a>
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
    LogoSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  padding: 20px 0;
}

.menu {
  @extend .reset-list;
  display: flex;
  align-content: baseline;
  justify-content: space-between;

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

.header-navigation-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: no-wrap;
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
}
</style>
