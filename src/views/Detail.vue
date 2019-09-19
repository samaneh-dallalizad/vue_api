<template>
  <DetailComponent :detailEntry="detailEntry" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
import DetailComponent from '@/components/Detail.vue'; // @ is an alias to /src
@Component({
  components: {
    DetailComponent,
  },
})
export default class Detail extends Vue {
  private detailEntry: Entry | null = null;
  private entries: Entry[] = [];
  private mounted() {
    const title: string = this.$route.params.title;
    const link: string = this.$route.params.link;
    fetch('https://api.publicapis.org/entries?title=' + encodeURIComponent(title))
      .then((response) => response.json())
      .then((data) => {
        this.entries = data.entries.filter((param: Entry) => param.Link === link);
        this.detailEntry = this.entries[0];
      });
  }
}
</script>
<style scoped lang="scss">
</style>
