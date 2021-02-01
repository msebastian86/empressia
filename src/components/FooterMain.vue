<template>
  <div class="footer-main">
    <div class="grid-container">
      <section class="footer-main__top">
        <div class="left">
          <img src="http://placekitten.com/60/60" alt="Empressia">
        </div>
        <div class="right">
          <div class="right-wrapper">
            <div class="right-wrapper__left">
              RANK 5.0 (163 opinie) na <img src="http://placekitten.com/200/50" alt="Logo">
            </div>
            <div class="right-wrapper__right">
              <div class="icons">
                <span>fb</span>
                <span>insta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-main__bottom">
        <div class="left">
          <h4 v-text="bottomText" />

          <nav class="footer-main__bottom-navigation">
            <ul class="menu">
              <li v-for="(item, index) in menuItems">
                <a :href="item.link" v-text="item.title" :title="item.title" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="right">
          <nav class="footer-main__bottom-navigation-side footer-main__bottom-navigation-side-first">
            <h3 v-text="nav1.headline" />

            <ul class="menu-side">
              <li v-for="(item, index) in nav1.elements">
                <a href="#" v-text="item" :title="item" />
              </li>
            </ul>
          </nav>

          <nav class="footer-main__bottom-navigation-side footer-main__bottom-navigation-side-second">
            <h3 v-text="nav2.headline" />

            <ul class="menu-side">
              <li v-for="(item, index) in nav2.elements">
                <a href="#" v-text="item" :title="item" />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    menuItems: Array
  },
  data() {
    return {
      bottomText: 'Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub natury intymnej, jesteś we właściwym miejscu.',
      nav1: { headline: 'Program w przypadkach', elements: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor', 'Lorem, ipsum dolor lorem ipsum', 'Lorem, ipsum dolor.']},
      nav2: { headline: 'Najpopularniejsze wpisy', elements: ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor', 'Lorem, ipsum dolor lorem ipsum', 'Lorem, ipsum dolor.']}
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
