<template>
    <div class="song-list">
        <ul>
            <li v-for='(item,index) in songs' :key='index' @click='playcur(item,index)'>
                <h3>{{item.name}}</h3>
                <p>{{getinit(item)}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['songs'],
        created(){

        },
        methods:{
            getinit(item){
               return `${item.singer}·${item.album}`
            },
            //  点击播放列表，将当前点击的歌曲和当前歌曲的索引传给父组件
            playcur(playcur,index){
                this.$emit('select',playcur,index)
            }
        }
       
    }
</script>
<style scoped>
.song-list{
    padding:20px 30px 0;
}
.song-list li{
    height: 64px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    font-size: 14px;
}
.song-list li h3{
    color:#fff;
    margin-bottom:10px;
}
.song-list li p{
    color:rgba(255,255,255,0.3);
}
</style>

