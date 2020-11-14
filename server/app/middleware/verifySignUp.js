const db = require("../models");
const User = db.user;

checkDuplicateICOrEmail = (req, res, next) => {
  
  // ic
  User.findOne({
    where: {
      ic: req.body.ic
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! IC is already existed!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateICOrEmail: checkDuplicateICOrEmail
};

module.exports = verifySignUp;
