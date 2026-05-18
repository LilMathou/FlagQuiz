<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text-center py-5">
      <h1 class="display-3">Flag Quiz</h1>
      <p class="lead">Amusez-vous à deviner des pays du monde entier !</p>
      <RouterLink class="btn btn-primary btn-lg" :to="{ name: 'Jouer' }">Jouer maintenant</RouterLink>
    </div>

    <div class="mt-5 bg-body-tertiary border rounded">
      <h2 class="display-5 text-center mb-3 mt-3">Comment jouer?</h2>

      <div class="row text-center">
        <div class="col">
          <h5><span class="badge rounded-pill text-bg-primary">1</span> Un drapeau s'affiche</h5>
          <p class="text-muted small">Un drapeau mystère apparaît à l'écran</p>
        </div>
        <div class="col">
          <h5><span class="badge rounded-pill text-bg-primary">2</span> Trouve le pays</h5>
          <p class="text-muted small">Choisis parmi les choix de pays</p>
        </div>
        <div class="col">
          <h5><span class="badge rounded-pill text-bg-primary">3</span> Accumule des points</h5>
          <p class="text-muted small">Plus tu réponds vite, plus tu marques de points</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
