<template>
    <div class="container-fluid" v-show="honorSubmit">
    <div class="row">
        <button class="btn btn-default" v-on:click="submitBack"><span class="glyphicon glyphicon-arrow-left"></span>返回</button>
    </div>
    <div  class="row">
        <div class="col-md-10">
            <form class="form-horizontal" role="form" method="post"  enctype="multipart/form-data" id="file">
                <div class="form-group">
                    <label for="firstname" class="col-sm-2 control-label">主题</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="theme">
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label">简介</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="introduction">
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label">类别</label>
                    <div class="col-sm-2">
                        <select class="form-control" v-model="pName">
                            <option v-for="(v,k) in pNames" :value="k" :key="k">{{v}}</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label">详细介绍</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" rows="3" style="height:367px" v-model="explanation"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="lastname" class="col-sm-2 control-label">证明材料</label>
                    <div class="col-sm-10">
                        <input type="file" name="file" v-on:change="fileUpload">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-10"></div>
                    <div class="col-sm-1">
                        <button class="btn btn-default" ng-click="submit_honor(theme,introduction,p_name,explanation)">提交</button>
                    </div>
                    <div class="col-sm-1">
                        <button type="submit" class="btn btn-default">取消</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['honorSubmit'],
    data: function(){
        return{
            pNames : {"sxchzh":"思想成长","shjxx":"实践学习","zhygy":"志愿公益","xshky":"学术科研","wthd":"文体活动","gzll":"工作履历","kjzhsh":"考级证书"},
            pName: "sxchzh",
            explanation: "",
            introduction: "",
            theme: ""
        }
    },
    methods: {
        submitBack: function(){
            this.$emit("submit",[])
        },
        test: function(){
            alert(this.p)
        },
        fileUpload: function(){
            const vm = this
            
            var f = function(){
                var honorFile = new FormData(document.getElementById("file"));
                // vm.GLOBAL.ajax({
                //     type:"post",
                //     processData:false,
                //     contentType:false,
                //     url: "/file/upload",
                //     data: honorFile,
                //     success: function(res){ 
                //         alert(res)
                //     }   
                // })  

                $.ajax({
                 type:"post",
                processData:false,
                contentType:false,
                url: "http://localhost:8192/file/upload",
                data: honorFile,
                success: function(res){ 
                    // console.log(JSON.stringify(res))
                    // console.log(res)
                    alert(res)
                }
            })
            }

            setTimeout(f, 1000);
        }
    }
}
</script>

<style>

</style>

