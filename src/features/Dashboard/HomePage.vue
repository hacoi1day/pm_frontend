<template>
  <div class="dashboard">
    <nav-bar></nav-bar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 no-padding">
          <left-bar></left-bar>
        </div>
        <div class="col-md-10">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftBar from './components/LeftBar.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar, LeftBar },
  name: 'home',
  data () {
    return {

    };
  },
  methods: {
    
  }
}
</script>

<style>
.dashboard {

}
</style>