<template>
  <footer class="[ footer ]">
    <div class="[ footer__top ] [ bg-gray-light ]">
      <FooterPreFooter />
      <FooterMain :menuItems="menuItems" />
    </div>
    <div class="footer__bottom">
      <div class="[ footer__bottom--container  [ grid-container ]">
        <div class="footer__bottom-left [ text-center text-lg-left ]">
          <p>
            <small>© {{ new Date().getFullYear() }} Wszelkie prawa zastrzeżone. <a href="#">Polityka Prywatności</a></small>
          </p>
        </div>
        <div class="footer__bottom-right [ text-center text-lg-right ]">
          <small>Realizacja:</small> <LogoSvg class="logo" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMain from '../components/FooterMain.vue'
import FooterPreFooter from '../components/FooterPreFooter.vue'
import LogoSvg from '../assets/images/icons/logos/logo_empressiaColor.svg';

export default {
  name: 'HelloWorld',
  components: {
    FooterMain,
    FooterPreFooter,
    LogoSvg
  },
  props: {
    menuItems: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer__bottom {
  padding: 30px 0;
}

.logo {
  width: 100%;
  max-width: 123px;
}

.footer__bottom-right {
  small {
    margin-right: 8px;
  }
}

@include breakpoint-lg {
  .footer {
    width: 100%;
    max-width: $blocks-max-width;
    margin: 0 auto;
  }

  .footer__bottom {
    padding: 40px 0 64px 0;
  }

  .footer__bottom--container {
    display: flex;
    justify-content: space-between;
    align-content: baseline;;

    p {
      margin-bottom: 0;
    }
  }
}
</style>
