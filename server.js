import express from "express";

const app = express();

const port = 3000;

const hostname = "http://13.201.166.88";

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
