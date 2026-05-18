<script setup lang="ts">
import PaysService from "@/services/PaysService.ts";
import {onMounted, ref} from "vue";
import type {Pays} from "@/typings/Pays.ts";

const paysService = new PaysService();
const listePays = ref<Pays[]>([]);
const pays = ref<Pays>();

onMounted(async () => {
  listePays.value = await paysService.recupererToutLesPays();
})
</script>

<template>

</template>

<style scoped lang="scss">

</style>
