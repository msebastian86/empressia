<template>
    <div id="page-home">
        <BurgerMenu :menuItems="menuItems" class="d-lg-none"/>
        <Header :menuItems="menuItems" class="d-none d-lg-block"/>
        <main>
          <MainTextBlock />
          <ProfitBlock />
          <div class="grid-container">
            <hr class="m-0">
          </div>
          <FaqBlock />
          <TestimonialsBlock />
          <IconBlock />
          <NewsletterBlock />
          <CookiesBlock />
        </main>
        <Footer :menuItems="menuItems" />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainTextBlock from '../components/MainTextBlock.vue'
import ProfitBlock from '../components/ProfitBlock.vue'
import FaqBlock from '../components/FaqBlock.vue'
import TestimonialsBlock from '../components/TestimonialsBlock.vue'
import IconBlock from '../components/IconBlock.vue'
import NewsletterBlock from '../components/NewsletterBlock.vue'
import Footer from '../components/Footer.vue'
import CookiesBlock from '../components/CookiesBlock.vue'
import BurgerMenu from '../components/BurgerMenu.vue'

export default {
  name: 'Home',
  components: {
    Header,
    MainTextBlock,
    ProfitBlock,
    FaqBlock,
    TestimonialsBlock,
    IconBlock,
    NewsletterBlock,
    Footer,
    CookiesBlock,
    BurgerMenu
  },
  props: {
    msg: String
  },
  data() {
      return {
        menuItems: [
            {title: 'O mnie', link: '#' },
            {title: 'Opinie', link: '#' },
            {title: 'FAQ', link: '#' },
            {title: 'Galeria', link: '#' },
            {title: 'Blog', link: '#' },
            {title: 'Kontakt', link: '#' },
        ]
      }
  },
}
</script>

<style scoped lang="scss">
</style>
