<template>
  <div class="header">
    <h3>qq音乐</h3>
    <div class="username">
      <span class="icon-mine"></span>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
.header{
  height: 44px;
  line-height: 44px;
  text-align: center;
  color:#ffcd32;
  position: relative;
  
}
.header h3{
  display: inline-block;
  padding-left: 34px;
  background: url(./logo@2x.png) no-repeat left center;
  background-size:30px 32px; 
}
.header .username{
  width: 44px;
  height: 44px;
  position: absolute;
  right:0px;
  top:0px;
}
</style>


