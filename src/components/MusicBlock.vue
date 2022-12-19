<script>
export default {
  data() {
    return {
      playlist: "Hit 2022",
      image: "./assets/images/hit-2022.jpg",
    };
  },
};
</script>

<template>
  <div class="playlist">
    <div class="playlist__image"><img :src="product.image" /></div>
    <h3 class="playlist__name">{{ product.name }}</h3>
  </div>
</template>

<style scoped>
/* STYLES DES TUILES AFFICHANT LES PRODUITS */
#playlist > div.playlist {
  /* Taille & ombre des tuiles */
  width: 300px;
  margin: 10px;
  -webkit-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
}

div.playlist > .playlist__image > img {
  /* Style de l'image dans les tuiles produit */
  width: 100%;
}

div.playlist > .product__actions,
div.playlist > .playlist_name,
div.playlist > .product__description,
div.playlist > .product__actions {
  /* Style des autre blocs de la tuile (hors image) */
  padding: 5px 10px 0 10px;
}
</style>
