<script>
export default {
  data() {
    return {
      post: [],
    };
  },
  methods: {
    getPost() {
      fetch(
        "https://y9z7x9ray4.execute-api.eu-west-1.amazonaws.com/default/ecvApiExample?domain=Contact"
      )
        .then(response => response.json())
        .then(data => this.post = data)
    }
  },
  mounted() {
    this.getPost()
  }
};
</script>

<template>
  <h1>Contact</h1>
  <h2>Formuaire :</h2>
  <div id="main-content">
    <form action="#" method="post">
      <p>
        <label for="nom">Nom :</label>
        <input id="nom" type="text" name="nom" />
      </p>
      <p>
        <label for="prenom">Prénom :</label>
        <input type="text" name="prenom" id="prenom" />
      </p>
      <p>
        <label for="email">Email :</label>
        <input type="text" name="email" id="email" />
      </p>
      <p>
        <label for="message">Message :</label>
        <textarea name="message" id="user_message"></textarea>
      </p>
      <p class="button">
        <button type="submit" v-on:click="envoyerLeMessage()">
          Envoyer le message
        </button>
      </p>
    </form>
  </div>
</template>

<style scoped>
#main-content {
  background-color: #333;
  color: white;
}

#nom {
  margin: 10px;
}

#prenom {
  margin: 10px;
}

#email {
  margin: 10px;
}

input[type="text"] {
  width: 20%;
  padding: 14px 22px;
  margin: 8px 0;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

h1 {
  background-color: #333;
  color: white;
}

h2 {
  background-color: #333;
  color: white;
}
</style>
