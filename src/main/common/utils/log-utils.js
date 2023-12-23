module.exports = {
  log: {
    info: (callerName, message) => {
      console.info(new Date() + `: ${callerName}.` + message);
    },
    debug: (callerName, message) => {
      console.debug(new Date() + `: ${callerName}.` + message);
    },
    error: (callerName, message) => {
      console.error(new Date() + `: ${callerName}.` + message);
    },
  },
};
