<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="flex-container">
        <div class="flex-container__left">
          <img src="../assets/about.png" alt="about me" />
        </div>
        <div class="flex-container__right">
          <p>
            I am Perpetual Noob. I've been creating and narrating video-based
            content for nearly a decade, starting in the oversaturated world of
            YouTube Let's Plays. I augmented this with live broadcasting on
            Twitch, incorporating my impersonations and original character
            voices into my broadcasts. Nowadays I make guides for video game
            boss fights, broadcast on Twitch, create video content for others
            like you, and voice act.
          </p>
          <p>
            My dogs Vash and Peggy also make sure to help me as much as they can
            with my work. They will sometimes visit when I’m streaming.
          </p>
          <p>
            Since I started creating video-based content, I've been learning
            every day: through acting classes, Internet tutorials, and my own
            trial and error. This is why my skill set is wide and varied and my
            capabilities impressive. I will bring everything I am capable of to
            your project.
          </p>
          <div class="flex">
            <div class="divider-title no-left-margin"></div>
            <h3 class="social-title">Check out more of my content</h3>
            <div class="divider-title"></div>
          </div>

          <div class="flex-container__right--links">
            <a
              href="https://www.youtube.com/user/PerpetualNoob3"
              target="_blank"
              ><img src="../assets/Youtube.svg" alt="youtube link"
            /></a>
            <a href="https://www.twitch.tv/perpetual_noob" target="_blank"
              ><img src="../assets/Twitch.svg" alt="youtube link"
            /></a>
            <a href="https://twitter.com/perpetualnoob3" target="_blank"
              ><img src="../assets/Twitter.svg" alt="youtube link"
            /></a>
            <a href="https://www.patreon.com/perpetualnoob3" target="_blank"
              ><img src="../assets/Patreon.svg" alt="youtube link"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.about {
  padding: 15rem 0;
  @media (max-width: $ig-small-screen) {
    padding: 6rem 0;
  }
}

.flex-container {
  display: flex;
  @media (max-width: $ig-med-screen) {
    flex-direction: column;
    align-items: center;
  }

  &__left {
    & img {
      width: 500px;
      @media (max-width: $ig-small-screen) {
        width: 400px;
      }
      @media (max-width: $ig-xsmall-screen) {
        width: 300px;
      }
    }
  }
  &__right {
    padding: 5rem;
    max-width: 800px;
    @media (max-width: $ig-small-screen) {
      padding: 1rem;
      width: 500px;
    }
    @media (max-width: $ig-xsmall-screen) {
      padding: 1rem;
      width: 300px;
    }
    & p {
      font-size: 2.2rem;
      line-height: 150%;
      font-weight: 300;
      margin-bottom: 3rem;
      @media (max-width: $ig-small-screen) {
        font-size: 1.75rem;
      }
      @media (max-width: $ig-xsmall-screen) {
        font-size: 1.5rem;
      }
    }
    &--links {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      & a {
        margin-right: 2rem;
        transition: all 0.2s;
        &:hover {
          filter: brightness(80%);
        }
      }
    }
  }
}
.social-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  min-width: 150px;
  line-height: 100%;
  @media (max-width: $ig-xsmall-screen) {
    font-size: 1.5rem;
  }
}
</style>
