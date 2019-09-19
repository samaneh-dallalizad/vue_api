<template> 
  <Categories :categories="cat" />   
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Categories from '@/components/Categories.vue'; // @ is an alias to /src
@Component({
  components: {
    Categories,
  },
})
export default class Category extends Vue {
  private cat: string[] = [];
  private mounted() {
    fetch('https://api.publicapis.org/categories')
    .then((response) => response.json())
    .then((data) => (this.cat = data));
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
