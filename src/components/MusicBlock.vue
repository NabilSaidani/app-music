<script>
</script>

<template>

</template>

<style scoped>
/* STYLES DES TUILES AFFICHANT LES PRODUITS */
#playlist>div.product {
  /* Taille & ombre des tuiles */
  width: 300px;
  margin: 10px;
  -webkit-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
}

div.product>.product__image>img {
  /* Style de l'image dans les tuiles produit */
  width: 100%;
}

div.product>.product__actions,
div.product>.product__name,
div.product>.product__description,
div.product>.product__actions {
  /* Style des autre blocs de la tuile (hors image) */
  padding: 5px 10px 0 10px;
}

div.product>.product__actions {
  /* Style de la partie "actions" de la tuile (favoris / panier) */
  padding-top: 10px;
  padding-bottom: 10px;
}

div.product>.product__actions>.add-to-favorites {
  /* Style du bouton d'ajout aux favoris */
  width: 25px;
  height: 25px;
  background-image: url(/src/assets/common/favorite-off.png);
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}

div.product>.product__actions>.add-to-favorites.active {
  background-image: url(/src/assets/common/favorite-on.png);
}
</style>