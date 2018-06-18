<template>
  <div class="m-header">
    <h4>音乐</h4>
    <span class="username">
      <i class="icon-mine"></i>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.m-header{
    text-align:center;
    height:44px;
    line-height: 44px;
    color:#ffcd32;
    position: relative;
    h4{
      display: inline-block;
      background: url(./logo@2x.png) no-repeat left center;
      background-size:30px 32px; 
      padding-left:40px;

    }
    .username{
      position: absolute;
      top:4px;
      right:20px;
      i{
        font-size: 20px;
      }
    }
}
</style>
