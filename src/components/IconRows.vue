<template>
  <section class="teleporada">
      <div class="row">

        <ul class="icons-list">
          <li v-for="(icon, index) in icons" :key="index" class="icons-list__wrapper">
            <div class="icons-list__icon-container">
              <img :src="icon.iconUrl" alt="alt tag">
            </div>
            <h3 v-text="icon.headline" />
            <p v-text="icon.text" />
          </li>
        </ul>

      </div>
  </section>
</template>

<script>
import Accordeon from './elements/Accordeon'

export default {
  name: 'IconRows',
  components: {
    Accordeon
  },
  data() {
    return {
      icons: [
        { iconUrl: 'X', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'X', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'X', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'X', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'X', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
        { iconUrl: 'X', headline: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt earum esse consequatur eligendi corrupti?" },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
