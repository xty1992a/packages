<template>
  <div class="home">
    <section>
      <ui-cell
              v-for="route in routes"
              :title="route.meta.title"
              :key="route.name"
              :to="route"
              clickable
              border
      ></ui-cell>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'home',
	components: {},
	data() {
	  return {}
	},
	created() {
	},
	methods: {},
	computed: {
	  routes() {
		return this.$router.options.routes.filter(it => it.name !== 'home')
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .home {
    padding: 10px;
    height: 100%;

    section {
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

  }
</style>
