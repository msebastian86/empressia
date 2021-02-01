<template>
  <header class="header header--home">
      <nav class="navigation">
        <ul class="menu">
          <li v-for="(item, index) in menuItems" :key="`${index} ${Math.random()}`">
            <a :href="item.link" :title="item.title" v-text="item.title" />
          </li>
        </ul>
        <a href="#" class="navigation__button">Zapisz się na wizytą on-line</a>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    menuItems: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
