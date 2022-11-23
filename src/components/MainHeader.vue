<script></script>

<template>
  <div class="nav-bar">
    <nav>
      <ul>
        <a href="#">
            <img src="../assets/image/logodeezer.webp" alt="Le logo de deezer">
        </a>
        <li>
          <a href="#">Playlist</a>
        </li>

        <li>
          <a href="#">Favoris</a>
        </li>

        <li>
            <RouterLink v-bind:to="{name:'contact-view'}">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
