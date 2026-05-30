<script setup lang="ts">
import PaysService from "@/services/PaysService.ts";
import { onMounted, ref } from "vue";
import type { Pays } from "@/typings/Pays.ts";
import { Field, Form, defineRule, configure, ErrorMessage } from "vee-validate";
import { localize, setLocale } from '@vee-validate/i18n';
import fr from '@vee-validate/i18n/dist/locale/fr.json';

defineRule('validerEntreePays', validerEntreePays);

configure({
  generateMessage: localize({
    fr,
  }),
});
setLocale('fr');

const paysService = new PaysService();
const listePays = ref<Pays[]>([]);
const pays = ref<Pays | undefined>(undefined);
const score = ref<number>(0);
const entree = ref<string>('');

let compteur = 1;
let nombres: number[] = [];
onMounted(async () => {
  listePays.value = await paysService.recupererToutLesPays();
  for (let i = 0; i < listePays.value.length - 1; i++) {
    nombres[i] = i;
  }
  nombres.sort(() => Math.random() - 0.5);
  pays.value = listePays.value[nombres[0]];
})

/**
 * Permet de générer un nouveau nomber aléatoire
 * 
 * @returns {number} Le nouveau nombre
 */
function genererNouveauNombre(): number {
  let nombreAleatoire: number;
  if (compteur >= nombres.length) {
    compteur = 0;
    nombres.sort(() => Math.random() - 0.5);
    nombreAleatoire = nombres[compteur];
    compteur++;
  } else {
    nombreAleatoire = nombres[compteur];
    compteur++;
  }
  return nombreAleatoire;
}

/**
 * Permet de changer de pays
 */
function changerPays() {
  let nombreAleatoire = genererNouveauNombre();
  pays.value = listePays.value[nombreAleatoire];
  console.log(pays.value?.translations.fra.common);
}


let valide: boolean;

/**
 * Permet de valider l'entrée utilisateur d'un pays
 */
function validerEntreePays() {
  if (pays.value?.translations.fra.common.trim().toLowerCase() == entree.value.trim().toLowerCase()) {
    valide = true;
    score.value++;
    changerPays();
    entree.value = '';
  } else {
    valide = false;
  }
  return valide;
}
</script>

<template>
  <div class="container">
    <div class="py-5">
      <div>
        <h4 class="text-center text-uppercase fw-semibold">{{ score }} pts</h4>
        <div v-if="pays">
          <div class="text-center m-5 p-5 bg-body-tertiary border rounded">
            <img :src="pays.flags.svg" :alt="pays.flags.alt" class="img-fluid" width="500px">
          </div>
          <div class="mt-5">
            <Form @submit="validerEntreePays">
              <div class="mb-3">
                <label for="pays" class="form-label">Nom du pays</label>
                <Field name="pays" type="text" class="form-control" id="inputPays" v-model="entree"
                  rules="validerEntreePays" />
                <ErrorMessage name="pays" class="text-danger" />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-lg btn-success me-3">Valider</button>
                <button class="btn btn-lg btn-primary" @click="changerPays()">Suivant</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
