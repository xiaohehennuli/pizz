<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input 
                type="email"
                class="form-control"
                v-model="email"
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password"
                >
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="confirmPassword"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return {
        email:'',
        password:'',
        confirmPassword:''
      }
   },
    methods:{
      onSubmit(){
        //判断两次密码一不一致
         if(this.password === this.confirmPassword){
           //如果一直创建一个数组把数据放入里面
           const formData = {
             email:this.email,
             password:this.password,
             confirmPassword:this.confirmPassword
           }
           //提交到野狗数据库，因为配置了全局默认地址，所以只需要/user.json
           axios.post('/users.json',formData)
                .then(res => this.$router.push({name:'loginLink'}))
                //注册成功跳转到登录页面
                                      
         }else{
           alert('两次密码不一样哦！')
         }
        }
      }
    }
  

</script>
