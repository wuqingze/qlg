<template>
  <div>
      <form name="Form2" action="http://localhost:8192/user/fileUpload2" method="post"  enctype="multipart/form-data" id="file">
            <p>采用multipart提供的file.transfer方法上传文件</p>
            <input type="file" name="file" v-on:change="upload">
        </form>
        
        <button v-on:click="upload">upload</button>
  </div>
</template>

<script>
import ajax from '@/ajax'
export default {
    methods:{
        doUpload: function () {  
            alert("file upload")
            var formData = new FormData($( "#uploadForm" )[0]);  
            alert(formData)
            this.GLOBAL.ajax({  
                url: '/file/upload' ,  
                type: 'POST',  
                data: formData,  
                async: false,  
                cache: false,  
                contentType: false,  
                processData: false,  
                success: function (returndata) {  
                    alert(returndata);  
                },  
                error: function (returndata) {  
                    alert(returndata);  
                }  
            });  
        },
        upload: function(){
            var f = new FormData(document.getElementById("file"));
            $.ajax({
                 type:"post",
                processData:false,
                contentType:false,
                url: "http://localhost:8192/file/upload",
                data: f,
                success: function(res){ 
                    console.log(JSON.stringify(res))
                    console.log(res)
                    alert(res)
                }
            })
        }
    }
}
</script>

<style>

</style>
