<template>
  <div id="nav-mobile" class="drawer">
    <ul class="drawer__list">
      <li class="drawer__list--link">
        <a href="#home" class="current" @click="$emit('show-nav')">Home</a>
      </li>
      <li class="drawer__list--link" @click="$emit('show-nav')">
        <a href="#about">About</a>
      </li>
      <li class="drawer__list--link" @click="$emit('show-nav')">
        <a href="#work">Sevices</a>
      </li>
      <li class="drawer__list--link" @click="$emit('show-nav')">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div class="drawer__social-media">
      <a href="https://twitter.com/perpetualnoob3" target="_blank"
        ><i class="fab fa-twitter"></i
      ></a>
      <a href="https://www.twitch.tv/perpetual_noob" target="_blank"
        ><i class="fab fa-twitch"></i
      ></a>
      <a href="https://www.youtube.com/user/PerpetualNoob3" target="_blank"
        ><i class="fab fa-youtube"></i
      ></a>
      <a href="https://www.patreon.com/perpetualnoob3" target="_blank"
        ><i class="fab fa-patreon"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMobileDrawer",
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.drawer {
  position: fixed;
  background-color: #333;
  height: 100%;
  width: 220px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-200%);
  transition: transform 0.3s ease-in-out;

  &__list {
    list-style: none;
    margin-top: 3rem;
    width: 100%;
    text-align: center;

    &--link {
      margin: 2rem 0;
      padding: 1rem 0;
      transition: all 0.2s;
      & a {
        text-decoration: none;
        color: white;
        font-size: 2.5rem;
        padding: 1rem 0;
      }
      &:hover {
        background-color: white;

        & a {
          color: #333;
        }
      }
    }
  }
  &__social-media {
    font-size: 3rem;

    & i {
      margin: 0 1rem;
      color: white;
    }
  }
}
.drawer.open {
  transform: translateX(0);
}
</style>
