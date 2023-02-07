<template>
    <h1>Color Picker Game</h1>
    <h4>What color do you think will come out 🧐 ?</h4>
    <div>{{ message }}</div>
  
    <button v-for="color in colors" :key="color" @click="matchColor(color)">
      {{ color }}
    </button>
  </template>
  
 <script>
import colorPicker from '../hooks/colorPicker';

export default {
  name: "ColorPicker",
  setup(){
    const {colors, message, matchColor } = colorPicker()
    return {colors, message, matchColor }
  }
};
</script>
  
  <style>
    body{
      color:#0E0E6B;
    }
    div{
      margin:5px 5px 15px;
      
    }
    button{
      color:#0E0E6B;
      background:#A9A0A0;
      font-weight:600;
      display:inline-block;
      margin:5px;
      padding:5px 10px;
      border-radius:6px;
    }
  </style>