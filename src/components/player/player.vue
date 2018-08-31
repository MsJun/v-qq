<template>
    <div class="player" v-show="playlist.length">
        <transition name="normal">
        
        
        <div class="fullscreen-player" v-show="fullScreen">
            <div class="top">
                <div class="back" @click="isFullscreen(false)">
                    <i class="icon-back"></i>
                </div>
                <h3>{{currentSong.album}}</h3>
                <h5>{{currentSong.singer}}</h5>
            </div>
            <div class="songImg">
                <img :src="currentSong.image" alt="">
            </div>
            <div class="bottom-btn">
                <ul>
                    <li>
                        <i class="icon-sequence"></i>
                    </li>
                    <li>
                         <i class="icon-prev"></i>
                    </li>
                    <li>
                        <i class="icon-play"></i>
                    </li>
                     <li>
                         <i class="icon-next"></i>
                    </li>
                    <li>
                         <i class="icon-favorite"></i>
                    </li>
                </ul>
            </div>
        </div>
        </transition>
        <transition name="mini">
        <div class="min-player" v-show="!fullScreen" @click='isFullscreen(true)'>
            <div class="min-plager-content">
                <img :src="currentSong.image" alt="">
                <div class="min-content">
                    <h3>{{currentSong.album}}</h3>
                    <h4>{{currentSong.singer}}</h4>
                </div>
            </div>
            <div class="min-icon">
                <i class="icon-playlist"></i>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
    export default{
        data(){
            return{

            }
        },
        created(){
            console.log(this.currentSong)
        },
        methods:{
            // 设置全屏/最小化
            isFullscreen(flag){
                this.setFullScreen(flag)
            },
            ...mapMutations(['setFullScreen'])
        },
        computed:{
            ...mapGetters([
                'fullScreen',
                'playlist',
                'currentSong'
            ])
        }
    }
</script>
<style scoped lang="scss">
.normal-enter-active, .normal-leave-active{
    transition: all 0.4s;
    .top, .bottom-btn{
          transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
    }
}
.normal-enter, .normal-leave-to{
    opacity: 0;
}
.mini-enter-active, .mini-leave-active{
    transition: all 0.4s;
}
.mini-enter, .mini-leave-to{
    opacity: 0;
}
.min-player{
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
    background: #000;
    z-index:99;
    display: flex;
    padding:0 10px 0 20px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    .min-plager-content{
        display: flex;
        align-items: center;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .min-content{
           color:#fff;
            font-size: 12px;
            margin-left:10px; 
            h4{
                color:#333;
                margin-top:6px;
            }
        }
    }
}
.min-icon{
    color:#ffcd32;
    font-size: 26px;
}
.fullscreen-player{
    width: 100%;
    height: 100%;
    position: absolute;
    background:#000;
    z-index: 99;
    top:0;
    left:0;
    color:#fff;
    background-size:cover; 
    background-repeat: no-repeat;
}
.top{
    width: 100%;
    text-align: center;
    position: relative;
    h3{
        line-height: 40px;
    }
}

.back{
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color:#ffcd32;
    transform: rotate(-90deg);
    position: absolute;
}
.songImg{
    width: 80%;
    height: 300px;
    position:absolute;
    left:50%;
    top:10%;
    margin-left:-40%;
    //animation: router 4s linear infinite;
}
@keyframes router {
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
}
.songImg img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
    border-radius: 50%;
}
.bottom-btn{
    position: fixed;
    bottom:10%;
    left:0;
    width: 100%;
    ul{
        display: flex;
        align-items: center;
    }
    li{
        width: 20%;
        text-align: center;
        i{
            display: inline-block;
            font-size: 26px;
            color:#ffcd32;
        }
        &:nth-child(3){
            i{
                font-size: 36px;
            }
        }
    }
    
}

</style>

