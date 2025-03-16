<script>
import navigationComp from './components/navBar.vue'
export default {
  name: 'App',
  components: {
    navigationComp,
  }
}
</script>


<template>
  <div>
    <navigationComp></navigationComp>
    <router-view></router-view>
  </div>
</template>
