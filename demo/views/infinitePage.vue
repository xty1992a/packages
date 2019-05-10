<template>
  <div class="infinite-page">
    <header class="head">
      <ui-search v-model="searchStr" @search="searchHandler" placeholder="搜索关键字"/>
    </header>
    <section class="body">
      <ui-infinite
        :onInfinite="infinite"
        :onRefresh="refresh"
        @scrollEnd="scrollEnd"
        ref="list"
        :offset="300"
      >
        <p v-for="i in list" :key="i">item{{i}}</p>
      </ui-infinite>
      <div class="top-btn" v-show="topShow" @click="backTop">top</div>
    </section>

    <footer class="foot">
      <ui-button type="primary" size="large">按钮</ui-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "infinite-page",
  components: {},
  data() {
    return {
      list: 0,
      topShow: false,
      searchStr: ""
    };
  },
  mounted() {},
  methods: {
    searchHandler(str) {
      console.log(str);
      this.list = 0;
      this.$refs.list.loadOver(false);
    },
    refresh() {
      this.list = 0;
    },
    infinite(done) {
      console.log("load");
      setTimeout(() => {
        this.list += 10;
        if (this.list < 50) {
          done();
        } else {
          done(true);
        }
      }, 500);
    },

    scrollEnd(y) {
      console.log(y);
      this.topShow = y > 400;
      sessionStorage.setItem("y", y);
    },
    backTop() {
      this.$refs.list.moveTo(0);
    }
  },
  computed: {},
  watch: {
    list(now) {
      sessionStorage.setItem("list", now);
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
.infinite-page {
  background-color: #f7f7f7;
  height: 100%;
  position: relative;
  padding: 40px 0 50px;

  .head {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    height: 40px;
  }

  .body {
    position: relative;
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    .top-btn {
      position: fixed;
      right: 10px;
      bottom: 80px;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      text-align: center;
      line-height: 50px;
    }
  }

  .foot {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    height: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    button {
      height: 100%;
    }
  }

  p {
    padding: 8px 10px;
  }
}
</style>
