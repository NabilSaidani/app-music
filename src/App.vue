<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
  components: { MainHeader, MainFooter },
  data() {
    return {
    }
  },
};
</script>

<template>
  <MainHeader />
  <router-view></router-view>
  <MainFooter />
</template>

<style scoped>

</style>
