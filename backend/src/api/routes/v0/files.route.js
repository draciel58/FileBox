const { Router } = require('express');
const router = Router();
const upload = require('../../../middlewares/multer');
const filesController = require('../../../controllers/files.controller');

router.post('/upload', upload.single('file'), filesController.uploadFile);
router.get('/', filesController.listFiles);
router.get('/download/:filename', filesController.downloadFile);

module.exports = router;
