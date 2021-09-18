var express = require('express');
var router = express.Router();
const session = require("express-session");

//hold registered user in this array
const allUsers = [
  { id: 0, name: "", lastName: "", password: "", passwordConfirm: "", email: "" },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(allUsers);
});

router.post('/', function (req, res, next) {
  console.log("New posted user", req.body);

  const newId = allUsers[allUsers.length - 1].id + 1;

  let newUSer = {
    id: newId,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    email: req.body.email,
  }
  allUsers.push({

    id: newId,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    email: req.body.email
  });
  res.json({ message: "New user created.", location: "/users/" + newId });
  //console.log(allUsers);
});


router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let exist = false;
  let foundIndex;
  for (let index = 0; index < allUsers.length && exist == false; index++) {
    if (allUsers[index].email === email) {
      exist = true;
      foundIndex = index;
    }
  }
  if (exist) {

    if (password === allUsers[foundIndex].password) {

      req.session.user = allUsers[foundIndex];
      console.log(req.session.user);
      res.send(allUsers[foundIndex]);
      console.log("Login succes");
    }
    else {
      res.send({ message: "Wrong username/password combination!" });
    }
  }
  else {
    res.send({ message: "User doesn't exist" });
  }
});



module.exports = router;
