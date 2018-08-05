<template>
    <div>
        <mt-index-list>
            <mt-index-section :index="item.title" v-for='(item,index) in data' :key='index'>
                <li v-for='(tag,index) in item.items' :key='index' class="cell-content" @click='selected(tag)'>
                    <img v-lazy="tag.avatar" alt="" class="singer-img" width="50" height="50">
                    <span class="singer-name">{{tag.name}}</span>
                </li>
            </mt-index-section>
        </mt-index-list>
        <loading v-show='!data.length'></loading>
    </div>
    
</template>
<script>
import loading from '../loading/loading'
    export default{
        props:['data'],
        methods:{
            selected(item){
                // 将当前点击的传给父元素
                this.$emit('select',item)
            }
        },
        components:{
            loading
        }
    }
</script>
<style scoped>
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

