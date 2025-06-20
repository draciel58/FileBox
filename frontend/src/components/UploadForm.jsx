import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Tooltip } from '@mui/material';
import { CloudUploadRounded, CheckCircleOutlineOutlined, ErrorOutlineOutlined } from '@mui/icons-material';
import { validateFile } from '../utils/validateFile';

const allowedFileTypes = process.env.REACT_APP_ALLOWED_FILE_TYPES;

export default function UploadForm() {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const allowedTypes = allowedFileTypes.split(',').map((fileType) => fileType.split('/').pop());
    const tooltipMessage = `Allowed types: ${allowedTypes.join(', ')} \nMax size: ${process.env.REACT_APP_MAX_FILE_SIZE/(1024*1024)}MB`;

    const handleFileUpload = async (event) => {
        event.preventDefault();
        setUploadProgress(0);
        setUploadComplete(false);
        setUploadError(null);

        const file = event.target.elements.fileInput.files[0];
        const { valid, reason } = validateFile(file);
        
        if (!valid) {
            setUploadError(reason);
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/v0/api/files/upload`, formData,
                {
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(percentCompleted);
                    },
                }
            )
            setUploadComplete(true);
            window.location.reload();
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadError('Failed to upload file. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: 'background.paper',
                }}
            >
                <form style={{ width: '100%' }} onSubmit={handleFileUpload}>
                    <TextField
                        type="file"
                        variant="outlined"
                        inputProps={{ accept: '*', id: 'fileInput' }}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        size="large"
                        startIcon={<CloudUploadRounded />}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Upload
                    </Button>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                        <Typography variant="body2" color="textSecondary">
                            Upload Progress: {uploadProgress}%
                        </Typography>
                    )}
                    {uploadComplete && (
                        <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
                            Upload Complete <CheckCircleOutlineOutlined sx={{ ml: 1 }} />
                        </Typography>
                    )}
                    {uploadError && (
                        <Tooltip
                            title={<span style={{ whiteSpace: 'pre-line' }}>{tooltipMessage}</span>}
                            placement="right"
                            arrow
                        >
                            <Typography variant="body2" color="error" sx={{ display: 'flex', alignItems: 'center' }}>
                                {uploadError} <ErrorOutlineOutlined sx={{ ml: 1 }} />
                            </Typography>
                        </Tooltip>
                    )}
                </form>
            </Box>
        </Container>
    );
}