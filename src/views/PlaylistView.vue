<script>
export default {
  data() {
    return {
      sonlistMoment: [
        {
          name: "Hit 2022",
          //   description: "Appareil d'écoute radiophonique ou téléphonique.",
          image: "casque.jpeg",
        },
        {
          name: "Rock 90s",
          //   description: "C'est une banane jaune qui est importé du brésil.",
          image: "banane.jpeg",
        },
        {
          name: "Rap Us",
          //   description: "Pour allumer le feu.",
          image: "briquet.jpeg",
        },
        {
          name: "Hellfest",
          //   description: "Pour allumer le feu.",
          image: "briquet.jpeg",
        },
        {
          name: "Noël",
          //   description: "Pour allumer le feu.",
          image: "briquet.jpeg",
        },
        {
          name: "Classique",
          //   description: "Pour allumer le feu.",
          image: "briquet.jpeg",
        },
      ],
    };
  },
};
</script>

<template>
  <h1>Playlist</h1>

  <div id="main-content">
    <h2>{{ title }}</h2>
    <div id="playlist">
      <ProductBlock />
      <div class="playlistmoment" v-for="playlistmoment of sonlistMoment">
        <div class="playliste__image">
          <img v-bind:src="getImageUrl(product.image)" />
        </div>
        <h3 class="playlist__name">{{ product.name }}</h3>
        <p class="playlist__description">
          {{ product.description
          }}<!-- Appareil d'écoute radiophonique ou téléphonique comprenant deux
          écouteurs montés sur un support formant serre-tête. -->
        </p>
        <!-- <div class="product__actions">
          <div
            :class="getFavoriteClasses(product.isFavorite)"
            v-on:click="addToFavorite(product)"
          ></div>
          <div class="add-to-cart"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
