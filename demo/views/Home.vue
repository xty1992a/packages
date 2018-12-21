<template>
  <div class="home">
    <section>
      <ul class="list">
        <router-link tag="li" class="item" v-for="route in routes" :key="route.name" :to="{name:route.name}">
          <span>{{route.meta.title}}</span>
        </router-link>
      </ul>
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

    .list {
      padding-left: 10px;

      .item {
        padding: 10px;

        &:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      }
    }
  }
</style>
