<template>
  <div id="detail">
    <div class="container">
      <div class="row">         
        <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0">
           <div  class="info">
             <ul v-if="detailEntry">
                <li>
                  <p class="title">title:</p>
                  <!-- /title -->  
                  <p>{{detailEntry.API}}</p>
                </li>
                <li>
                  <p class="title">Description:</p>
                  <!-- /title --> 
                  <p>{{ detailEntry.Description}}</p>
                </li>
                <li>
                  <p class="title">Auth:</p>
                  <!-- /title --> 
                  <p>{{detailEntry.Auth}}</p>
                </li>
                <li>
                  <p class="title">HTTPS:</p>
                  <!-- /title -->
                  <p>{{detailEntry.HTTPS}}</p>
                </li>
                <li>
                  <p class="title">Cors:</p>
                  <!-- /title -->
                  <p>{{detailEntry.Cors}}</p>
                </li>
                <li>
                  <p class="title" >Link:</p>
                  <!-- /title --> 
                  <p><a :href="detailEntry.Link" target="_blank">{{detailEntry.Link}}</a></p>
                </li>
                <li>
                  <p class="title" >Category:</p>
                  <!-- /title --> 
                  <p>{{detailEntry.Category}}</p>
                </li>
              </ul>                        
           </div>
           <!-- /info --> 
        </div>        
      </div>         
    </div>   
  </div>
  <!-- /detail -->  
</template>
<!-- / template-->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
@Component
export default class Random extends Vue {
  @Prop() private detailEntry!: Entry;
}
</script>
<!-- /script -->
<style scoped lang="scss">
/* detail */
#detail{
  padding:30px 0; 
  background:#f5f5f5;  
}
/* detail info */
#detail .info{
  background: #fff;
  padding:5px 10px;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 0 20px #999;
  min-height:200px;
}
#detail .info:before{
    width: 50%;
    height: 10px;
    position: absolute;
    left: 0;
    top: -10px;
    z-index: 4;    
    content: "";
    background: #1ae4b5;    
}
#detail .info:after{
    width: 50%;
    height: 10px;
    position: absolute;
    right: 0;
    bottom:0;
    z-index: 4;    
    content: "";
    background: #e41aa6b5; 
}
/* detail ul */
#detail ul{
  list-style: none;
  padding:0;
}
/* detail title */
#detail .info .title{
  font-weight: bold;
  color:#e41aa6;
}
</style>
<!-- /style -->