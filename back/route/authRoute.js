const { Router } = require("express");
const router = Router();
const controller = require("../controller/authController");

router.get("/all-projects", controller.allProjects_get);
router.get("/project", controller.project_get);
router.get("/download-cv", controller.cv_get);

module.exports = router;
