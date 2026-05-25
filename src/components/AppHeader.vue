<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand ms-5" :to="{ name: 'Accueil' }">Flag Quiz</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav me-5">
            <li class="nav-item">
              <RouterLink :to="{ name: 'Accueil' }" class="nav-link">Accueil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'Jouer' }" class="nav-link">Jouer</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss"></style>
