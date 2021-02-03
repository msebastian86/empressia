<template>
  <section class="pre-footer">
    <div class="[ pre-footer__grid ] [ grid-container ]">
      <div class="pre-footer__left">
        <LogoEmpressia class="logo-left" />
      </div>
      <div class="pre-footer__right">
        <div class="right-wrapper">
          <div class="[ right-wrapper__left ] [ d-none d-lg-flex ]">
            <strong>RANK</strong> <small>5.0 (163 opinie) na</small> <img src="../assets/images/icons/logos/logo_znanylekarzColor.png" class="logo-right" />
          </div>
          <div class="right-wrapper__right">
            <div class="icons">
              <a href="https://facebook.com" title="Facebook" target="_blank" rel="noindex nofollow"><FacebookLogo class="icons__icon"/></a>
              <a href="https://instagram.com" title="Instagram" target="_blank" rel="noindex nofollow"><InstagramLogo class="icons__icon"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <hr/>
    </div>
  </section>
</template>

<script>
import LogoEmpressia from '../assets/images/icons/logos/mark_empressiaColor.svg';
import FacebookLogo from '../assets/images/icons/social/facebook.svg';
import InstagramLogo from '../assets/images/icons/social/instagram.svg';

export default {
  name: 'HelloWorld',
  components: {
    LogoEmpressia,
    FacebookLogo,
    InstagramLogo
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pre-footer {
  margin-top: 60px;
  padding: 32px 0 0 0;
}

.icons__icon {
  margin: 0 8px;
}

.right-wrapper__right {
  .icons {
    margin-right: -8px;
  }
}

hr {
  border: none;
  border-bottom: 1px solid lighten(map-get($colors, dark), 60%);
  margin: 32px 0 0 0;
  width: 100%;
  max-width: 100%;
}

.logo-right {
  max-width: 138px;
}

.right-wrapper {
  .right-wrapper__left {
    small {
      margin: 0 3px;
    }
  }
}

@include breakpoint-lg {
  .pre-footer {
    margin-top: 112px;
    padding: 40px 0 0;
  }

  .pre-footer__grid {
    @include grid(2, 'flex-start', $gutter-horizontal: 16px);
    align-items: center;
  }

  .right-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    .right-wrapper__left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
}
</style>
