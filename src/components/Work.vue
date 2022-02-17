<template>
  <section class="work">
    <div class="container">
      <h2 class="section-title">My Services</h2>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#videoediting">
            <i class="fas fa-film"></i>
            Video Editing</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#voiceacting">
            <i class="fas fa-theater-masks"></i>
            Voice Acting</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#youtube">
            <i class="fab fa-youtube"></i>
            Youtube</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#twitch">
            <i class="fab fa-twitch"></i>
            Twitch</a
          >
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="videoediting">
          <div class="flex">
            <div class="divider-title"></div>
            <h3 class="service-title">Video Editing</h3>
            <div class="divider-title"></div>
          </div>

          <div class="work__card">
            <div class="work__card--video">
              <youtube
                :video-id="videoId"
                ref="youtube"
                @playing="playing"
                :fit-parent="true"
                :resize="true"
                :player-vars="playerVars"
              ></youtube>
            </div>
          </div>
          <div class="service-features">
            <div class="feature">
              <h4>VOD Splicing</h4>
              <div class="work__card--video-small">
                <youtube
                  :video-id="videoId"
                  ref="youtube"
                  @playing="playing"
                  :fit-parent="true"
                  :resize="true"
                  :player-vars="playerVars"
                ></youtube>
              </div>
            </div>
            <div class="feature">
              <h4>Channel Trailers</h4>
              <div class="work__card--video-small">
                <youtube
                  :video-id="videoId"
                  ref="youtube"
                  @playing="playing"
                  :fit-parent="true"
                  :resize="true"
                  :player-vars="playerVars"
                ></youtube>
              </div>
            </div>
            <div class="feature">
              <h4>Commercials</h4>
              <div class="work__card--video-small">
                <youtube
                  :video-id="videoId"
                  ref="youtube"
                  @playing="playing"
                  :fit-parent="true"
                  :resize="true"
                  :player-vars="playerVars"
                ></youtube>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="voiceacting">
          <div class="flex">
            <div class="divider-title"></div>
            <h3 class="service-title">Voice Acting</h3>
            <div class="divider-title"></div>
          </div>
          <div class="service-features">
            <div class="feature">
              <img src="../assets/gamepad.svg" alt="video splicing icon" />
              <h4>Animation/Video Games</h4>
              <p>Characters of all flavors.</p>
            </div>
            <div class="feature">
              <img src="../assets/bell.svg" alt="video splicing icon" />
              <h4>Stream Alerts</h4>
              <p>
                Character voices for custom, original announcements for new
                follows, subs, raids, etc.
              </p>
            </div>
            <div class="feature">
              <img src="../assets/book-reader.svg" alt="video splicing icon" />
              <h4>Narration</h4>
              <p>Natural voice for long form reads, ASMR, guides, etc.</p>
            </div>
          </div>
          <div class="work__card">
            <div class="work__card--video">
              <!-- <youtube
            :video-id="videoId"
            ref="youtube"
            :player-vars="playerVars"
            @playing="playing"
            :fitParent="true"
            :resize="true"
            :resizeDelay="0"
          ></youtube> -->
              <img
                class="work__card--placeholder"
                src="../assets/placeholder-vo.png"
                alt="Voice acting placeholder"
              />
            </div>
          </div>
        </div>
        <div class="tab-pane" id="youtube">
          <div class="flex">
            <div class="divider-title"></div>
            <h3 class="service-title">Youtube</h3>
            <div class="divider-title"></div>
          </div>
        </div>
        <div class="tab-pane" id="twitch">
          <div class="flex">
            <div class="divider-title"></div>
            <h3 class="service-title">Twitch</h3>
            <div class="divider-title"></div>
          </div>
          <!-- <div class="work__card">
            <div class="work__card--video">
              <iframe
                src="https://player.twitch.tv/?video=v40464143&parent=streamernews.example.com&autoplay=false"
                height="720"
                width="1280"
                allowfullscreen="true"
              >
              </iframe>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Work',

  data() {
    return {
      videoId: 'rg08fB-WXhI',
      playerVars: {
        showinfo: 0,
        autohide: 1,
        modestbranding: 1,
        controls: 1,
        rel: 0,
      },
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log('we are watching!!!');
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
.service-features {
  padding: 6rem 0;
  display: flex;
  justify-content: space-around;

  @media (max-width: $ig-small-screen) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }
}

.feature {
  text-align: center;
  width: 300px;
  background-color: rgba($color: #000000, $alpha: 0.3);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 10px 2px rgba($color: #000000, $alpha: 0.2);
  transition: all 0.2s;
  @media (max-width: $ig-med-screen) {
    margin-bottom: 2rem;
  }
  @media (max-width: $ig-small-screen) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 10px 4px rgba($color: #000000, $alpha: 0.2);
    & img {
      filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg)
        brightness(119%) contrast(119%);
    }
  }

  & img {
    height: 75px;
    margin-bottom: 3rem;
    filter: invert(100%) sepia(28%) saturate(2%) hue-rotate(266deg)
      brightness(108%) contrast(101%);
    @media (max-width: $ig-small-screen) {
      height: 50px;
      margin-bottom: 1.5rem;
    }
  }

  & h4 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    line-height: 120%;
    @media (max-width: $ig-small-screen) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }

  & p {
    font-size: 1.75rem;
    line-height: 140%;
    @media (max-width: $ig-small-screen) {
      font-size: 1.25rem;
      line-height: 120%;
    }
  }
}
.work {
  padding: 15rem 0;
  color: white;

  @media (max-width: $ig-small-screen) {
    padding: 5rem 0;
  }

  &__card {
    display: flex;
    margin: 6rem 0;

    @media (max-width: $ig-med-screen) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 3rem 0;
    }

    &--video {
      width: 100%;
      @media (max-width: $ig-med-screen) {
        width: 600px;
      }
      @media (max-width: $ig-small-screen) {
        width: 400px;
      }
      @media (max-width: $ig-xsmall-screen) {
        width: 300px;
      }

      & video {
        width: 100%;
        height: 100%;
        /* @media (max-width: $ig-xsmall-screen) {
          width: 300px;
        } */
      }
    }

    &--placeholder {
      width: 100%;
      height: 100%;
    }

    &--info {
      flex: 1;
      padding: 4rem;

      & h3 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 2rem;
        line-height: 120%;
      }
      & ul {
        list-style: circle;
        padding: 0 4rem;
      }

      & ul li {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  }
}

.service-title {
  font-weight: 300;
  line-height: 110%;
  font-size: 3rem;
  text-align: center;
  @media (max-width: $ig-small-screen) {
    font-size: 2.5rem;
  }
}

/* TABS */

.dimension {
  width: 500px;
  height: 300px;
}

.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  @media (max-width: $ig-small-screen) {
    justify-content: center;
  }
}

.nav-tabs .nav-link.active {
  background-color: white;
  color: black;
  /* border: 3px solid #9400d3; */
}

.nav-tabs .nav-link {
  background-color: transparent;
  color: white;
  border: 3px solid white;
  margin-right: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 2rem;

  @media (max-width: $ig-small-screen) {
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }
}

.nav-tabs .nav-link:hover {
  border: 3px solid #a7a7a7;
}

.nav-tabs {
  border-bottom: 1px solid white;
}

.tab-content {
  /* border: 1px solid #9400d3; */
  padding: 20px;
}
</style>
