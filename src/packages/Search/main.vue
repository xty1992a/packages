<template>
  <div class="ui-search">
    <transition>
      <div class="top" @click="tap" v-show="!inputFocus">
        <icon icon="search"/>
        <span>{{placeholder}}</span>
      </div>
    </transition>
    <div class="down">
      <input type="search" ref="input" @input="print" :value="value" @search="search" @blur="inputBlur">
      <button @click="cancel">取消</button>
    </div>
  </div>
</template>
<script>
  import Icon from '../Icon'

  export default {
	name: 'search',
	props: {
	  value: String,
	  placeholder: String,
	},
	components: {Icon},
	data() {
	  return {
		inputFocus: false,
	  }
	},
	methods: {
	  tap() {
		this.inputFocus = true;
		this.$refs.input.focus();
	  },
	  inputBlur() {
		console.log('blur');
		this.inputFocus = false;
	  },
	  cancel() {
		this.$emit('input', '')
	  },
	  print(e) {
		this.$emit('input', e.target.value);
	  },
	  search() {
		this.$emit('search', this.value);
	  },
	},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">
  .ui-search {
    height: 40px;
    position: relative;
    padding: 8px;

    .top {
      /*display: none;*/
      position: absolute;
      bottom: 8px;
      right: 8px;
      top: 8px;
      left: 8px;
      background-color: #fff;
      border-radius: 4px;
      text-align: center;
      color: #999;

      span {
        font-size: 14px;
      }
    }

    .down {
      height: 100%;
      display: flex;

      input {
        flex: 1;
        padding: 0 15px;
        border: 0;
      }

      button {
        background-color: transparent;
        padding: 0 10px;
        border: 0;
      }
    }
  }
</style>
