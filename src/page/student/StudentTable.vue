<template>
  <div class="container-fluid" v-show="studentTableShow">
    <div class="row" >
        <div class="col-md-2">
            <ul class="nav nav-pills nav-stacked" style="background:#f6f6f6;height:100%">
                    <li >
                            <a v-on:click="table = 'sxchzh'" data-toggle="tab">思想成长 </a>
                    </li>
                    <li class="active">
                            <a v-on:click="table = 'shjxx'" data-toggle="tab">实践学习 </a>
                    </li>
                    <li>
                            <a v-on:click="table = 'zhygy'" data-toggle="tab">志愿公益 </a>
                    </li>
                    <li>
                            <a v-on:click="table = 'xshky'" data-toggle="tab">学术科研 </a>
                    </li>
                    <li>
                            <a v-on:click="table = 'wthd'" data-toggle="tab">文体活动 </a>
                    </li>
                    <li>
                           <a v-on:click="table = 'gzll'" data-toggle="tab">工作履历 </a>
                    </li>
                    <li>
                           <a v-on:click="table = 'kjzhsh'" data-toggle="tab">考级证书 </a>
                    </li>
                    <li>
                            <a href="#" data-togg="tab">快速通道</a>
                    </li>
                </ul>
        </div>
        <div class="col-md-10">
            <div>
                <div>
                    <button class="btn btn-primary" style="float:  right;" v-on:click="submit">上传</button>
                </div>
                <honor-table v-for="name in pName" v-show="show(name)" :key="name" v-bind:p-name="name" />
            </div>
        </div>      
    </div>
</div>
</template>
<script>
    import HonorTable from './HonorTable'
    export default{
        props:['honorSubmit'],
        components:{
            HonorTable
        },
        data: function(){
                return{
                        honors: {},
                        pName : ["sxchzh","shjxx","zhygy","xshky","wthd","gzll","kjzhsh"],
                        table: 'shjxx',
                }
        },
        computed: {
                studentTableShow: {
                        get: function(){
                                return !this.honorSubmit
                        },
                        set: function(){
                                
                        }
                }
        },
        mounted: function(){
                // const vm = this
                // this.GLOBAL.ajax({
                //         url: "",
                //         success: function(msg){
                //                 vm.honors = JSON.parse(msg)
                //         }
                // })
                
        },
        methods: {
                show: function(name){
                        return this.table === name
                },
                submit: function(msg){
                        this.studentTableShow = false
                        this.$emit("submit",[])
                }
        }
    }
</script>