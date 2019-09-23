<template>
<div id="categories">
    <div class="container">
      <div class="row">
        <div v-for="(cat,index) in CatWithClasses" :key="index"  class="col-md-3 col-sm-6 col-xs-12">
          <figure class="circle-box hvr-ripple-out  animated rotateIn">
            <router-link :title="'Home'"  :to="{ name: 'entries', params:{ category: cat.value}}" >
              <figcaption :class="cat.class" >{{cat.value}}</figcaption>
            </router-link>
          </figure>
          <!-- / circle-box -->
        </div>    
      </div>   
    </div>
  </div>
  <!-- / categories -->         
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CatWithClass } from '@/types/catWithClass';
import { __values } from 'tslib';

@Component
export default class Categories extends Vue {
   public classes: string[] = ['bkg-pink', 'bkg-blue', 'bkg-purple', 'bkg-green'];
   @Prop() private categories!: string[];
    /* all categories with class */
   get CatWithClasses(): CatWithClass[] {
        return this.categories.map((cat, index) => ({value: cat, class: this.classes[index % 4]}));
  }
}
</script>
<style scoped lang="scss">
/* cirlce-box */
#categories .circle-box{
  width:150px;
  height:150px;
  border-radius: 100%;
  background: #fff;
  position: relative;
  box-shadow: 0 0 20px #999;
  margin:20px auto;
}
/* circle-box figcaption */
#categories .circle-box figcaption{
  width:120px;
  height:120px;
  line-height: 100px;
  color:#eee;
  font-weight:1.5rem; 
  border-radius: 100%;
  position: absolute;
  right:0;
  left:0;
  top:0;
  bottom: 0;
  margin:auto;
}
/* Ripple Out */
@-webkit-keyframes hvr-ripple-out {
  100% {
    top: -15px;
    right: -15px;
    bottom: -15px;
    left: -15px;
    opacity: 0;
  }
}
@keyframes hvr-ripple-out {
  100% {
    top:-15px;
    right:-15px;
    bottom:-15px;
    left: -15px;
    opacity: 0;
  }
}
.hvr-ripple-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
}
.hvr-ripple-out:before {
  content: '';
  position: absolute; 
  border-radius: 100%;
  border: #e1e1e1 solid 6px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-animation-duration:2s;
  animation-duration:2s;
}
.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before {
  -webkit-animation-name: hvr-ripple-out;
  animation-name: hvr-ripple-out;
}
</style>