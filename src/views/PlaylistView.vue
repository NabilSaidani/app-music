<script>
import MusicBlock from '@/components/MusicBlock.vue';

export default {
  components: { MusicBlock },
  data() {
    return {
      title: "Playlist",
      productList: [],
    }
  },
  async mounted(){
        //chargement de la list des produits depuis l'API
        let requestUrl = "https://sbtem2f2il.execute-api.eu-west-1.amazonaws.com/default/deezerProxyApi?playlist=699296985"
        let requestOptions = {
          method: 'GET',
        }

        const response = await fetch(requestUrl, requestOptions);
        const jsonContent = await response.json();

        let messageErreur = ""; 
        if(response.status == '400'){
          this.messageErreur = "Impossible de charger l'url API";           
        }

        console.log(response.status);
        for(let productFromApi of jsonContent['data']){
          console.log('cover',productFromApi.cover)
          this.productList.push({
            name:productFromApi.title,
            image: productFromApi.cover,
          })
        }
      }

};
</script>

<template>
  <h1>Playlist</h1>
  
</template>

<style scoped>

</style>
