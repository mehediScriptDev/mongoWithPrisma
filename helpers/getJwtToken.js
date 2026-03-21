const jwt = require("jsonwebtoken");

const getJwtToken = (user) => {
  return jwt.sign({ userId: userId }, process.env.JWT_TOKEN, {
    expiresIn: "1 day",
  });
};

module.exports = getJwtToken;
