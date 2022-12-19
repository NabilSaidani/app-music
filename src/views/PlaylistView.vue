<script>
export default {
    data() {
        return {
          title: "Playlist",
            listOfPlaylist: [
                { name: "Hits 2022", image: "../src/assets/images/Hits2022.jpeg"},
                { name: "Rock 90s", image: "../src/assets/images/Rock90s.jpeg" },
                { name: "Rap US", image: "../src/assets/images/RapUS.jpeg" },
                { name: "Hellfest", image: "../src/assets/images/Hellfest.jpeg" },
                { name: "Noël", image: "../src/assets/images/Noel.jpeg" },
                { name: "Classique", image: "../src/assets/images/Classique.jpeg" },
            ],
        };
    },
}
</script>
<template>
    <div class="playlist" v-for="playlist of listOfPlaylist">
      <div class="playlist__image"><img :src="(playlist.image)" /></div>
        <h2 class="playlist__name">{{ playlist.name }}</h2>
    </div>
</template>

<style scoped>
#playlist>div.playlist {
  width: 200px;
  margin: 10px;
  -webkit-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
}

div.playlist>.product__actions,
div.playlist>.playlist_name,
div.playlist>.product__description,
div.playlist>.product__actions {
  padding: 5px 10px 0 10px;
}
</style>
