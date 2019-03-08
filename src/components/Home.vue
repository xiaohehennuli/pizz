<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button @click="gotomenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      gotomenu(){
        //点击跳转到菜单页面
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>

<style>
#home{
  background: url('../../src/assets/pizza.jpg');
  height: 85vh;
  padding: 10%;
}

h1,h2{
  margin: 6%;
}

.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
