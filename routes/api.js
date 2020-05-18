var router = require("express").Router();
var apiController = require("../controller/apiController");
const { upload } = require("../middleware/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", upload, apiController.bookingPage);

module.exports = router;
