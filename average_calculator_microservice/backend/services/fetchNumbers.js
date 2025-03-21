const axios = require("axios");

const API_URLS = {
  p: "http://20.244.56.144/test/primes",
  f: "http://20.244.56.144/test/fibo",
  e: "http://20.244.56.144/test/even",
  r: "http://20.244.56.144/test/rand",
};

const fetchNumbers = async (type) => {
  if (!API_URLS[type]) {
    throw new Error("Invalid number type");
  }

  try {
    const response = await axios.get(API_URLS[type], { timeout: 500 });
    return response.data.numbers || [];
  } catch (error) {
    return [];
  }
};

module.exports = { fetchNumbers };
