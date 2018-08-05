<template>
     <div class="singer">
        <div class="singer-content" ref="wrapper">
          <listview :data='singers' @select="getselect"></listview>
        </div>
        <router-view></router-view>
     </div>      
</template>
<script>
let hot = '热'
let hotlenth = 10;
import {getSingerList} from '../../api/singer.js' 
// 引入组件
import listview from '../../base/listview/listview.vue'  
import {mapMutations} from 'vuex'
    export default{
        data(){
            return{
                singers:[]
            }
        },
        created(){
            this._getSingerList()
        },
        methods:{
            // 将Mutations的方法映射过来
            ...mapMutations({
                setSinger:'SET_SINGER'
            }),
            // 接受当前点击的元素的id
            // 进行跳转到详情页
            getselect(data){
                //console.log(data.id)
                this.$router.push({
                    path:`/singer/${data.id}`
                })
                // 将当前数据挂在到vuex；上
                this.setSinger(data)
            },
            _getSingerList(){
                getSingerList().then(res=>{
                    //console.log(res.data.list)
                    //console.log(this.__normalizeSinger(res.data.list))
                    this.singers = this.__normalizeSinger(res.data.list)
                })
            },
            // 处理数据
            __normalizeSinger(list){
                //声明一个对象，先将前10条hot数据进行填充
                let map = {
                    hot:{
                        title:hot,
                        items:[]
                    }
                }
                list.forEach((item,index)=>{
                    // 将前10条看成热门
                    if(index<hotlenth){
                        map.hot.items.push({
                            id:item.Fsinger_mid,
                            name:item.Fsinger_name,
                            avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                        })
                    }
                    // 我们将A,B,C,D看成对象的键，值是一个对象，其中有两个属性，一个title，一个是数组
                    // var map = {
                    //     A:{
                    //         title:A,
                    //         items:[{id:'',name:'',avatar:''},{id:'',name:'',avatar:''}]
                    //     },
                    //     B:{
                    //         title:B,
                    //         items:[{id:'',name:'',avatar:''},{id:'',name:'',avatar:''}]
                    //     }
                    // }
                    // A:{
                    //   title:A,
                    //   items:[{id:'',name:'',avatar:''}]}
                    // 首先判断当前map中有没有A这个键
                    // 如果没有创建一个空de
                    if(!map[item.Findex]){
                        map[item.Findex] = {
                            title:item.Findex,
                            items:[]
                        }
                    }
                    map[item.Findex].items.push({
                        id:item.Fsinger_mid,
                        name:item.Fsinger_name,
                        avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
                    })
                })
                //为了得到一个有序数组，我们将map进行处理
                let hotlist = [];
                let res = [];
                for(let k in map){
                    if(map[k].title.match(/[a-zA-Z]/)){
                        res.push(map[k])
                    }else if(map[k].title==hot){
                        hotlist.push(map[k]) 
                    }
                }
                //得到一个有序的，我们需要对数据进行排序
                res.sort((a,b)=>{
                    return a.title.charCodeAt(0)-b.title.charCodeAt(0)
                })
                return hotlist.concat(res)
            }
        },
        components:{
            listview
        }
    }
</script>
<style scoped>
.singer{
    position: fixed;
    top:88px;
    left:0;
    bottom:0;
    width: 100%;
}
.singer-content{
    height: 100%;
    overflow: hidden;
}


</style>

