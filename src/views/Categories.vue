<template> 
  <Categories :categories="cat" />   
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getCategories } from '@/services/Api';
import Categories from '@/components/Categories.vue'; // @ is an alias to /src
@Component({
  components: {
    Categories,
  },
})
export default class Category extends Vue {
  private cat: string[] = [];
  private mounted() {
    /* get categories */
   getCategories().then((value) => this.cat = value);
  }
}
</script>
<style scoped lang="scss">
/* categories */
#categories {
  padding: 30px 0;
  text-align: center;
  background: #f5f5f5;
}
</style>
