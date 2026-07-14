const jwt = require("jsonwebtoken"); // using jwt
const { decode } = require("node:punycode");
const { json } = require("node:stream/consumers");

const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // assigning the token
    const token = authHeader.split(" ")[1]; // spliting the bearer from the token

    const decoded_token = jwt.verify(token, process.env.JWT_KEY); // verify the the form the fronted is same as the backed by adding the secret key

    req.user = decoded_token; // assigining the decoded code to the req. user can be accessed in the userProfile controller

    next(); // leads to next module of code
  } catch (error) {
    res.status(401).json({
      error: error.message,
      message: "invalid token",
      success: false,
    });
  }
};

module.exports = authenticateUser;
