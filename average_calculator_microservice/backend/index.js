const express = require("express");
const cors = require("cors");
const numberRoutes = require("./routes/numberRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/numbers", numberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
