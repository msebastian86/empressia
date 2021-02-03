<template>
  <div class="rank">
        <span v-for="index in 5" :key="index" :class="`star ${color}`">
            <StarSvg :class="(index > rank) ? 'off' : ''" />
        </span>
  </div>
</template>

<script>
import StarSvg from '../../assets/images/icons/ui/star-empty.svg';

export default {
  name: 'Rank',
  props: {
    rank: {
        type: Number,
        default: 5,
    },
    color: {
        type: String,
        default: 'green',
    }
  },
  components: {
    StarSvg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rank {
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 1;
}

.star {
    display: inline-block;
    margin-right: 2px;

    path {
        opacity: 1;
    }

    .off {
        path {
            opacity: 0.3;
        }
    }

    &.green {
        path {
            fill: map-get($colors, green);
        }
    }

    &.green-dark {
        path {
            fill: map-get($colors, green-dark);
        }
    }
}
</style>
