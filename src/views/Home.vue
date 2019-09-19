<template>
  <Entries :entries="entries" :onChange="sortEntries" :limit="limit"/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Entries from '@/components/Entries.vue'; // @ is an alias to /src
@Component({
  components: {
    Entries,
  },
})
export default class Home extends Vue {
  private entries: any[] = [];
  private categories: string[] = [];
  private url = 'https://api.publicapis.org/entries';
  private limit: number | undefined = 10;
  private mounted() {
    if (this.$route.name === 'entries') {
      this.url = 'https://api.publicapis.org/entries?category=' + encodeURIComponent(this.$route.params.category);
      this.limit = undefined;
    }
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.entries = data.entries;
        this.entries.sort((one, two) => (one.API > two.API ? 1 : -1));
      });
  }

  private sortEntries(event: any) {
    let value: string;
    value = event.target.value;
    if (value === 'desc') {
      this.entries.sort((one, two) => (one.API > two.API ? -1 : 1));
    } else if (value === 'asc') {
      this.entries.sort((one, two) => (one.API > two.API ? 1 : -1));
    }
  }
}
</script>
<style scoped lang="scss">
/* home */
#home {
  padding: 30px 0;
  background: #f5f5f5;
  min-height: 300px;
}
</style>
