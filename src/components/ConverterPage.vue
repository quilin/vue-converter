<template>
  <div class="container">
    <div class="block">
      <currency-selection-block v-model="first">
        <input type="number" v-model="amount" placeholder="отредактируй меня" />
      </currency-selection-block>
    </div>
    <button>перевернуть</button>
    <div class="block">
      <currency-selection-block v-model="second">
        <p>Введённое сообщение: <template v-if="first">{{ first.Value * amount }}</template></p>
      </currency-selection-block>
    </div>
  </div>
</template>

<script>
import CurrencySelectionBlock from './CurrencySelectionBlock.vue';
export default {
  components: { CurrencySelectionBlock },
  data() {
    return {
      amount: 0,
      first: null,
      second: null,
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
}
.block {
  height: 400px;
  width: 400px;
  background-color: aquamarine;
}
button {
  height: 30px;
  width: 120px;
  cursor: pointer;
}
input {
  margin: 40px auto 0;
  width: 200px;
  height: 25px;
}
</style>
