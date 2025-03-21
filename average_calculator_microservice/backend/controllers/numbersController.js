const { fetchNumbers } = require("../services/numberService");
const Window = require("../models/windowModel");

const windowSize = 10;
let windowInstance = new Window(windowSize);

const getNumbers = async (req, res) => {
  const { type } = req.params;

  try {
    const newNumbers = await fetchNumbers(type);

    const prevState = [...windowInstance.numbers];
    windowInstance.addNumbers(newNumbers);

    res.json({
      windowPrevState: prevState,
      windowCurrState: windowInstance.numbers,
      numbers: newNumbers,
      ave: windowInstance.calculateAverage(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getNumbers };
