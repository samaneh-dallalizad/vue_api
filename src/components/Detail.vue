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
       <h5 class="relevant-title text-center">Entries with same categories</h5> 
      <div class="row relevant-entry">       
        <div v-for="(entry,index) in relevantEntries" :key="index"  class="col-md-4 col-sm-6 col-xs-12" >
          <figure class="box bkg-blue"   >
            <span class="title clr-blue" >{{entry.API}}</span>
            <figcaption>
              <p>{{entry.Description}}</p>                           
              <router-link class="detail" :title="entry.API"  :to="{ name: 'detail', params:{ title: entry.API, link:entry.LinkHash}}" >more</router-link>
            </figcaption>
          </figure>
        </div>     
        </div>
        <!-- / entries -->         
    </div>   
  </div>
  <!-- /detail -->  
</template>
<!-- / template-->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
import { Md5 } from 'ts-md5/dist/md5';
@Component
export default class Random extends Vue {
  @Prop() private detailEntry!: Entry;
  @Prop() private relevantEntries!: Entry;
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
/* relevant entry*/
#detail .relevant-entry{
  text-align:center; 
  margin:20px 0;
}  
#detail .relevant-title{
  padding: 15px 0;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  margin:30px 0;
  color:#555;
}
#detail .relevant-title:before {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;right:0;
  margin:auto;
  bottom: -15px;
  background: #1ae4b5;
  content: "";
  border-radius: 50%;
}
#detail .relevant-title:after {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 45px;right:0;
  margin:auto;
  bottom:-10px;
  background: #e41aa6b5;
  content: "";
  border-radius: 50%;
}
/* box */
#detail .box{
  border-radius:10px;  
  box-shadow: 0 0 20px #999;
  position: relative;
  overflow: hidden;
}
/* title */
#detail .box .title{
  text-align: center;
  background: #fff;
  display:inline-block;
  width:100%;
  padding:30px 10px ;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-weight: bold;
  font-size:1rem;
}
/* figcaption */
#detail .box figcaption{
  padding:10px;
  min-height:130px;
  color:#fff;
  font-size:.9rem;
}
/* detail */
#detail .box .detail{
    position: absolute;
    background: #fff;
    bottom: 7px;
    right: -27px;
    padding: 5px 46px;
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
}
</style>
<!-- /style -->