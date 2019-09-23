<template>
   <RandomEntry :randomEntry="random" :onClick="fetchRandom"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
import { getRandomEntry } from '@/services/Api';
import RandomEntry from '@/components/Random.vue'; // @ is an alias to /src

@Component({
  components: {
    RandomEntry,
  },
})
export default class Random extends Vue {
  private random: Entry | null = null;

  private mounted() {
    // get random entry
    getRandomEntry().then((value) => this.random = value);
  }
  //  handle button click to show another random
  private fetchRandom(event: any) {
    // get random entry
    getRandomEntry().then((value) => this.random = value);
  }
}
</script>
<style scoped lang="scss">
</style>
