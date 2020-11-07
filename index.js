"use strict";

import app from "./app.js";

import db from "./models/index.js";

// Initialize database with data
db.initialize();

app.listen(3030, () => {
  console.log("Server running");
});
