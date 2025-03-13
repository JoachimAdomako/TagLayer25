<script>
import navigationComp from './components/navigation.vue'
export default {
  name: 'App',
  components: {
    navigationComp
  }
}
</script>


<template>
  <div>
    <navigationComp></navigationComp>
    <router-view></router-view>
  </div>
</template>
