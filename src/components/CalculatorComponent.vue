<template>
    <div class="calculator">
      <div class="display">{{ expression || '0' }}</div>
      <div class="buttons">
        <!-- 数字ボタン -->
        <button v-for="number in ['6','7', '8', '9','2', '3', '4', '5','000','00','0', '1']" :key="number" @click="append(number)" class="button number">{{ number }}</button>
        <!-- 演算子ボタン -->
        <button v-for="operator in ['+', '-', '*', '/']" :key="operator" @click="append(operator)" class="button operator">{{ operator }}</button>
        <!-- 計算実行 -->
        <button @click="calculate" class="button equals">=</button>
        <!-- クリアボタン -->
        <button @click="clear" class="button clear">C</button>
      </div>
      <div v-if="result !== null" class="result">結果: {{ result }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        expression: '',
        result: null
      };
    },
    methods: {
      append(char) {
        this.expression += char;
      },
      async calculate() {
        try {
          const response = await axios.post('http://localhost:3001/calculate', { expression: this.expression });
          this.result = response.data.result;
          this.expression = '' + this.result;  // 結果を次の入力として使えるようにする
        } catch (error) {
          this.result = 'エラー';
          this.expression = '';
        }
      },
      clear() {
        this.expression = '';
        this.result = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  .display {
    width: 100%;
    padding: 20px;
    background: #444;
    color: white;
    text-align: right;
    font-size: 2rem;
    border-radius: 5px;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 10px;
  }
  
  .button {
    padding: 15px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .number {
    background-color: #f0f0f0;
  }
  
  .operator {
    background-color: #fe9241;
    color: white;
  }
  
  .equals {
    background-color: #4CAF50;
    color: white;
    grid-column: span 2;
  }
  
  .clear {
    background-color: #f44336;
    color: white;
    grid-column: span 2;
  }
  
  .button:hover {
    opacity: 0.8;
  }
  
  .result {
    margin-top: 20px;
    font-size: 24px;
    color: #333;
  }
  </style>
  