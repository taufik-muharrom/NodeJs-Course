const express = require("express");
const router = express.Router();

const users = [];

router.get("/users", (req, res) => {
  res.render("users", { pageTitle: "User", userData: users });
});

router.post("/users", (req, res) => {
  users.push({
    nameUser: req.body.name_user,
    image: req.body.image,
    phone: req.body.phone,
    email: req.body.email,
  });
  console.log(users);
  res.redirect("/users");
});

module.exports = {
  users,
  router,
};
