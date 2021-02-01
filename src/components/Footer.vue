<template>
  <footer class="footer">
    <div class="footer__top">
      <FooterMain :menuItems="menuItems" />
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-left">
        <p>
          © {{ new Date().getFullYear() }} Wszelkie prawa zastrzeżone. <a href="#">Polityka Prywatności</a>
        </p>
      </div>
      <div class="footer__bottom-right">
        Realizacja: Empressia
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMain from '../components/FooterMain.vue'

export default {
  name: 'HelloWorld',
  components: {
    FooterMain
  },
  props: {
    menuItems: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
