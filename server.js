import express from "express";

const app = express();

const port = 3000;

const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("Server is running code updated...");
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
