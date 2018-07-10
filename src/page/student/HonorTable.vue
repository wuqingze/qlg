<template>
    <div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>
                    分类
                </th>
                <th>
                    主题
                </th>
                <th>
                    简介
                </th>
                <th>
                    状态
                </th>
                <th>
                    预览文件
                </th>
                <th>
                    上传时间
                </th>
            </tr>
        </thead>
        <tbody>
                <!-- class="{{(honor.checked==1)?'warning':'active'}}" -->
            <tr v-for="honor in honors"  v-bind:key="honor.h_id" >  
                <td>
                    {{honor.p_name}}
                </td>
                <td>
                    {{honor.theme}}
                </td>
                <td>
                    {{honor.introduction}}
                </td>
                <td>
                    {{(honor.checked==1)?"已审核":"未审核"}}
                </td>
                <td>
                    <a href="">文件</a>
                </td>
                <td>
                    {{honor.time}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
    export default{
        props: ['pName'],
        data: function(){
            return {
                honors: [{p_name:'hhh',theme:'jjj',introduction:'kkk',checked:1,time:'hhh'},]
            }
        },
        mounted: function(){
            const vm = this            
            this.GLOBAL.ajax({
                url: "/honors/queryByPName",
                data: {
                    pName: vm.pName
                },
                success: function(msg){
                    // alert(msg)
                    vm.honors = JSON.parse(msg)
                }
            })
        }
    }
</script>