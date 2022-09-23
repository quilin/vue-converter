<template>
  <div class="container">
    <div class="currencies">
      <label for="find">
        найти валюту
        <input type="search" name="find" v-model="search" />
      </label>
      <label for="current-valute"
        >текущая валюта
        <select name="current-valute" id="select-id" v-model="selectedCurrency">
          <option
            v-for="currency in currencies"
            :key="currency.ID"
            :value="currency"
          >
            {{ currency.CharCode }}
          </option>
        </select>
        {{ selectedCurrency.Name }}
      </label>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in sortCurrenciesByName" :key="item.ID">
          <div class="currency-name">
            1 {{ item.Name }} ({{ item.CharCode }})
          </div>
          <div class="currency-value">
            {{ (item.Value / selectedCurrency.Value).toFixed(4) }}
            {{ selectedCurrency.CharCode }}
          </div>
          <div>{{ (item.Value - item.Previous).toFixed(4) }}</div>
          <negative-arrow v-if="item.Value > item.Previous" />
          <positive-arrow v-else />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NegativeArrow from './NegativeArrow.vue';
import PositiveArrow from './PositiveArrow.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { NegativeArrow, PositiveArrow },
  mounted() {
    this.fetchCurrencies();
  },

  data() {
    return {
      search: '',
      selectedCurrency: {
        CharCode: 'RUB',
        Value: 1,
        Name: 'Российских рублей',
        Previous: 1,
      },
    };
  },

  computed: {
    ...mapGetters(['currencies']),
    sortCurrenciesByName() {
      const query = this.search.toLowerCase();
      const selectedCurrency = this.selectedCurrency;
      return this.currencies.filter(
        (element) =>
          element !== selectedCurrency &&
          (element.Name.toLowerCase().includes(query) ||
            element.CharCode.toLowerCase().includes(query))
      );
    },
  },
  methods: {
    ...mapActions(['fetchCurrencies']),
  },
};
</script>

<style scoped>
.container {
  width: 70%;
  margin: 0px auto;
}
.currencies {
  display: flex;
  justify-content: space-around;
}

li {
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.currency-name {
  width: 300px;
}
.currency-value {
  margin-left: 40px;
  margin-right: 40px;
  text-align: center;
  width: 50px;
}
</style>
