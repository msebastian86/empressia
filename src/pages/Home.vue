<template>
    <div id="page-home">
        <Header :menuItems="menuItems"/>
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
    CookiesBlock
  },
  props: {
    msg: String
  },
  data() {
      return {
        menuItems: [
            {title: 'O mnie', link: '#' },
            {title: 'O mnie', link: '#' },
            {title: 'O mnie', link: '#' },
            {title: 'O mnie', link: '#' },
        ]
      }
  },
}
</script>

<style scoped lang="scss">
</style>
