<template>
    <div id="page-home">
        <Header :menuItems="menuItems"/>
        <main>
          <MainText />
          <TeleporadaText />
          <Faq />
          <Testimonials />
          <IconRows />
          <NewsletterBlock />
        </main>
        <Footer :menuItems="menuItems" />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainText from '../components/MainText.vue'
import TeleporadaText from '../components/TeleporadaText.vue'
import Faq from '../components/Faq.vue'
import Testimonials from '../components/Testimonials.vue'
import IconRows from '../components/IconRows.vue'
import NewsletterBlock from '../components/NewsletterBlock.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    MainText,
    TeleporadaText,
    Faq,
    Testimonials,
    IconRows,
    NewsletterBlock,
    Footer
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
