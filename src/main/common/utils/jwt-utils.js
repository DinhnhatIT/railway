const jwtUtils = require("jsonwebtoken");
const authenticationConstant = require("../constants/authentication-constant");
const { log } = require("./log-utils");

const SECRET_KEY = authenticationConstant.JWT_SECRET_KEY;
const DEFAULT_EXPIRED = authenticationConstant.JWT_DEFAULT_EXPIRED_TIME;

const generateToken = (payload, tokenLife = DEFAULT_EXPIRED) => {
  try {
    return jwtUtils.sign(
      {
        payload,
      },
      SECRET_KEY,
      {
        algorithm: "HS256",
        expiresIn: tokenLife,
      }
    );
  } catch (error) {
    log.error("JWT Utils", `Error in generate access token:  + ${error}`);
    return null;
  }
};

const extractToken = (token) => {
  try {
    return jwtUtils.verify(token, SECRET_KEY, {
      ignoreExpiration: true,
    });
  } catch (error) {
    log.error("JWT Utils", `Error in decode access token: ${error}`);
    return null;
  }
};

module.exports = {
  generateToken,
  extractToken,
};
