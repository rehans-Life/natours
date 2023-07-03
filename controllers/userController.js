const getUsers = async (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internel Server Error",
  });
};

const getUser = async (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internel Server Error",
  });
};

const addUser = async (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internel Server Error",
  });
};

const updateUser = async (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internel Server Error",
  });
};

const deletedUser = async (req, res) => {
  res.status(500).json({
    status: "error",
    message: "Internel Server Error",
  });
};

module.exports = {
  getUser,
  getUsers,
  updateUser,
  deletedUser,
  addUser,
};
