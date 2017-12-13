<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import NewEmployee from './components/NewEmployee';
export default {
  name: 'app',
  components: {
    Navbar,
    NewEmployee
  }
}
</script>

<style>
  nav {
    margin-bottom:10px;
  }
</style>
