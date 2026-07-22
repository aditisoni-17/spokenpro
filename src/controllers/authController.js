const register = (req, res) => {
  res.json({
    success: true,
    message: "Register Controller Working",
  });
};

const login = (req, res) => {
  res.json({
    success: true,
    message: "Login Controller Working",
  });
};

module.exports = {
  register,
  login,
};