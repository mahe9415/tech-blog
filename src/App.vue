<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="navbar"></router-view>
    <router-view name="posts"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}
</style>
