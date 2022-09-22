import { createStore } from 'vuex';

export default createStore({
  state: {
    currencies: [],
  },
  getters: {
    currencies: (state) => state.currencies,
  },

  actions: {
    async fetchCurrencies({ commit }) {
      const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
      let currencies = await response.json();
      currencies = Object.values(currencies.Valute);
      commit('updateCurrencies', currencies);
    },
  },
  mutations: {
    updateCurrencies(state, currencies) {
      currencies.push({
        CharCode: 'RUB',
        Value: 1,
        Name: 'Российских рублей',
        Previous: 1,
      });
      state.currencies = currencies;
    },
  },
  modules: {},
});
