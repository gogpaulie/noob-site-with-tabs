<template>
  <section class="hero-video">
    <div class="bg-video">
      <video class="bg-video__content" autoPlay muted loop>
        <source src="../assets/HeroVideo2.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-video__title container">
      <h1 class="section-title">Perpetual Noob</h1>
      <p>Video Editor, Voice Actor, Live Broadcaster, Guide Creator</p>
    </div>
    <div class="hero-video__cta">
      <a class="cta cta__primary" href="#contact">request quote</a>

      <a class="cta cta__secondary" href="#work">See my work</a>
    </div>
    <ShowMoreBtn />
  </section>
</template>

<script>
import ShowMoreBtn from './ShowMoreBtn';
export default {
  name: 'HeroVideo',
  components: {
    ShowMoreBtn,
  },
};
</script>

<style lang="scss">
@import '../styles/_variables.scss';
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 1;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.hero-video {
  // background-color: rgba($color: #17077769, $alpha: 0.6);
  background-color: rgba($color: #000000, $alpha: 0.6);
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  line-height: 3rem;

  @media (max-width: $ig-small-screen) {
    height: 80vh;
  }
  @media (max-width: $ig-xsmall-screen) {
    height: 90vh;
  }

  &__title {
    max-width: 900px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem;

    & h1 {
      text-align: center;
      color: white;
      margin: 3rem 0;
      font-size: 5rem;

      @media (max-width: $ig-med-screen) {
        font-size: 3rem;
      }
      @media (max-width: $ig-xsmall-screen) {
        font-size: 2rem;
      }
    }
    & p {
      max-width: 900px;
      font-size: 2.5rem;
      text-align: center;
      @media (max-width: $ig-med-screen) {
        font-size: 1.75rem;
      }
      @media (max-width: $ig-xsmall-screen) {
        font-size: 1.5rem;
      }
    }
  }
  &__cta {
    margin-top: 5rem;
  }
}

.cta {
  width: 250px;
  padding: 1rem 4rem;
  margin: 5rem 2rem;
  border-radius: 150px;
  font-family: inherit;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  font-size: 2rem;

  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: $ig-small-screen) {
    display: flex;
    margin: 1rem 0;
  }
  @media (max-width: $ig-xsmall-screen) {
    padding: 0.75rem 2rem;
    font-size: 1.5rem;
    width: 180px;
  }

  &:hover {
    background-color: white;
    color: black;
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
}
</style>
