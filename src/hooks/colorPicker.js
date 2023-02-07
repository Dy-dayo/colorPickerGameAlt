import { ref } from "@vue/reactivity";

const colorPicker= ()=>{
    let message = ref("Pick a color...");
  
    const colors = ["green", "red", "blue", "purple","Yellow", "Pink"];

      const matchColor = (value) => {
        // do a random color based on the array index;
        const randomNumber = Math.floor(Math.random() *5) + 1; //between 1 - 4
        if (colors[randomNumber] === value) {
          message.value = `Wow! You got it. You win🥳🥳[answer: ${colors[randomNumber]}]`;
          return;
        }
        // kdkdkd
        message.value = `You guessed wrong😛 😛.  [answer: ${colors[randomNumber]}]`;
      };
  
      return { colors, message, matchColor };
}

export default colorPicker
      