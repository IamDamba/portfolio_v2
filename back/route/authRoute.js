const {Router} = require('express');
const router = Router();
const controller = require('../controller/authController');

router.get('/api/all-projects', controller.allProjects_get);
router.get('/api/project', controller.project_get);
router.get('/api/download-cv', controller.cv_get);

module.exports = router;