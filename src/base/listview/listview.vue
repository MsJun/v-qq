<template>
       <scroll 
       class="listview" 
       :data='data' 
       ref='listview'
       :listenScroll='listenScroll'
       @scroll='scroll'
       >
            <ul>
                <li v-for="(item,index) in data" :key='index' ref='listGroup'>
                    <h2 class="title">{{item.title}}</h2>
                    <ul class="sigerlist">
                        <li v-for="(tag,index) in item.items" :key='index'
                        @click='curItem(tag)' 
                        >
                            <img v-lazy="tag.avatar" alt="" class="sigerImg">
                            <p class="sigerName">{{tag.name}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
           <div class="shortcutlist">
                <ul>
                    <li
                    v-for='(item,index) in shortcutList' 
                    :key='index'
                    @click='getindex(index)'
                    :class='{act:curIndex==index}'
                    >{{item}}</li>
                </ul>
           </div>
        <!-- <mt-index-list>
            <mt-index-section :index="item.title" v-for='(item,index) in data' :key='index'>
                <li v-for='(tag,index) in item.items' :key='index' class="cell-content" @click='selected(tag)'>
                    <img v-lazy="tag.avatar" alt="" class="singer-img" width="50" height="50">
                    <span class="singer-name">{{tag.name}}</span>
                </li>
            </mt-index-section>
        </mt-index-list> -->
        <loading v-show='!data.length'></loading>
        <div class="fixed-title" v-show="fixedTitle">
            {{fixedTitle}}
        </div>
        
       </scroll>
    
    
</template>
<script>
import scroll from '../scroll/scroll'
import loading from '../loading/loading'
    export default{
        props:{
            data:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                curIndex:0,
                listenScroll:true,
                scrollY:0,
                listHeight:[0]
            }
        },
        methods:{
            // 获取当前点击的歌曲
            curItem(item){
                this.$emit('selected',item)
            },
            // 获取当前的索引
            getindex(index){
                this.curIndex = index
                var _index = index;
                // 对应左侧列表的下标
               this.$refs.listview.scrollToElement(this.$refs.listGroup[_index])
            },
            // 列表滚动时,获取滚动的Y值得距离
            scroll(pos){
                //console.log(pos.y)
                this.scrollY = pos.y
            },
            //计算列表的距离的高度
            _calculationHeight(){
                let num = [];
                //获取每一个li
                num = this.$refs.listGroup
                let height = 0
                num.forEach(item=>{
                    // 将每一个li的高度获取
                    height+=item.offsetHeight
                    this.listHeight.push(height)
                    //console.log(this.listHeight)
                })

            }
        },
        created(){
            
            //console.log(this.data)
            // this.listenScroll = true
        },
        // 右侧快速入口
        computed:{
            shortcutList(){
                return this.data.map(item=>{
                    return  item.title
                })
            },
            //固定头部,判断当前索引,取到对应的title
            fixedTitle(){
                if(this.scrollY>0){
                    return ''
                }
                return this.data[this.curIndex].title?this.data[this.curIndex].title:''
            }
        },
        watch:{
            data(){
                setTimeout(()=>{
                    this._calculationHeight()
                },1000)
            },
            scrollY(newY){
                //console.log(111)
                //console.log(-newY)
                //当滚动到顶部
                // 滚动的时候如果大于零，就让当前索引等于0
                if(newY>0){
                    this.curIndex = 0;
                    return
                }
                //滚动到中间位置
                let listHeight = this.listHeight
                for(var i = 0;i<listHeight.length-1;i++){
                    let height1 = listHeight[i]
                    let height2 = listHeight[i+1]
                    if(-newY>height1&&-newY<height2){
                        this.curIndex = i
                    }
                }
                //this.curIndex = listHeight.length - 2

            }
        },
        components:{
            loading,
            scroll
        }
    }
</script>
<style scoped>
.fixed-title{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 30px;
    background: #333;
    line-height: 30px;
    color:#fff;
    padding-left:10px;
}
.listview{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #333;
    padding-left: 10px;
    color:#fff;
}
.listview>ul{
    width: 100%;
}
.sigerlist li{
    height: 50px;
    padding:10px;
    display: flex;
    color:#fff;
    font-size:14px;
    -ms-flex-item-align: center;
    line-height: 50px;
} 
.sigerlist li img{
    width: 50px;
    height: 50px;
    margin-right:10px;
    border-radius: 50%;
}
.shortcutlist{
    position: fixed;
    top:50%;
    right:10px;
    transform: translateY(-50%);
    width: 20px;
    text-align: center;
    padding:10px 0;
    background: #333;
    border-radius:10px;
    font-size: 12px;
}
.shortcutlist li{
    padding:2px;
}
.shortcutlist li.act{
    color:#ffcd32;
}
.cell-content{
    height: 70px;
    padding-left: 30px;
    line-height: 70px;
    display: flex;
    align-items: center;
}
.singer-img{
    border-radius: 50%;
    margin-right:30px;
}
.singer-name{
    color:rgba(255,255,255,0.5);
    font-size: 14px;
}


</style>

