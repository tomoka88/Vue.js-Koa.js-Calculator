<template>
  <div id="app">
    <calculator/>
  </div>
</template>

<script>
// Calculator コンポーネントをインポートします
import Calculator from './components/CalculatorComponent.vue'

export default {
  name: 'App',
  components: {
    // Calculator コンポーネントを登録します
    Calculator
  }
}
</script>

<style>
/* ここにアプリケーション全体のスタイリングを追加できます */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
