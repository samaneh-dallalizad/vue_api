<template>
  <div id="home">
    <div class="container">
      <div v-if="entries.length > 0">
        <div class="row sort" >
          <div class="col-md-4 offset-md-4 col-sm-12 offset-sm-0 col-xs-12 offset-xs-0">
            <label for>SortBy:</label>
            <select @change="onChange($event)" class="form-control" name id>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>      
        </div> 
        <!-- / sort -->
        <div class="row">
          <div v-for="(entry,index) in enteriesWithClasses" :key="index"  class="col-md-3 col-sm-6 col-xs-12" >
            <figure class="box hvr-wobble-vertical" :class="entry.class.bg"  >
              <span class="title" :class="entry.class.clr">{{entry.value.API}}</span>
              <figcaption>
                <p>{{entry.value.Description}}</p> 
                <p><font-awesome-icon icon="list-alt" /> {{entry.value.Category}}</p>          
                <router-link class="detail" :title="entry.value.API"  :to="{ name: 'detail', params:{ title: entry.value.API, link:entry.value.Link.trim() }}" >more</router-link>
              </figcaption>
            </figure>
          </div>     
        </div>
        <!-- / entries -->
      </div>
      <div class="text-center" v-else>
        <div class="spinner-border text-secondary"></div>
      </div>
    </div>
  </div>  
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Entry } from '@/types/Entry';
import { ColorStyle } from '@/types/colorStyle';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { EntryWithClass } from '@/types/entryWithClass';
import { __values } from 'tslib';

@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
})
export default class Entries extends Vue {
  private classes: ColorStyle[] = [
    {
      bg: 'bkg-blue',
      clr: 'clr-blue',
    },
    {
      bg: 'bkg-green',
      clr: 'clr-green',
    },
    {
      bg: 'bkg-purple',
      clr: 'clr-purple',
    },

    {
      bg: 'bkg-pink',
      clr: 'clr-pink',
    },
  ];

  @Prop() private entries!: Entry[];
  @Prop() private limit: number | undefined;
  @Prop() private onChange!: () => void;
  get enteriesWithClasses(): EntryWithClass[] {
    return this.entries.slice(0, this.limit).map((entry, index) => ({value: entry, class: this.classes[index % 4]}));
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* box */
#home .box{
  border-radius:10px;  
  box-shadow: 0 0 20px #999;
  position: relative;
  overflow: hidden;
}
/* title */
#home .box .title{
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
#home .box figcaption{
  padding:10px;
  min-height:130px;
  color:#fff;
  font-size:.9rem;
}
/* detail */
#home .box .detail{
    position: absolute;
    background: #fff;
    bottom: 7px;
    right: -27px;
    padding: 5px 46px;
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
}
/* sort */
#home .sort {
  margin-bottom: 30px;
}
/* Wobble Vertical */
@-webkit-keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.hvr-wobble-vertical {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {
  -webkit-animation-name: hvr-wobble-vertical;
  animation-name: hvr-wobble-vertical;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>
