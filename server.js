const app = require("./app");

const PORT = 3000;

app.listen(PORT, "::1", () => {
  console.log("SERVER LISTENING ON PORT 3000");
});
