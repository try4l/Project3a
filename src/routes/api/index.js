const router = require("express").Router();
const truckRoutes = require("./trucks");

// Book routes
router.use("/trucks", truckRoutes);

module.exports = router;
