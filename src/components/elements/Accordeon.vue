<template>
  <section class="accordeon accordeon--primary" :aria-closed="isClosed" ref="accordeon">
      <a href="#" v-text="title" class="accordeon__title" @click="toggleAccordeon"/>
      <div href="#" v-html="text" class="accordeon__content" />
  </section>
</template>

<script>
export default {
  name: 'Accordeon',
  props: {
      title: String,
      text: String
  },
  data() {
      return {
          isClosed: true,
      }
  },
  methods: {
      toggleAccordeon: function(e) {
          e.preventDefault();
          this.isClosed = !this.isClosed;
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .accordeon {
        margin: 0 0 16px 0;
        width: 100%;
        display: block;

        &__title, &__content {
            width: 100%;
        }

        &__title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-height: 92px;
            border-radius: 5px;
            text-decoration: none;
        }

        &> :last-child {
            margin-bottom: 0;
        }

        &[aria-closed="true"] {
            .accordeon__content {
                display: none;
            }
        }

        &--primary {
            .accordeon__title {
                background: $blue;
                color: white;
            }
        }
    }
</style>
