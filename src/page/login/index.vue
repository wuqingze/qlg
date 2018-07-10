<template>
  <div id="loginbody" >
        <div style="background-color:#EEEEEE;" class="loginclass">
                        <h1 class="page-header">
                            用户登陆
                        </h1>
                        <form class="form-horizontal" >
                            <div class="form-group">
                                
                                <label for="inputEmail3" class="col-md-3 control-label">
                                    用户名
                                </label>
                                <div class="col-md-9" >
                                    <input type="text" class="form-control" name="username" placeholder="emeil/username" v-model="s_id"/>
                                </div>
                            </div>
                            <div class="form-group">
                                
                                <label for="inputPassword3" class="col-md-3 control-label">
                                    密码
                                </label>
                                <div class="col-md-9">
                                    <input type="password" class="form-control" name="password" placeholder="password" v-model="password"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                   <p style="color:red">`</p>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <div class="checkbox">
                                        
                                        <label>
                                            <input type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button class="btn btn-primary" v-on:click="login()">
                                        登陆
                                </button>
                            </div>
                            <div class="col-sm-offset-9" col-sm-3>
                                <a href="./register.html">新用户注册</a>
                            </div>
                        </div>
                    </div>
          
  </div>
</template>
<script>
    export default{
        data: function(){
            return {
                s_id: "",
                password: ""
            }
        },
        methods:{
            login: function(event){
                const vm = this
                // alert('Hello ' + this.s_id + '!')
                this.GLOBAL.ajax({
                    url: '/userlogin',
                    data: {
                        s_id: vm.s_id,
                        password: vm.password
                    },
                    success: function(msg){
                        // alert(msg+'loginvue')
                        vm.$router.push('/student')
                    }
                })
            }
        }
    }
</script>
<style>
    #loginbody{
    background-image: url("../../../static/images/loginBackground2.jpg") ;
    }
    .loginclass{
        width: 400px;
        height: 400px;
        display: block;
        float: right;
        margin-right: 50px;
        margin-top: 50px;
    }
</style>
