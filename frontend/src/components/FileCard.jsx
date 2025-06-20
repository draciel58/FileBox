import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import { fileRenderMap } from './previews/PreviewRendererMap';

export default function FileCard({ file }){
  const fileUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/uploads/${file.stored_name}`;
  const getPreview = (filename) => {
    const ext = filename.split('.').pop().toLowerCase();
    const Renderer = fileRenderMap[ext] || (() => <div style={{ height: 160 }}>No preview</div>);
    return (
        <Card sx={{ width: 300 }}>
          <Renderer file={file} url={fileUrl} />
        </Card>
    );
  };

  const handleDownload = (file) => {
    window.open(`${process.env.REACT_APP_SERVER_BASE_URL}/v0/api/files/download/${file.stored_name}`, '_blank');
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              {getPreview(file.original_name)}
              <CardContent>
                <Typography variant="body2" noWrap title={file.original_name}>
                  <a href={fileUrl} target='_blank'>
                   {file.original_name}
                  </a>
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleDownload(file)}
                  download
                  startIcon={<GetAppIcon />}
                  sx={{ mt: 1 }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>

          </Grid>
      </Grid>
    </Box>
  );
};