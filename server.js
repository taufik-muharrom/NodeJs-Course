const express = require("express");
const path = require("path");

const app = express();
const rootDir = path.dirname(process.mainModule.filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
