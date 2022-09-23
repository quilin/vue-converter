<template>
  <div class="container">
    <div class="block">
      <CurrencySelectionBlock :value="first">
        <input
          type="number"
          v-model="message"
          placeholder="отредактируй меня"
        />
      </CurrencySelectionBlock>
    </div>
    <button>перевернуть</button>
    <div class="block">
      <CurrencySelectionBlock :value="second">
        <p>Введённое сообщение: {{ +second.Value * message }}</p>
      </CurrencySelectionBlock>
    </div>
  </div>
</template>

<script>
import CurrencySelectionBlock from './CurrencySelectionBlock.vue';
export default {
  components: { CurrencySelectionBlock },
  data() {
    return {
      message: '',
      first: '',
      second: '',
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  margin: 0px auto;
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
  margin: 40px auto 0px;
  width: 200px;
  height: 25px;
}
</style>
