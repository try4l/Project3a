const router = require("express").Router();
const trucksController = require("../../controllers/truck-controller");

// Matches with "/api/trucks"
router.route("/")
  .get(trucksController.findAll)
  .post(trucksController.create);

// Matches with "/api/trucks/:id"
router
  .route("/:id")
  .get(trucksController.findById)
  .put(trucksController.update)
  .delete(trucksController.remove);

module.exports = router;
