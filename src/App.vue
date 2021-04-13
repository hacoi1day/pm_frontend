<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
    <notifications position="bottom right"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
