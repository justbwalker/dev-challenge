"use strict";

import app from "./app.js";

const port = 3030;

import db from "./models/index.js";

db.initialize();

app.listen(port, () => {
  console.log("Servidor corriendo correcamente");
});
