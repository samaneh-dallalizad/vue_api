<template>
  <DetailComponent :detailEntry="detailEntry" :relevantEntries="relevantEntries" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
import { getEntry, relevantEntries } from '@/services/Api';
import DetailComponent from '@/components/Detail.vue'; // @ is an alias to /src
import { Md5 } from 'ts-md5';
@Component({
  components: {
    DetailComponent,
  },
})
export default class Detail extends Vue {
  private detailEntry: Entry | null = null;
  private relevantEntries: Entry[] = [];
  private mounted() {
    /* title query string  */
    const title: string = this.$route.params.title;
    /* link query string  */
    const link: string = this.$route.params.link;
    /* get entry  */
    getEntry(title, link).then((value) => {
      this.detailEntry = value[0];
      /* 3 relevant entries with same categories  */
      return relevantEntries(value[0].Category, link);
    }).then((value) => this.relevantEntries = value);
  }
}
</script>
<style scoped lang="scss">
</style>
