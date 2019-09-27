<template>
  <div class="layout">
    <Layout>
      <Header>Header</Header>
      <Content>
        <Button type="success" long @click="login()">提交</Button>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  methods: {
    login: function() {
      this.$router.push("/home");
    }
  }
};
</script>