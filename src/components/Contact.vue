<template>
  <div class="form-container">
    <h2 class="section-title">Contact Me</h2>
    <p class="form-container__subtitle">
      Do you want to hire me? Message me below and I'll get back to you ASAP!
    </p>
    <form class="contact-form" @submit.prevent="sendEmail">
      <div class="contact-form__group">
        <label class="contact-form__label" id="name">Name</label>
        <input
          id="name-input"
          class="contact-form__control"
          type="text"
          name="user_name"
          @blur="hideLabel"
          @focus="showLabel"
          placeholder="Enter name..."
          required
        />
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" id="email">Email</label>
        <input
          id="email-input"
          class="contact-form__control"
          type="email"
          name="user_email"
          @blur="hideLabel"
          @focus="showLabel"
          placeholder="Enter email..."
          required
        />
      </div>
      <div class="contact-form__group">
        <label class="contact-form__label" id="message">Message</label>
        <textarea
          id="message-input"
          class="contact-form__control"
          name="message"
          rows="5"
          cols="50"
          placeholder="Enter Message..."
          @blur="hideLabel"
          @focus="showLabel"
          required
        ></textarea>
      </div>
      <vue-recaptcha
        class="g-recaptcha"
        sitekey="6LdQWKAaAAAAAB0ExpyM3B64F9ggZnXRtaOvG7UV"
        type="checkbox"
      >
      </vue-recaptcha>
      <button class="contact-form__btn" id="sendBtn" type="submit">send</button>
      <!-- <input type="submit" value="Send" /> -->
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import emailjs from "emailjs-com";
import VueRecaptcha from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_heincaj",
          "template_qa0dq6b",
          e.target,
          "user_HTOXflbWP55mCelGIL4kI"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            Vue.notify({
              type: "success",
              title: "Message Sent!",
              text: "Talk to you soon! 😃",
            });
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error);
            Vue.notify({
              type: "error",
              title: "Please check ReCaptcha",
            });
          }
        );

      // Vue.notify({
      //   type: 'success',
      //   title: 'Message Sent!',
      //   text: 'Talk to you soon!',
      // });
    },
    showLabel(e) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      if (e.target.name === "user_name") {
        name.classList.add("focus");
      }
      if (e.target.name === "user_email") {
        email.classList.add("focus");
      }
      if (e.target.name === "message") {
        message.classList.add("focus");
      }
    },
    hideLabel() {
      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        label.classList.remove("focus");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  padding: 6rem;

  &__title {
    padding-top: 5rem;
    font-size: 5rem;
    color: white;
    margin-bottom: 4rem;
  }
  &__subtitle {
    text-align: center;
    line-height: 3rem;
    color: white;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    @media (max-width: $ig-small-screen) {
      font-size: 2rem;
    }
  }
}

.contact-form {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 600px;

  @media (max-width: $ig-small-screen) {
    width: 400px;
  }
  @media (max-width: $ig-xsmall-screen) {
    width: 300px;
  }

  &__group {
    margin-bottom: 2rem;
    transition: all 0.3s;

    &:focus-within {
      transform: scale(1.1, 1.1);
    }
  }

  &__label {
    font-size: 1.75em;
    padding: 5px 0;
    color: white;
    display: block;
    opacity: 0;
    transition: all 0.3s;
    transform: translateX(-50px);
  }

  &__control {
    box-shadow: none;
    border-radius: 0;
    border-color: #ccc;
    border-style: none none solid none;
    border-radius: 3px;
    width: 100%;
    font-size: 2.25em;
    transition: all 0.6s;
    padding: 1rem 2.5rem;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      box-shadow: none;
      border-color: orange;
      outline: none;
    }
    &:invalid:focus {
      border-color: red;
    }
    &:valid:focus {
      border-color: green;
    }
  }
  &__btn {
    background-color: transparent;
    border: 2px solid white;
    border-radius: 150px;
    color: #fff;
    font-family: inherit;
    font-size: 3em;
    padding: 10px 50px;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: white;
      color: #222;
    }
  }
  &__alert {
    font-size: 3rem;
  }
}

.focus {
  opacity: 1;
  transform: translateX(0px);
}
textarea {
  resize: none;
}
.sent {
  background-color: $color-primary;
  color: #fff;
}

.g-recaptcha {
  margin: 0 auto 2rem auto;
  /* width: 100%; */
}
</style>
