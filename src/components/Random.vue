<template>
  <div id="random">
    <div class="container">
      <div class="row">         
        <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0">
          <p class="text-center"><button @click="onClick($event)" class='btn text-light bkg-blue'>another one</button> </p>            
           <div class="detail">
               <ul v-if="randomEntry">
                <li>
                  <p class="title">title:</p>
                  <!-- /title -->  
                  <p>{{randomEntry.API}}</p>
                </li>
                <li>
                  <p class="title">Description:</p>
                  <!-- /title --> 
                  <p>{{randomEntry.Description}}</p>
                </li>
                <li>
                  <p class="title">Auth:</p>
                  <!-- /title --> 
                  <p>{{randomEntry.Auth}}</p>
                </li>
                <li>
                  <p class="title">HTTPS:</p>
                  <!-- /title -->
                  <p>{{randomEntry.HTTPS}}</p>
                </li>
                <li>
                  <p class="title">Cors:</p>
                  <!-- /title -->
                  <p>{{randomEntry.Cors}}</p>
                </li>
                <li>
                  <p class="title" >Link:</p>
                  <!-- /title --> 
                  <p><a :href="randomEntry.Link" target="_blank">{{randomEntry.Link}}</a></p>
                </li>
                <li>
                  <p class="title" >Category:</p>
                  <!-- /title --> 
                  <p>{{randomEntry.Category}}</p>
                </li>
              </ul>
           </div>
           <!-- /detail -->
        </div>        
      </div>         
    </div>    
  </div>
  <!-- /random --> 
</template>
<!-- / template-->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
@Component
export default class Random extends Vue {
  @Prop() private randomEntry!: Entry;
  @Prop() private onClick!: () => void;
}
</script>
<!-- /script -->
<style scoped lang="scss">
/* random */
#random{
  padding:30px 0; 
  background:#f5f5f5;  
}
/* random detail*/
#random .detail{
  background: #fff;
  padding:5px 10px;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 0 20px #999;
  min-height:200px;
}
#random .detail:before{
    width: 50%;
    height: 10px;
    position: absolute;
    left: 0;
    top: -10px;
    z-index: 4;    
    content: "";
    background: #1ae4b5;    
}
#random .detail:after{
    width: 50%;
    height: 10px;
    position: absolute;
    right: 0;
    bottom:0;
    z-index: 4;    
    content: "";
    background: #e41aa6b5; 
}
/* random ul*/
#random ul{
  list-style: none;
  padding:0;
}
/* detail title */
#random .detail .title{
  font-weight: bold;
  color:#e41aa6;
}
</style>
<!-- /style -->
