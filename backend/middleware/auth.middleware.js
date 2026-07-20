const jwt = require("jsonwebtoken"); // Import JWT

const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // Retrieve the Authorization header


     if (!authHeader || !authHeader.startsWith("Bearer ")) {
     return res.status(401).json({   //Checks the authheaders 
        message: "Authorization token missing"
    })
}

    const token = authHeader.split(" ")[1]; // Extract the token by separating the "Bearer" prefix

    const decoded_token = jwt.verify(token, process.env.JWT_KEY); // Verify that the token received from the frontend is valid using the backend secret key

    req.user = decoded_token; // Attach the decoded token payload to req.user so it can be accessed in the userProfile controller

    next(); // Pass control to the next middleware
  } catch (error) {
    res.status(401).json({
      error: error.message,
      message: "Invalid token",
      success: false,
    });
  }
};

module.exports = authenticateUser;