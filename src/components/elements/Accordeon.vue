<template>
  <section class="accordeon accordeon--primary" :aria-closed="`${isClosed}`" ref="accordeon">
      <a href="#" class="accordeon__title" @click="toggleAccordeon">
          {{ title }}
          <DownSvg class="pointer" />
      </a>
      <div href="#" v-html="text" class="accordeon__content" />
  </section>
</template>

<script>
import DownSvg from '../../assets/images/icons/ui/chevron-down.svg';

export default {
  name: 'Accordeon',
  props: {
      title: String,
      text: String
  },
  components: {
      DownSvg
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
        @extend .large;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-height: 56px;
        border-radius: 4px;
        text-decoration: none;
        padding: 16px 38px 16px 16px;
        font-weight: bold;
        position: relative;

        .pointer {
            width: 12px;
            height: 12px;
            position: absolute;
            right: 16px;
        }
    }

    & > :last-child {
        margin-bottom: 0;
    }

    .accordeon__content {
        padding: 0 16px 16px 16px;
        border-radius: 4px;

        &> :last-child {
            margin-bottom: 0;
        }
    }

    &[aria-closed="true"] {
        .accordeon__content {
            display: none;
        }
    }

    &[aria-closed="false"] {
        .accordeon__title {
            .pointer {
                transform: rotate(180deg);
            }
        }
    }

    &--primary {
        .accordeon__title {
            background: map-get($colors, blue);
            color: white;

            .pointer {
                path {
                    fill: white;
                }
            }

            &:hover {
                background: darken(map-get($colors, blue), 10%);
            }
        }

        .accordeon__content {
            background: white;
        }

        &[aria-closed="false"] {
            .accordeon__title {
                background-color: white;
                color: map-get($colors, blue);

                .pointer {
                    path {
                        fill: map-get($colors, blue);
                    }
                }
            }
        }
    }
}

@include breakpoint-lg {
    .accordeon {
        &__title {
            min-height: 92px;
            padding: 32px 60px 32px 32px;

            .pointer {
                right: 27px;
            }
        }

        .accordeon__content {
            padding: 0px 32px 32px 32px;
            box-shadow: 24px 32px 54px rgba(39,33,99,0.12);
        }
    }
}
</style>
