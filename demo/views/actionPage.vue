<template>
  <div class="action-page">
    <div style="text-align: center;">
      <ui-button @click="show.bottom=true">底部</ui-button>
      <ui-button @click="show.center=true">中部</ui-button>
      <ui-button @click="show.top=true">顶部</ui-button>
    </div>

    <div class="box" ref="box">
      <p>插入指定元素</p>
    </div>

    <ui-action :show.sync="show.top" position="top" :mount-to="()=>$refs.box">
      <div class="action-block"></div>
    </ui-action>
    <ui-action :show.sync="show.center" position="center" width="50%" :height="200">
      <div class="action-block center"></div>
    </ui-action>
    <ui-action :show.sync="show.bottom">
      <div class="action-block"></div>
    </ui-action>
  </div>
</template>

<script>
export default {
  name: "action-page",
  components: {},
  data() {
    return {
      show: {
        top: false,
        center: false,
        bottom: false
      },
      mounted: false
    };
  },
  mounted() {
    console.log("page mounted");
    this.mounted = true;
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" rel="stylesheet/less">
.action-page {
  height: 100%;
  padding-top: 20px;

  .box {
    text-align: center;
    margin: 10px;
    border: 1px solid #e5e5e5;
    height: 500px;
    background-color: #fff;

    p {
      line-height: 2;
    }
  }

  .action-block {
    background-color: #fff;
  }
}
</style>
