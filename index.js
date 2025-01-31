const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const response = {
    email: "malach.salama@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/malachsalama/personalinfo",
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
