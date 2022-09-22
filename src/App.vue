<template>
  <div class="container">
    <router-view />
    <CurrenciesList></CurrenciesList>
  </div>
</template>
<script>
import CurrenciesList from './components/CurrenciesList.vue';

export default {
  components: { CurrenciesList },

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
</style>
