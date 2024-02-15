const express = require("express");
const path = require("path");
const app = express();

// Set the path for static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "holiday")));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
