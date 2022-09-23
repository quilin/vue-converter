<template>
  <div class="containers">
    <label for="select"
      >выберите валюту
      <select name="select" v-model="currentCurrency">
        <option
          :value="currency"
          v-for="currency in this.$store.state.currencies"
          :key="currency.id"
        >
          {{ currency.CharCode }}
        </option>
      </select>
    </label>
    <slot></slot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.fetchCurrencies();
  },
  data() {
    return {
      currentCurrency: '',
    };
  },
  computed: {
    ...mapGetters(['currencies']),
  },
  methods: {
    ...mapActions(['fetchCurrencies']),
  },
};
</script>

<style scoped>
.containers {
  display: flex;
  flex-direction: column;
  width: 100%;
}
select {
  height: 50px;
  width: 150px;
}
</style>
