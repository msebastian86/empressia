<template>
  <section class="cookies-block" v-if="isMsgVisible">
      <div class="grid-container">
        <div class="cookies-block--message">
          <small>Ta strona korzysta z <a href="#">ciasteczek</a>. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</small>
          <span @click="closeCookie" title="Close" class="close"><CloseSvg /></span>
        </div>
      </div>
  </section>
</template>

<script>
import CloseSvg from '../assets/images/icons/ui/close.svg';
import Cookies from 'js-cookie';

export default {
  name: 'CookiesBlock',
  data() {
    return {
      isMsgVisible: false,
    }
  },
  mounted() {
    this.initCookies();
  },
  methods: {
    initCookies() {
      if (!Cookies.get('cookies-closed')) {
        this.isMsgVisible = true;
      }
    },
    closeCookie(e) {
      e.preventDefault();
      this.$el.remove();
      const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
      Cookies.set('cookies-closed', true, { expires: inFifteenMinutes })
    }
  },
  components: {
    CloseSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

.cookies-block {
  position: fixed;
  left: 0;
  bottom: 16px;
  width: 100%;
  z-index: map-get($zindex, cookie);
  pointer-events: none;
}

.cookies-block--message {
  pointer-events: all;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  background: white;
  padding: 17px 48px 14px 24px;
  min-height: 64px;
  margin: 0 auto;
  animation: slide-in-bottom 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.7s both;
  position: relative;
  font-size: 0.85rem;
  line-height: 1.5;

  .close {
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.7;
    }
  }
}

@include breakpoint-lg {
  .cookies-block--message {
    max-width: 812px;
    font-size: 1rem;
  }
}
</style>
