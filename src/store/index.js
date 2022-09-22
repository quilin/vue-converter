import { createStore } from 'vuex';

export default createStore({
  state: {
    currencies: [],
    baseValute: null,
    currenciesWithoutBaseValute: [],
  },
  getters: {
    getCurrencies(state) {
      return state.currencies;
    },
    getBaseValute(state) {
      return state.baseValute;
    },
    getCurrenciesWithoutBaseValute(state) {
      if (state.currenciesWithoutBaseValute.length === 0) {
        return state.currencies;
      } else {
        state.currenciesWithoutBaseValute = state.currencies.filter(
          (item) => item.CharCode != state.baseValute.CharCode
        );
        return state.currenciesWithoutBaseValute;
      }
    },
  },

  actions: {
    async fetchCurrencies({ commit }) {
      const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
      let currencies = await res.json();
      currencies = Object.values(currencies.Valute);
      commit('updateCurrencies', currencies);
    },
    changeBaseValute({ commit }, baseValute) {
      console.log(baseValute);
      commit('changeBaseValuteInState', baseValute);
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
    changeBaseValuteInState(state, baseValute) {
      state.baseValute = baseValute;
    },
  },
  modules: {},
});
