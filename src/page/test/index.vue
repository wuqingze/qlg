<template>
  <div>
      <!-- test port
      {{port}} -->
    <file-upload/>
  </div>
</template>


<script>
import ajax from '@/ajax'
import FileUpload from './FileUpload'
export default {
  data: function(){
      return {
          port: ""
      }
  },
  components:{FileUpload},
  mounted:function(){
    //   const vm = this
    //   $.ajax({
    //       url: "http://localhost:8192/test/port",
    //       success: function(d){
    //         //   alert(d)
    //         vm.port = d
    //       }
    //   });
    
    // ajax({
    //     url:'/test/port',
    //     success:function(msg){
    //         vm.port = msg
    //     }
    // })

    // this.GLOBAL.ajax({
    //     url: '/test/port',
    //     success: function(msg){
    //         vm.port = 'hello world'+msg
    //     }
    // })

    // this.GLOBAL.ajax({
    //     url: '/test/sessionid',
    //     success: function(msg){
    //         vm.port = msg
    //     }
    // })
  }
}
</script>
