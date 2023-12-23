const get = () => {
  return [
    {
      requestMapping: "/users/*",
      action: (req, res, next) => {
        console.log("Need to authentication");
        next();
      },
    },
  ];
};

module.exports = {
  get,
};
