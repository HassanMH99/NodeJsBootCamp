const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());
app.use("/movies", require("./routeMovies"));

app.listen(port, () => {
  console.log("The server running");
});
