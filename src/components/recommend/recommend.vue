<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="wrapper" :data='disclist'>
      <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for='(item,index) in bannerlist' :key='item.id'>
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <div class="title">
        <h3>热门歌单推荐</h3>
      </div>
      <div class="discList">
      <ul>
        <li v-for='item in disclist' :key='item.dissid'>
          <div class="icon">
            <img v-lazy="item.imgurl" alt="" width="60" height="60">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
    </div>
    <loading v-show="!disclist.length"></loading>
    </scroll>
    
    
  </div>
</template>
<script>
import loading from '../../base/loading/loading'
import {getRecommend,getDiscList} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config.js'
import scroll from '../../base/scroll/scroll'
  export default{
    data(){
      return{
        bannerlist:[],
        disclist:[]
      }
    },
    created(){
      this.getbannerlist()
      this._getDiscList()
    },
    methods:{
      getbannerlist(){
        getRecommend().then(res=>{
          console.log(res)
          if(res.code==ERR_OK){
            this.bannerlist = res.data.slider
          }
        })
      },
      _getDiscList(){
        getDiscList().then(res=>{
          console.log(res)
          if(res.code==ERR_OK){
            this.disclist = res.data.list
          }
        })
      },
    },
    mounted() {
     
    },
    components:{
      scroll,
      loading
    }
  }
</script>
<style scoped>
.recommend{
  position: fixed;
  top:88px;
  width: 100%;
  left:0;
  bottom:0;
}
.recommend-content{
  height: 100%;
  overflow: hidden;
}
.mint-swipe{
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.mint-swipe a{
  width: 100%;
  display: block;
}
.mint-swipe img{
  width: 100%;
  height: 100%;
  display: block;
}
.title{
  width: 100%;
  height: 65px;
  line-height: 65px;
  text-align: center;
  color:#ffcd32;
}
.discList{
  padding:0 20px;
}
.discList li{
  margin-bottom:20px;
  display: flex;
}
.discList li .icon{
  margin-right:20px;
}
.text{
  display: flex;
  flex-direction:column;
  justify-content:center;
  aligin-items:center;
}
.text .name{
  font-size: 14px;
  margin-bottom:10px;
}
.text .desc{
  color:rgba(255,255,255,0.3);
  font-size: 14px;
}
</style>


