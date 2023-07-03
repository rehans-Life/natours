const { Router } = require("express");
const {
  getTour,
  getToures,
  addTour,
  deletedTour,
  updateTour,
  checkID,
} = require("../controllers/tourController");

const router = Router();

// This middleware is going to get executed if the id parameter exists
// within the request on the below routes.
router.param("id", checkID);

router.route("/").get(getToures).post(addTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deletedTour);

module.exports = router;
