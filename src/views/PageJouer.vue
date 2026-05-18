<script setup lang="ts">
import PaysService from "@/services/PaysService.ts";
import {onMounted, ref} from "vue";
import type {Pays} from "@/typings/Pays.ts";

const paysService = new PaysService();
const listePays = ref<Pays[]>([]);
const pays = ref<Pays | undefined>(undefined);

onMounted(async () => {
  listePays.value = await paysService.recupererToutLesPays();
  pays.value = listePays.value[0];
})
</script>

<template>
  <div class="container">
    <div class="text-center py-5">
      <h1 class="display-3">Jouer</h1>

      <h2>Score : 0 | 1/25</h2>
      <div v-if="pays">
        <img :src="pays.flags.png" :alt="pays.flags.alt">
        <form>
          <div class="mb-3">
            <label for="inputPays" class="form-label">Nom du pays</label>
            <input type="text" class="form-control" id="inputPays">
          </div>
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
