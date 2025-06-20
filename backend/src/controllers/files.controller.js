const path = require('path');
const filesService = require('../services/files.service');

const uploadFile = async (req, res, next) => {
    try {
        const file = req.file;
        const result = await filesService.uploadFile(file);
        await res.json(result);
    } catch (error) {
        console.error(error.message);
        next(error);
    }
}

const listFiles = async (req, res, next) => {
    try {
        const result = await filesService.listFiles(req.body);
        await res.json(result);
    } catch (error) {
        console.error(error.message);
        next(error);
    }
}   

const downloadFile = async (req, res, next) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join(__dirname, '..', '..', 'uploads', filename);
        res.download(filePath, filename, (err) => {
            if (err) {
                console.error('Download error:', err);
                res.json({ error: 'File not found' });
            }
        });
    } catch (error) {
        console.error(error.message);
        next(error);
    }
}

module.exports = {
    uploadFile,
    listFiles,
    downloadFile
};




