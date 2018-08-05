<template>
  <div>
      <ul class="nav">
          <li>
              <router-link to='/recommend'>推荐</router-link>
          </li>
           <li>
              <router-link to='/singer'>歌手</router-link>
          </li>
           <li>
              <router-link to='/rank'>排行</router-link>
          </li>
           <li>
              <router-link to='/search'>搜索</router-link>
          </li>
      </ul>
  </div>
</template>
<script>
  export default{
    
  }
</script>
<style scoped>
.nav{
    width: 100%;
    height: 44px;
    line-height: 44px;
}
.nav li{
    float: left;
    width: 25%;
    text-align: center;
}
.router-link-exact-active.router-link-active{
    color:#ffcd32;
    border-bottom:2px solid #ffcd32;
}
</style>


