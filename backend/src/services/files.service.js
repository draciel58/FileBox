const path = require('path');
const fs = require('fs');
const { getAll, insertOne } = require('../utils/db_utils');

exports.uploadFile = async (file) => {
    if (!file) return { error: 'No file uploaded' };
    const fileData = {
        original_name: file.originalname,
        stored_name: file.filename,
        type: file.mimetype,
        size: file.size,
        path: file.path,
        uploaded_at: new Date()
    };
    await insertOne('files', fileData);
    return fileData;
};

exports.listFiles = async () => {
    const files = await getAll('files');
    const results = [];
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(__dirname, '../../uploads', file.stored_name);
        const exists = fs.existsSync(filePath);
        if (exists) results.push(file);
    }
    return results;
}

