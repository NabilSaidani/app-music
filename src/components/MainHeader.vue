<script>
</script>

<template>
  <nav class="side-nav">
    <div class="wrapper">

        <div class="sub-nav">
          <img class="logo" src="../assets/images/logodeezer.webp" alt="Le logo de deezer" />
          <ul>
            <li>
              <RouterLink v-bind:to="{ name: 'home-view' }">Home</RouterLink>
            </li>
            <li>
              <RouterLink v-bind:to="{ name: 'playlist-view' }">Playlist</RouterLink>
            </li>
            <li>
              <RouterLink v-bind:to="{ name: 'contact-view' }">Contact</RouterLink>
            </li>
            <li>
              <RouterLink v-bind:to="{ name: 'detailPlaylist-view' }"></RouterLink>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>

<style scoped>
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  font-weight: normal;
}

body {
  background: #222;
  font-family: Raleway, Helvetica, sans-serif;
  position: relative;
  display: flex;
}

/* New Stacking Context with Fixed */
.side-nav {
  position:fixed;
  left: 0;
  top: 0;
  font-family: open sans, sans-serif;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 78vh;
  width: 12%;
  margin: 15px;
  padding-top: 10px;
  
}

/* To hide the sub-nav */
.sub-nav {
  padding: 0px;
  width: 200px;
  height: 75vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  z-index: -1;
  color: white;
  padding-bottom: 70px;
}

.sub-nav li {
  padding: 15px 20px;
}

.sub-nav li:hover {
  background: rgba(160, 160, 160, 0.555);
}

.sub-nav li a {
  color: #f2f2f2;
  text-decoration: none;
}

.sub-nav .logo {
  width: 80px;
  height: 80px;
  padding-left: 30%;
}

</style>
