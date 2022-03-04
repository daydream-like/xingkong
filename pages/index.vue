<template>
  <div class="container">
    <div class="header">
       <div class="left">left</div>
       <div class="news">NEWS</div>
       <div class="right">right</div>
    </div>
   <Card v-for="item in records" :key="item.name" :card="item"></Card>
   <van-popup v-model="show" round position="left" :style="{ height: '100%',width:'200px' }" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';
import Card from "../components/Card.vue";
Vue.use(Popup);
export default {
  name: 'IndexPage',
  data() {
    return {
      show: false,
      records:[]
    };
  },
  mounted() {
    this.$store.commit('setRecords',this.records)
  },
 async  asyncData(ctx) {
   if(process.browser){
     return;
   }
    const {app} = ctx;
    const {data} = await  app.$axios.get('https://www.fastmock.site/mock/65afb835c3ac52158aa333fa2b8571b4/name/name')
    return { records: data.RECORDS }
  },
   methods: {
    showPopup() {
      this.show = true;
    },
    gotoDetail(name){
      this.$router.push({name:'detail',params:{id:name}})
    }
  },
}
</script>
 <style lang="less">
.container {
  min-height: 100vh;
  background: #FAFAFA;
  .header{
    display: flex;
    background-color: #fff;
    height:82px;
    .left,.news,.right{
      margin: 45px 18px 10px 18px;
      flex:1;
    }
  }
  .item{

  }
}
</style>
