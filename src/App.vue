<template>
  <div id="app">
   <mheader></mheader>
   <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import mheader from './components/header/m-header'
import tab from './components/tab/tab'
export default {
  name: 'App',
  components:{
    mheader,
    tab
  }
}
</script>

<style>

</style>
