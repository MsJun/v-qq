<template>
    <div class="player" v-show="playlist.length">
        <div class="normal-player" v-show="fullScreen">
            <div class="top">
                <div class="back" @click.prevent='back'>
                    <i class="icon-back"></i>
                </div>
                <h3>{{currentSong.album}}</h3>
                <h4>{{currentSong.singer}}</h4>
                
            </div>
            <div class="middle">
                <div class="bg"><img :src="currentSong.image" alt=""></div>
            </div>
            <div class="bottom">
                <div class="operators">
                    <div>
                        <i class="icon-sequence"></i>
                    </div>
                    <div>
                        <i class="icon-prev"></i>
                    </div>
                    <div>
                        <i class="icon-pause"></i>
                    </div>
                    <div>
                        <i class="icon-next"></i>
                    </div>
                    <div>
                        <i class="icon icon-not-favorite"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class='min-player' v-show='!fullScreen' @click='open'>
            <div class="left">
                <div class="icon">
                    <img :src="currentSong.image" alt="">
                </div>
                <div class="info">
                    <h3>{{currentSong.album}}</h3>
                    <p>{{currentSong.singer}}</p>
                </div>
            </div>
            <div class="right">
                <div class="control">
                    <i class="icon-mini icon-pause-mini"></i>
                </div>
                <div class="control">
                    <i data-v-1030556c="" class="icon-playlist"></i>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
// 播放组件展示需要播放器中有数据和是否全屏展示
import {mapGetters,mapMutations} from 'vuex'
   export default{
        created(){
            console.log(this.currentSong)
        },
        methods:{
            //  点击向下箭头的时候，将全屏切换成false
            back(){
                console.log(111)
                this.setFullScreen(false)
            },
            open(){
                this.setFullScreen(true)
            },
            ...mapMutations(['setFullScreen'])        
       },
       computed:{
           ...mapGetters(['fullScreen','playlist','currentSong'])
       }
   } 
</script>
<style scoped>
    .normal-player{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        width: 100%;
        height: 100%;
        background: #222;
    }
    .top{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 80px;
        text-align: center;
    }
    .top .back{
        position: absolute;
        top:0;
        left:0;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        transform: rotate(-90deg);
        color:#ffcd32;
    } 
    .top h3{
        line-height: 40px;
        color:#fff;
    }
    .top h4{
        color:#fff;
    }
    .middle .bg{
        padding-top:80px;
        text-align: center;
        border-radius: 50%;
    }
    .middle .bg img{
        border-radius: 50%;
    }
    .bottom{
        width: 100%;
        position: absolute;
        bottom:50px;
        left:0;
    }
    .bottom .operators{
        width: 100%;
        display: flex;
        color:#ffcd32;
        font-size: 30px;
        align-items: center; 
    }
    .bottom .operators div{
        width: 20%;
        text-align:center; 
    }
    .icon-pause{
        font-size: 40px;
    }
    .min-player{
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        height: 60px;
        display: flex;
        background: #333;
        z-index: 99;
        align-items: center;
        justify-content:space-between;
    }
    .min-player .left{
        display: flex;
    } 
    .min-player .left .info{
        display: flex;
       flex-direction:column;
       justify-content:center;
       font-size: 14px;
    }
    .min-player .info h3{
        margin-bottom:4px;
        color:#fff;
    }
    .min-player .info p{
        color:rgba(255,255,255,0.3);
    }
    .min-player .icon{
        width: 40px;
        height:40px;
        padding:0 20px;
    }
    .min-player .icon img{
        max-width:40px;
        border-radius: 50%;
    }
    .right{
        display: flex;
        align-items: center;
        color:#ffcd32;
    }
    .control{
        font-size: 32px;
        padding:0 10px;
    }
   
</style>

