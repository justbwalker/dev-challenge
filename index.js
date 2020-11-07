"use strict";

import app from "./app.js";

const port = 3030;

import db from "./models/index.js";

// Initialize database with data
db.initialize();

app.listen(port, () => {
  console.log("Server running");
});
