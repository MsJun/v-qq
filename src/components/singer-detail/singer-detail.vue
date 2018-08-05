<template>
    <div class="singer-detail">
       <transition name="slide">
           <musicList :title='title' :songs='songs' :bgImage='bgImage'></musicList>
       </transition>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '../../api/singer.js'
import {createSong} from '../../common/js/song.js'
import musicList from '../music-list/music-list'
export default{
    data(){
        return{
            songs:[],
            title:'',
            bgImage:''
        }
    },
    created(){
        //console.log(this.singer)
        this._getSingerDetail()
        this.title = this.singer.name
        this.bgImage = this.singer.avatar
    },
    methods:{
        _getSingerDetail(){
            //   如果当前没有id则跳转回歌手列表
            if(!this.singer.id){
                this.$router.push({path:'/singer'})
            }
            // 根据mapGetter映射过来的歌手id，拿到歌手详情
            getSingerDetail(this.singer.id).then(res=>{ 
                if(res.code==0){
                    //console.log(res.data.list)
                    // 对数据进行处理
                    this. songs = this._normalizeSongs(res.data.list)
                    console.log(this.song)
                }
            }) 
        },
        //定义方法用来处理数据
        _normalizeSongs(list){
            // 遍历数据，我们想拿到每个数组中的musicData,并且push到一个新的数组
            let arr = []
            list.forEach(item=>{
                let {musicData} = item
                // 根据我们想要的数据
                arr.push(createSong(musicData))
            })
            return arr
        }
    },
    computed:{
        // 将数据映射过来
        ...mapGetters(['singer']),
    },
    components:{
        musicList
    }
}
    
</script>
<style scoped>
.singer-detail{
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    bottom:0;
    left:0;
    margin:auto;
    background: #222;
    z-index: 99;
}
 .slide-enter-active, .slide-leave-active{
    transition: all 0.3s
 }
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
}
</style>

