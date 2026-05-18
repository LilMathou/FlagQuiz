<script setup lang="ts">
const date = new Date();
const annee = date.getFullYear();
</script>

<template>
  <footer class="text-center bg-body-tertiary p-3 mt-5">
    <p>&copy; Flag Quiz</p>
    <p>Mathis St-Onge - {{ annee }}</p>
  </footer>
</template>

<style scoped lang="scss">

</style>
