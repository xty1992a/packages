<template>
  <div class="ui-cell" :class="cls" @click="clickHandler">
    <slot v-if="icon">
      <ui-icon class="cell-icon" :icon="icon"/>
    </slot>
    <div class="ui-cell--title" v-if="title||$slots.title">
      <slot name="title">
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="ui-cell--value" v-if="value||$slots.value">
      <slot name="value">
        <span>{{value}}</span>
      </slot>
    </div>
    <slot name="right-icon" v-if="clickable||$slots['right-icon']">
      <ui-icon class="cell-icon right-icon" icon="arrow-right"/>
    </slot>
  </div>
</template>

<script>
import UiIcon from "../Icon";

export default {
  name: "cell",
  components: { UiIcon },
  props: {
    title: String,
    value: String,
    icon: String,
    size: {
      type: String,
      default: "normal"
    },
    to: {
      type: null
    },
    url: {
      type: String
    },
    clickable: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      if (this.to && this.$router) {
        this.$router.push(this.to);
      }
      if (this.url) {
        window.location = url;
      }
      this.$emit("click", ...arguments);
    }
  },
  computed: {
    cls() {
      let cls = "";
      if (this.clickable) {
        cls += " ui-cell-clickable";
      }
      if (this.border) {
        cls += " ui-hairline--bottom";
      }
      return cls;
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "../../styles/variable";

.ui-cell {
  padding: 10px;
  display: flex;
  font-size: 15px;
  line-height: 24px;

  .cell-icon {
    margin-top: 5px;
    margin-right: 5px;
  }

  .right-icon {
    margin-left: 5px;
  }

  &.ui-cell-clickable {
    .clickable;

    &:after {
      left: -48%;
    }
  }

  .ui-cell--value,
  .ui-cell--title {
    flex: 1;
  }

  .ui-cell--value {
    text-align: right;
    overflow: hidden;
  }
}
</style>
