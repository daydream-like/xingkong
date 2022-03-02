<template>
  <div class="container">
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-card
      class="item"
      v-for="item in records"
      :key="item.picture"
      :thumb="item.picture"
      :title="item.main_title"
      :desc="item.description"
      >
    </van-card>
   <van-popup v-model="show" round position="left" :style="{ height: '100%',width:'200px' }" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup,Card } from 'vant';
Vue.use(Popup).use(Card);
export default {
  name: 'IndexPage',
  data() {
    return {
      show: false,
      records:[]
    };
  },
 async  asyncData({app}) {
    const {data} = await  app.$axios.get('https://www.fastmock.site/mock/65afb835c3ac52158aa333fa2b8571b4/name/name')
    return { records: data.RECORDS }
  },
   methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<style>
.container {
  min-height: 100vh;
}

.title {
  font-family:
    Quicksand,
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
