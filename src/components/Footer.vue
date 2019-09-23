<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <p class="footer-title">Categories</p>
              <!-- / footer-title -->
              <ul class="footer-items">                
                <li v-for="(cat,index) in footerCategories" :key="index" >
                  <router-link :title="cat" :to="{ name: 'entries', params:{ category: cat}}">{{cat}}</router-link>
                </li>                
              </ul>
              <!-- / footer-items -->
            </div>
            <!-- / col -->
            <div class="col-md-6 col-sm-6 col-xs-12">
              <p class="footer-title">Entries</p>
              <!-- / footer-title -->
              <ul   class="footer-items" >
                <li v-for="(entry,index) in footerEntries" :key="index" >
                  <router-link :title="entry.API"  :to="{ name: 'detail', params:{ title: entry.API, link: entry.LinkHash }}" >
                    {{entry.API}}
                  </router-link>
                </li>             
              </ul>
              <!-- / footer-items -->
            </div>
            <!-- / col -->
          </div>
          <!-- / row -->
        </div>
        <!-- / col -->
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div id="footer-logo">
            <router-link :title="'Home'" to="/">
              <img src="../assets/images/logo-64.png" alt />
            </router-link>
          </div>
          <!-- / footer-logo -->
          <div id="footer-social">
            <ul class="icons">
              <li>
                <router-link :title="'facebook'" to="/">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </router-link>
              </li>
              <li>
                <router-link :title="'twitter'" to="/">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </router-link>
              </li>
              <li>
                <router-link :title="'instagram'" to="/">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </router-link>
              </li>
              <li>
                <router-link :title="'whatsapp'" to="/">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                </router-link>
              </li>
            </ul>
          </div>
          <!-- / footer-socials -->        
        </div>
        <!-- / col -->
      </div>
      <!-- / row -->
    </div>
    <!-- / container -->
  </section>
  <!-- / footer -->
</template>
<!-- / template-->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Entry } from '@/types/Entry';
import { __values } from 'tslib';
import { getAllEntries, getCategories } from '@/services/Api';
@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
})
export default class Footer extends Vue {
  private footerEntries: Entry[] = [];
  private footerCategories: string[] = [];
  private mounted() {
   // get all entries and cateories for footer sitemap
   Promise.all([getAllEntries(), getCategories()])
      .then((data) => {
        this.footerEntries = data[0].slice(0, 5);
        this.footerCategories = data[1].slice(0 , 5);
    });
  }
}
</script>
<!-- /script -->
<style scoped lang="scss">
/* footer */
#footer {
  background: #464448;
  padding: 20px 0;
  position: relative;
}
/* footer ul */
#footer ul {
  list-style: none;
  padding: 0;
}
/* footer-title */
#footer .footer-title {
  color: #1ae4b5;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
}
#footer .footer-title:before {
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0;
  bottom: -8px;
  background: #1ae4b5;
  content: "";
  border-radius: 50%;
}
#footer .footer-title:after {
  width: 8px;
  height: 8px;
  position: absolute;
  left: 10px;
  bottom: -8px;
  background: #e41aa6b5;
  content: "";
  border-radius: 50%;
}
/* footer-logo */
#footer #footer-logo {
  margin: 10px 0;
}
/* footer-social */
#footer #footer-social li {
  float: left;
  margin: 0 2px;
}
#footer #footer-social a {
  width: 40px;
  text-align: center;
  height: 40px;
  color: #fff;
  background: #4b187f;
  display: inline-block;
  border-radius: 3px;
  line-height: 40px;
}
/* footer-items */
#footer .footer-items li {
  margin-bottom: 10px;
}
#footer .footer-items li a {
  color: #fff;
  padding: 0 5px;
  display: inline-block;
  border-bottom: 1px dotted #e41aa6b5;
  width: 100%;
}
#footer .footer-items li:last-child a {
  border: none;
}
</style>
<!-- /style -->
