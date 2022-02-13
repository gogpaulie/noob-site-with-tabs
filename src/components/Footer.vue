<template>
  <footer class="footer">
    <p>&copy; Perpetual Noob | Polihronakis Design {{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #999;
}
</style>
