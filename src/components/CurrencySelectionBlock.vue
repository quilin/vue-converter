<template>
  <div class="containers">
    <label>
      выберите валюту
      <select id="select" v-model="current">
        <option v-for="currency in currencies" :value="currency" :key="currency.id">
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
  props: ['modelValue'],
  data() {
    return {
      current: null
    }
  },
  computed: {
    ...mapGetters(['currencies']),
  },
  watch: {
    current(value) { this.$emit('update:modelValue', value) },
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
