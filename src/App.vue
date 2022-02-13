<template>
  <div id="app">
    <NavbarMobileDrawer :class="{ open: showNavBar }" v-on:show-nav="showNav" />
    <Navbar v-on:show-nav="showNav" :showNavBar="showNavBar" />
    <HeroVideo id="home" />
    <div class="background-container">
      <Work id="work" />
      <div class="divider"></div>
      <About id="about" />
    </div>
    <Contact id="contact" />
    <Footer />
    <notifications position="bottom center" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import NavbarMobileDrawer from "./components/NavbarMobileDrawer";
import HeroVideo from "./components/HeroVideo";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default {
  name: "App",
  data: () => {
    return {
      showNavBar: false,
    };
  },
  components: {
    Navbar,
    NavbarMobileDrawer,
    HeroVideo,
    Work,
    About,
    Contact,
    Footer,
  },

  methods: {
    showNav() {
      this.showNavBar = !this.showNavBar;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
@import "./styles/_variables.scss";
@font-face {
  font-family: "November";
  /* font-style: normal;
  font-weight: normal; */
  src: local("November"), url("November-Regular.ttf") format("truetype");
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // Defines what 1rem is...
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  font-family: $font-primary;
  overflow-x: hidden;
  // @include respond(tab-port) {
  //   padding: 0;
  // }
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  /* background-color: rgb(18, 18, 18); */
  color: rgba(255, 255, 255, 0.87);
  font-size: 1rem;

  line-height: 1.5rem;
  font-weight: 400;
  text-rendering: optimizelegibility;
}

.container {
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: $ig-small-screen) {
    padding: 2rem;
  }
}

.background-container {
  background: linear-gradient(
    105.91deg,
    #b3e1ff 0.29%,
    #85a5ba 11.4%,
    #617887 30%,
    #4e616e 53.24%,
    #2a343b 85.39%
  );
  background-blend-mode: multiply;
}

.section-title {
  text-align: center;
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 9rem;
  font-family: $font-display;
  letter-spacing: 5px;
  @media (max-width: $ig-small-screen) {
    margin-bottom: 5rem;
    font-size: 3rem;
  }
}

.divider {
  height: 1px;
  background-color: white;
  width: 500px;
  margin: 0 auto;
}
.divider-title {
  height: 1px;
  background-color: white;
  width: 300px;
  margin: 0 2rem;
  &.no-left-margin {
    margin-left: 0;
  }
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  text-align: center;
  padding: 2rem 0;
  font-size: 1.5rem;
  background-color: #ccc;
}
</style>
