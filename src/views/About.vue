<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in userList" :key="item.id">{{"姓名：" + item.id+"————————姓名：" + item.name+"——————————年龄：" + item.age}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      userList: []
    };
  },
  methods: {
    userListData() {
      this.$ajax
        .get("/interface/getUserList")
        .then(res => {
          console.log(res.data.data); // node的返回的数据在data中
          this.userList = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.userListData();
  }
};
</script>
<style lang="scss" scoped>
.about {
  ul {
    color: chocolate;
  }
}
</style>
