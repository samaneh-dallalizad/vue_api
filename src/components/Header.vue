<template>
  <section id="header">
    <div class="menu" id="menuBar" ref="menuBar" v-bind:class="{ sticky: isActive }">
      <div class="containr">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12 center-text">
            <router-link :title="'Home'" to="/">
              <img src="../assets/images/logo-64.png" alt />
            </router-link>
          </div>
          <!-- / col -->
          <div class="col-md-6 col-sm-12 col-xs-12 center-text">
            <nav id="nav">
              <router-link :title="'Home'" :to="{name:'home'}" exact>Home</router-link>
              <router-link :title="'categories'" :to="{name:'categories'}">Categories</router-link>
              <a href="/random/1" @click="handleClick">random</a>
            </nav>
            <!-- /nav -->
          </div>
          <!-- / col -->
        </div>
        <!-- / row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /menu -->
  </section>
  <!-- / header -->
</template>
<!-- / template-->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private isActive: boolean = false;
  private rnd = Math.random();
  private mounted() {
    window.onscroll = () => {
      const menu = this.$refs.menuBar;
      if (window.pageYOffset > 200) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    };
  }
  private handleClick(event: any) {
    event.preventDefault();
    this.$router.push('/random/' + Math.random());
  }
}
</script>
<!-- /script -->
<style scoped lang="scss">
/* menu */
.menu {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #4b187f;
  padding: 10px 0;
}
/* sticky */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
}
/* nav */
#nav {
  padding: 14px 0;
  text-align: right;
  /* nav a */
  a {
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin: 0 6px;
    background: #1ae4b5;
    padding: 5px;
    min-width: 100px;
    display: inline-block;
    border-radius:0;
    /* nav a  active*/
    &.router-link-exact-active {
      color: #4b187f;
    }  
  } 
  /* nav a nth-child(2)*/
  a:nth-child(2) {
    background: #e41aa6;
    color: #fff;
  }
   a:hover {
   text-decoration: none;
   border-left:4px solid #fff;
   -webkit-transition: border .5s; /* Safari prior 6.1 */
   transition: border .5s;
  }
}  
/* media max-width 767px*/
@media (max-width: 767px) {
  .center-text {
    text-align: center;
  }
  /* media nav*/
  #nav {
    text-align: center;
  }
  /* media nav a*/
  #nav a {
    min-width: 60px;
    font-size: 13px;
  }
}
</style>
<!-- /style -->
