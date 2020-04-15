const path = require("path");
module.exports = {
  route: "/login",
  middleware: (req, res) => {
    res.sendFile(path.join(__dirname, "../public/auth.html"));
  }
};
