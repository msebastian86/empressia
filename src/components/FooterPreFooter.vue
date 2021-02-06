<template>
  <section class="pre-footer">
    <div class="[ pre-footer__grid ] [ grid-container ]">
      <div class="pre-footer__left">
        <LogoEmpressia class="logo-left" />
      </div>
      <div class="pre-footer__right">
        <div class="right-wrapper">
          <div class="[ right-wrapper__left ] [ d-none d-lg-flex ]">
            <Rank :rank="5" :color="'green-dark'">
              <template v-slot:after>
                <small>5.0 (163 opinie) na</small>
                <img src="../assets/images/icons/logos/logo_znanylekarzColor.png" class="logo-right" alt="Znany lekarz logo" />
              </template>
            </Rank>
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
import Rank from './elements/Rank'

export default {
  name: 'HelloWorld',
  components: {
    LogoEmpressia,
    FacebookLogo,
    InstagramLogo,
    Rank
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
  margin: 32px 0 0 0;
}

.logo-right {
  max-width: 138px;
}

.right-wrapper {
  .right-wrapper__left {
    small {
      margin: 2px 10px 0 10px;
      display: inline-block;
      line-height: 1;
    }
  }
}

.pre-footer__grid {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
    align-items: center;
    justify-content: space-between;

    .right-wrapper__left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
}
</style>
