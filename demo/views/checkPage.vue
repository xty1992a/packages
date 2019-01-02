<template>
  <div class="switch-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-check-group v-model="state" radio>
        <ui-check-item v-for="it in stateList" :key="it.value" :value="it.value" :label="it.label"/>
      </ui-check-group>
    </section>
    <h3 class="title">多选</h3>
    <section>
      <ui-check-group v-model="pickedState">
        <ui-check-item v-for="it in stateList" :key="it.value" :value="it.value" :label="it.label"/>
      </ui-check-group>
    </section>
    <h3 class="title">禁用</h3>
    <section>
      <ui-check-group v-model="pickedState" disabled>
        <ui-check-item v-for="it in stateList" :key="it.value" :value="it.value" :label="it.label"/>
      </ui-check-group>
    </section>
    <h3 class="title">单个check</h3>
    <section>
      <ui-cell title="婚否" @click="isMerry=!isMerry">
        <ui-check-item slot="right-icon" :value="isMerry"/>
      </ui-cell>
    </section>
    <h3 class="title">单个禁用</h3>
    <section>
      <ui-cell title="婚否">
        <ui-check-item slot="right-icon" v-model="isMerry" disabled/>
      </ui-cell>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'switch-demo',
	components: {},
	data() {
	  return {
		state: 'USA',
		stateList: [
		  {value: 'USA', label: '美国'},
		  {value: 'China', label: '中国'},
		  {value: 'Japan', label: '日本'},
		],
		pickedState: [],
		isMerry: false,
	  }
	},
	created() {
	},
	methods: {},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../styles/variable";

  .switch-demo {
    padding: 10px;
    background-color: #f7f7f7;

    section {
      .shadow;
    }

    p {
      padding: 10px;
    }
  }
</style>
