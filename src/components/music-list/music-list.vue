<template>
    <div class="music-list">
        <div class="back" @click="back">
            <i class="icon-back"></i>
        </div>
        <h1 v-html="title" class="title"></h1>
        <div :style="{backgroundImage:'url('+bgImage+')'}" class="bgimg" ref='bgImage'>
            <div class="mask"></div>
            <div class="playall" ref="playall" v-show="songs.length">
                <span class="icon-play"></span>
                <span>随机播放全部</span>
            </div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <scroll :data='songs' class="list" @scroll="scroll"
            :listen-scroll="listenScroll" :probe-type="probeType" ref="list">
            <div class="songs-list">
                <songlist :songs='songs' @select='playsong'></songlist>
            </div>
        </scroll>
        <loading v-show="!songs.length"></loading>
    </div>
</template>
<script>
import songlist from '../../base/song-list/song-list'
import scroll from '../../base/scroll/scroll'
import loading from '../../base/loading/loading'
import {mapActions,mapMutations} from 'vuex'
    export default{
        props:{
            bgImage:{
               type:String,
               default:''
           },
            songs:{
                type:Array,
                default:[]

            },
            title:{
                type:String,
                default:''
            }
        },
        data(){
            return{
               scrollY:0
            }
        },
        created(){
            //console.log(this.bgImage)
            this.listenScroll = true
            this.probeType = 3
        },
        methods:{
            back(){
                console.log(1)
                this.$router.back()
            },
            // 监听滚动事件
            // pos滚动的距离
            scroll(pos){
                // console.log(pos)
                // 拿到滚动的距离
                this.scrollY = pos.y
            },
            //  获取从子组件传入的当前歌曲的信息和索引
            playsong(playcur,index){
                console.log(playcur,index)
                // 调用actions中的方法，将当前歌手的歌曲列表和当前歌曲的索引传入
                // 这样vuex中的就有相应的数据
                this.selectplay({
                    list:this.songs,
                    index:index
                })
            },
           // ...mapActions(['selectplay'])
            ...mapActions(['selectplay'])
        },
        computed:{
            
        },
        mounted(){
            // 由于图片设定是一个比例，不能设置一个固定的值，所以下面滚动的盒子距离上面的高度就是图片的高度
            // 图片的距离
             this.imageHeight = this.$refs.bgImage.offsetHeight
             //设置下面滚动的位置
             this.$refs.list.$el.style.top = `${this.imageHeight}px`
        },
        watch:{
            // 监听滚动的距离
            scrollY(newY){
                // 设置最小滚动距离
                //向上是负值
                let minScroll = -this.imageHeight+40
                let zIndex = 0;
                // 如果滚动的距离比最小值还小
                if(newY<minScroll){
                    // 等于最小值
                    newY = minScroll
                    // 设置图片的高度
                    this.$refs.bgImage.style.height='40px'
                    this.$refs.bgImage.style.paddingTop = 0;
                    zIndex = 2
                    this.$refs.playall.style.display='none'
                }else{
                    this.$refs.bgImage.style.height='0'
                    this.$refs.bgImage.style.paddingTop = '70%';
                    this.$refs.playall.style.display='block'
                    zIndex = 0
                }
                // 当向下拉动的时候，图片会进行放大
                // 设置下拉，当下拉的时候图片放大
                let scale = 1;
                // 设置一个公式
                const percet = Math.abs(newY/this.imageHeight)
                // 当下拉的时候
                if(newY>0){
                    scale = 1+percet
                }

                this.$refs.bgImage.style.zIndex = zIndex
                this.$refs.layer.style.transform = `translateY(${newY})px`
                this.$refs.bgImage.style.transform = `scale(${scale})`
                
            }
        },
        components:{
            songlist,
            scroll,
            loading
        }
    }
</script>
<style scoped>
.music-list{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    height: 100%;
    width: 100%;
}
.back{
    width: 42px;
    height: 42px;
    text-align: center;
     z-index:4;
    position: absolute;
}
.icon-back{
    color:#ffcd32;
    display: block;
    line-height: 42px;
   
}
.title{
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color:#fff;
    position: absolute;
    top:0;
    left:0;
    right:0;
    margin:auto;
    z-index:3;
}
.bgimg{
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    -webkit-transform-origin: top;
    transform-origin: top;
    background-size: cover;
}
.mask{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,0.4);
}
.playall{
    position: absolute;
    bottom:20px;
    margin:auto;
    left:0;
    right:0;
    width: 135px;
    border-radius: 100px;
    padding:7px 0;
    text-align: center;
    font-size: 14px;
    color:#ffcd32;
    border:1px solid #ffcd32;
}
.songs-list{
    z-index: 999;
    background: #222;
}
.bg-layer{
    height: 100%;
    background: #222;
    position: relative;
}
.list{
    position: fixed;
    left:0;
    bottom:0;
    width: 100%;
    height: 100%;
    
    /* padding-top:20px; */
    /* overflow:hidden; */
}
</style>

