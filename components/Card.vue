<!-- Please remove this file from your project -->
<template>
  <div class="card">
      <van-image
      width="100%"
      height="194px"
      fit="cover"
      :src="card.picture"
     />
    <div class="content">{{card.keywords}}</div>
    <div class="data">
      <div class="data-item"></div>
      <div class="data-item">view:3800</div>
      <div class="data-item">like:3800</div>
    </div>
    <van-button type="info">Read More</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Image as VanImage,Button } from 'vant';

Vue.use(VanImage).use(Button);
export default {
  name: 'Card',
  props:{
    card:{
      type:Object,
      default:{}
    }
  },
  mounted(){
    console.log(this.card)
  }
}
</script>

<style lang="less" scoped>
  .card{
    position: relative;
    margin: 17px;
    height: 347px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px 1px rgba(219,219,219,1);
    border-radius: 17px 17px 17px 17px;
    opacity: 1;
    .content{
      margin-top: 10px;
      height: 41px;
      padding: 0 18px;
      font-size: 17px;
     display: -webkit-box;
     overflow: hidden;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
    }
    .data{
      margin-top: 14px;
      display: flex;
      padding-left: 19px;
      padding-right: 19px;
      .data-item{
        flex: 1;
      }
    }
    .van-button{
      position: absolute;
      width: 78px;
      height: 32px;
      padding: 0;
      background: #1B69FD;
      border-radius: 6px 6px 6px 6px;
      opacity: 1;
      font-size: 14px;
      bottom: 17px;
      right: 16px;
    }
  }
</style>
