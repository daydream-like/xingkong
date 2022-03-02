<template>
  <div>
    <div v-html="items.content"></div>
  </div>
</template>
<script>
export default {
  name:'detail',
  data() {
    return {
      items:{
        content:''
      }
    };
  },
   mounted() {
     const  id = this.$router.currentRoute.params.id;
     const item =  this.$store.state.records.filter(ele=>{
      if(ele.name === id){
        return ele;
      }
    })
    this.items = item[0];
    console.log(item)
  },
}
</script>
<style>
.nuxt-logo {
  height: 180px;
}
</style>
