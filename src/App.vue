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
  <MainHeader/>
  <router-view ></router-view>
  <h1>A vous de coder ! Vinoth t'es un bon on va tué ça</h1>
  <MainFooter/>
</template>

<style scoped>

</style>
