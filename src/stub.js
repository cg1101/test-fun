export const func = (message) => {
  console.log('Hello!');
  console.log(`>>>${message}<<<`);
  console.log('Bye');
}

export const sleep = (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
