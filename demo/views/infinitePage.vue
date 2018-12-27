<template>
  <div class="infinite-page">
    <header class="head">
      <div class="search"></div>
    </header>
    <section class="body">
      <ui-infinite :onInfinite="infinite" :onRefresh="refresh" @scrollEnd="scrollEnd" ref="list" :offset="300">
        <p v-for="i in list">item</p>
      </ui-infinite>
    </section>

    <footer class="foot">
      <button>按钮</button>
    </footer>
  </div>
</template>

<script>
  export default {
	name: 'infinite-page',
	components: {},
	data() {
	  return {
		list: 0,
	  }
	},
	mounted() {
	},
	methods: {
	  refresh() {
		this.list = 0
	  },
	  infinite(done) {
		console.log('load')
		setTimeout(() => {
		  this.list += 10
		  if (this.list < 50) {
			done()
		  }
		  else {
			done(true)
		  }
		}, 500)
	  },

	  scrollEnd(y) {
		sessionStorage.setItem('y', y)
	  },
	},
	computed: {},
	watch: {
	  list(now) {
		sessionStorage.setItem('list', now)
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .infinite-page {
    background-color: #f7f7f7;
    height: ~'calc(100% - 40px)';
    position: relative;
    padding: 40px 0 50px;

    .head {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      height: 40px;
      background-color: #f3f3f3;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      z-index: 1;
      padding: 8px;

      .search {
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
      }
    }

    .body {
      position: relative;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    .foot {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #fff;
      height: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);

      button {
        height: 100%;
        width: 100%;
        background-color: #409EFF;
        color: #fff;
        font-size: 16px;
        border: 0;
      }
    }

    p {
      padding: 8px 10px;
    }
  }
</style>
