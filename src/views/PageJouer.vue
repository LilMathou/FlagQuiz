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

// TODO : FIXER LE FAIT QUE LES DRAPEAUX PEUVENT ÊTRE MIS 2 FOIS

function genererNouveauNombre(): number {
  const min: number = 0;
  const max: number = 249;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

onMounted(async () => {
  listePays.value = await paysService.recupererToutLesPays();
  pays.value = listePays.value[0];
})

function changerPays() {
  let nombreAleatoire = genererNouveauNombre();
  pays.value = listePays.value[nombreAleatoire];
  console.log(pays.value?.translations.fra.common);
}

let valide: boolean;
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
