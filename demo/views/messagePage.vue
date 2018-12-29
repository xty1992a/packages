<template>
  <div class="message-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-button @click="$message('文字提示')">纯文字</ui-button>
      <ui-button @click="$message('这是一段很长的文本,将会导致换行')">长文字</ui-button>
      <ui-button @click="$message(delay)">设置延时</ui-button>
    </section>
    <h3 class="title">带图标</h3>
    <section>
      <ui-button @click="$message(success)">成功提示</ui-button>
      <ui-button @click="$message(error)">失败提示</ui-button>
      <ui-button @click="$message(question)">警告提示</ui-button>
    </section>
  </div>
</template>

<script>

  export default {
	name: 'message-demo',
	components: {},
	data() {
	  return {
		delay: {
		  message: '延时提示',
		  duration: 3000,
		},
		success: {
		  message: '成功提示',
		  icon: 'success',
		},
		error: {
		  message: '失败提示',
		  icon: 'error',
		},
		question: {
		  message: '警告提示',
		  icon: 'question',
		},
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

  .message-demo {
    padding: 10px;
    background-color: #f7f7f7;

    section {
      .shadow;
      padding: 10px;
      margin-bottom: 10px;
    }

    p {
      padding: 10px;
    }

  }
</style>
