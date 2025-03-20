<script>
import FooterBar from './components/footerBar.vue';
import navigationComp from './components/navBar.vue'
export default {
  name: 'App',
  components: {
    navigationComp,
    FooterBar,
  }
}
</script>


<template>
  <div>
    <navigationComp></navigationComp>
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>
