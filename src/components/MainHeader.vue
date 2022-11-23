<script>
</script>

<template>
    <nav class="side-nav">
        <div class="wrapper">
            <div class="nav-bloc n-2">
                <div class="sub-nav">
                    <img src="../assets/images/logodeezer.webp" alt="Le logo de deezer">
                    <ul>
                        <li>
                            <RouterLink v-bind:to="{name:'playlist-view'}">Playlist</RouterLink>
                        </li>
                        <li>
                            <RouterLink v-bind:to="{name:'favoris-view'}">Favoris</RouterLink>
                        </li>
                        <li>
                            <RouterLink v-bind:to="{name:'contact-view'}">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- <div class="main-nav">
    <nav>
      <ul>
        <a href="#">
            <img src="../assets/images/logodeezer.webp" alt="Le logo de deezer">
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
  </div> -->
</template>

<style scoped>
::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #222;
    font-family: Raleway, Helvetica, sans-serif;
    position: relative;
}

/* New Stacking Context with Fixed */
.side-nav {
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
}

/* To hide the sub-nav */

.sub-nav {
    padding: 0px;
    width: 200px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: #333;
    z-index: -1;
    color: white;
}

.sub-nav h2 {
    font-family: open sans, sans-serif;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
}

.sub-nav ul {
    list-style-type: none;
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


.main-content {
    padding-left: 75px;
    color: #f3f3f3;
}

.main-content h1 {
    font-family: Open Sans, sans-serif;
    text-align: center;
    margin: 30px 0;
    font-size: 40px;
}

.main-content p {
    max-width: 780px;
    margin: 0 auto;
    padding: 0 30px;
    line-height: 1.7;
}
</style>
