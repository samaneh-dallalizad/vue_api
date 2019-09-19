<template>
   <RandomEntry :randomEntry="random" :onClick="fetchRandom"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
import RandomEntry from '@/components/Random.vue'; // @ is an alias to /src

@Component({
  components: {
    RandomEntry,
  },
})
export default class Random extends Vue {
  private random: Entry | null = null;

  private mounted() {
    fetch('https://api.publicapis.org/random')
      .then((response) => response.json())
      .then((data) => {
        this.random = data.entries[0];
      });
  }
  private fetchRandom(event: any) {
    fetch('https://api.publicapis.org/random')
    .then((response) => response.json())
    .then((data) => {
      this.random = data.entries[0];
    });
  }
}
</script>
<style scoped lang="scss">
</style>
