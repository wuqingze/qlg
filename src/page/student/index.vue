<template>
  <div>
      <navigator/>
      <submit v-bind:honorSubmit="honorSubmit" v-on:submit = "submit"/>    
      <student-table v-on:submit = "submit" v-bind:honorSubmit="honorSubmit"/>
  </div>
</template>
<script>
    import Navigator from '../../components/Navigator'
    import StudentTable from './StudentTable'
    import Submit from './Submit'
    export default{
        components:{
            Navigator,
            StudentTable,
            Submit
        },
        data: function(){
            return{
                honorSubmit : false
            }
        },
        methods: {
            submit: function(msg){
                this.honorSubmit = !this.honorSubmit
            }
        }
    }
</script>
