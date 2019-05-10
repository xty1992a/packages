<template>
  <div class="collapse-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-collapse v-model="openPanel">
        <ui-collapse-item title="国家" value="1">
          <p>美国</p>
          <p>中国</p>
          <p>日本</p>
        </ui-collapse-item>
        <ui-collapse-item title="文字" value="2">
          <p>一些文字</p>
          <p>一些文字</p>
          <p>一些文字</p>
          <p>一些文字</p>
        </ui-collapse-item>
      </ui-collapse>
    </section>
    <h3 class="title">互斥用法</h3>
    <section>
      <ui-collapse v-model="openPanel1" radio>
        <ui-collapse-item title="国家" value="1">
          <p>美国</p>
          <p>中国</p>
          <p>日本</p>
        </ui-collapse-item>
        <ui-collapse-item title="文字" value="2">
          <p>一些文字</p>
          <p>一些文字</p>
          <p>一些文字</p>
          <p>一些文字</p>
        </ui-collapse-item>
      </ui-collapse>
    </section>
  </div>
</template>

<script>
export default {
  name: "collapse-demo",
  data() {
    return {
      openPanel: ["1"],
      openPanel1: ["1"]
    };
  }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "../styles/variable";

.collapse-demo {
  padding: 10px;

  section {
    .shadow;
  }

  p {
    padding: 10px;
  }
}
</style>
