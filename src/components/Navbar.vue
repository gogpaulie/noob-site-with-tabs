<template>
  <nav class="mynav" v-bind:class="{ active: this.isScrollActive }">
    <div class="mynav__container">
      <div class="mynav__logo">
        <a href="#home">
          <img src="../assets/noob-logo.png" alt="logo" />
        </a>
      </div>
      <div
        class="mynav__mobile-icon"
        v-if="mobileView"
        @click="$emit('show-nav')"
      >
        <i class="fas fa-bars" v-show="!showNavBar"></i>
        <i class="fas fa-times" v-show="showNavBar"></i>
      </div>
      <ul class="mynav__linkList" v-if="!mobileView">
        <li class="mynav__linkList--link">
          <a href="#home" class="current">Home</a>
        </li>
        <li class="mynav__linkList--link"><a href="#work">Services</a></li>
        <li class="mynav__linkList--link"><a href="#about">About</a></li>
        <li class="mynav__linkList--link"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  props: ['showNavBar'],
  data: () => {
    return {
      isScrollActive: false,
      mobileView: false,
    };
  },
  created() {
    this.handleView();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleView);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleView);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isScrollActive = true;
      } else {
        this.isScrollActive = false;
      }
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
      console.log(this.mobileView);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.mynav {
  margin: 0 auto;
  max-width: 1200px;

  align-items: center;
  position: fixed;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  @media (max-width: $ig-small-screen) {
    padding: 1rem 0;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
  }
  &__logo img {
    margin-left: 2rem;
    height: 80px;
    width: 80px;
    &:hover {
      filter: brightness(110%);
    }
    @media (max-width: $ig-small-screen) {
      height: 60px;
      width: 60px;
    }
  }
  &__linkList {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    &--link a {
      color: white;
      margin: 0 1rem;
      text-decoration: none;
      padding: 7px 15px;
      transition: all 0.3s ease-in-out;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: white;
      }
    }
  }
  &__mobile-icon {
    margin-right: 1rem;
    font-size: 3rem;
    padding: 1rem;
    color: white;
    cursor: pointer;
  }
}
.mynav.active {
  background-color: rgba(115, 143, 161, 0.7);
  max-width: 100%;
  max-width: 100%;
  box-shadow: 0 5px 10px 2px rgba($color: #000000, $alpha: 0.2);

  @media (max-width: $ig-small-screen) {
    padding: 0;
  }
}

.mynav.active .container {
  max-width: 100%;
}

.mynav.active a {
  color: white;
  &:hover {
    border-color: white;
  }
}

.mynav.active .nav__mobile-icon {
  color: white;
}
</style>
