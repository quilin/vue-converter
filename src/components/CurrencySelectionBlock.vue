<template>
  <div class="containers">
    <label for="select"
      >выберите валюту
      <select
        name="select"
        :value="currentCurrency"
        @change="$emit('change', $event.target.value)"
      >
        <option
          :value="currency"
          v-for="currency in currencies"
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
    textUpdate(evt) {
      this.$emit('input', evt.target.value);
    },
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
