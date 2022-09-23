<template>
  <div class="container">
    <router-link to="/">список валют</router-link>
    <router-link to="/currencies_list">конвертер валют</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  width: 300px;
  margin: 20px auto;
  justify-content: space-around;
}
</style>
