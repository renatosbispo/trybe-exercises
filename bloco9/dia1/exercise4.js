const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (delay) => {
  console.log(`[Received after ${delay / 1000}s] Mars temperature is: ${getMarsTemperature()} degree Celsius`);
};

const delay = messageDelay();
setTimeout(sendMarsTemperature, delay, delay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo