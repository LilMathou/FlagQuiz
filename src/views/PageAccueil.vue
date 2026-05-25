<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="text-center py-5">
      <h1 class="display-1 fw-bold">Connais-tu tous les drapeaux ?</h1>
      <p class="lead">Teste tes connaissances géographiques avec le jeu de devinette de drapeaux le plus complet du web.
        Chronomètre, niveaux de difficulté, et scores en temps réel.</p>
      <RouterLink class="btn btn-primary btn-lg" :to="{ name: 'Jouer' }">Jouer maintenant <i
          class="bi bi-arrow-right"></i></RouterLink>
    </div>

    <div class="mt-5 border rounded">
      <h6 class="ms-5 mt-5 text-primary text-uppercase fw-semibold">Comment jouer?</h6>
      <h2 class="display-5 ms-5">En 3 étapes simples</h2>

      <div class="row text-center p-5">
        <div class="col">
          <h5><span class="badge rounded-pill text-bg-primary">1</span> Un drapeau s'affiche</h5>
          <p class="text-muted small">Un drapeau mystère apparaît à l'écran</p>
        </div>
        <div class="col">
          <h5><span class="badge rounded-pill text-bg-primary">2</span> Trouve le pays</h5>
          <p class="text-muted small">Écrie le nom du pays affiché</p>
        </div>
        <div class="col">
          <h5><span class="badge rounded-pill text-bg-primary">3</span> Accumule des points</h5>
          <p class="text-muted small">Plus tu réponds vite, plus tu marques de points</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
