import express from "express";
const app = express();
const PORT = 3000;

app.get("/api/test", (req, res) => {
  res.status(200).send("Hello World! this is new another new test confirm");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});     

