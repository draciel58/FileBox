const { Router } = require('express');
const router = Router();

const filesRoutes = require('./files.route');

router.use('/files', filesRoutes);

module.exports = router;
