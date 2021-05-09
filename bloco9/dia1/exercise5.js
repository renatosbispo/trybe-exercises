const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, delay) => {
  const temperature = getMarsTemperature();
  console.log(`[Received data after ${delay / 1000}s]`)
  callback(temperature);
};

const delay1 = messageDelay();
const delay2 = messageDelay();
setTimeout(sendMarsTemperature, delay1, temperatureInFahrenheit, delay1); // imprime "It is currently 47ºF at Mars", por exemplo
setTimeout(sendMarsTemperature, delay2, greet, delay2); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo