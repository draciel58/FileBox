const { Router } = require("express");

const apiv0 = require("./v0");

const apiRoutes = Router();
apiRoutes.use("/api", apiv0);

module.exports = apiRoutes;