<template>
  <div class="container">
    <HeaderWithLinks class="header"></HeaderWithLinks>

    <router-view />
  </div>
</template>
<script>
import HeaderWithLinks from './components/HeaderWithLinks.vue';

export default {
  components: { HeaderWithLinks },

  computed: {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  margin-bottom: 20px;
}
</style>
