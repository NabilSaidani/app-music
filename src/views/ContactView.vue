<script></script>

<template>
  <h1>Formulaire :</h1>
  <div id="main-content">
    <form action="#" method="post">
      <p>
        <label for="nom">Nom</label>
        <input id="nom" type="text" name="nom" />
      </p>
      <p>
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom" />
      </p>
      <p>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
      </p>
      <p>
        <label for="message">Message :</label>
        <textarea name="message" id="user_message" cols="30" rows="10"></textarea>
      </p>
      <p class="button">
        <button type="submit">Envoyer le message</button>
      </p>
    </form>
  </div>
</template>

<style scoped></style>
