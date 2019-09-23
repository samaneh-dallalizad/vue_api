<template>
  <Entries :entries="entries" :onChange="sortEntries" :limit="limit"/>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Entries from '@/components/Entries.vue';
import { getAllEntries, getEntriesFromCategory } from '@/services/Api';
import { Entry } from '../types/Entry';
import { Md5 } from 'ts-md5';
import { __values } from 'tslib';
@Component({
  components: {
    Entries,
  },
})
export default class Home extends Vue {
  private entries: Entry[] = [];
  private limit: number | undefined = 10;
  private mounted() {
    new Promise<Entry[]>((resolve) => {
       if (this.$route.name === 'entries') {
         // get entries from category
         this.limit = undefined;
         resolve(getEntriesFromCategory(this.$route.params.category));
       } else {
         // get all entries
         resolve(getAllEntries());
       }
    }).then((value) => {
        this.entries = value;
        // sort entries by Api title Asc
        this.entries.sort((one, two) => (one.API > two.API ? 1 : -1));
    });
  }

  private sortEntries(event: any) {
    let value: string;
    value = event.target.value;
    if (value === 'desc') {
      // sort entries by Api title desc
      this.entries.sort((one, two) => (one.API > two.API ? -1 : 1));
    } else if (value === 'asc') {
      // sort entries by Api title asc
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
