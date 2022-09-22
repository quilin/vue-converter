<template>
  <div class="container">
    <h1>список валют</h1>
    <div class="currencies">
      <label for="find"
        >найти валюту
        <input type="search" name="find" v-model="search" />
      </label>
      <label for="current-valute"
        >текущая валюта
        <select name="current-valute" id="select-id" v-model="selectedCurrency">
          <option v-for="item in getCurrencies" :key="item.ID" :value="item">
            {{ item.CharCode }}
          </option>
        </select>
      </label>
      <span>выбрано: {{ CharCode }}</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in sortCurrenciesByName" :key="item.ID">
          <div class="currency-name">{{ item.Name }} ({{ item.CharCode }})</div>
          <div class="currency-value">
            {{ item.Value }}
          </div>
          <div>{{ (item.Value - item.Previous).toFixed(4) }}</div>
          <div v-if="item.Value - item.Previous > 0">
            <RedArrow></RedArrow>
          </div>
          <div v-else>
            <GreenArrow></GreenArrow>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RedArrow from './RedArrow.vue';
import GreenArrow from './GreenArrow.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: '',
      selectedCurrency: null,
    };
  },
  computed: {
    ...mapGetters([
      'getCurrencies',
      'getBaseValute',
      'getCurrenciesWithoutBaseValute',
    ]),
    sortCurrenciesByName() {
      return this.getCurrenciesWithoutBaseValute.filter((element) => {
        return (
          element.Name.toLowerCase().includes(this.search.toLowerCase()) ||
          element.CharCode.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
    CharCode() {
      console.log(this.selectedCurrency);
      return this.selectedCurrency;
    },
  },
  methods: {
    ...mapActions(['fetchCurrencies', 'changeBaseValute']),
  },
  async mounted() {
    this.fetchCurrencies();
  },
  components: { RedArrow, GreenArrow },
};
</script>

<style scoped>
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
