import React, { useEffect, useState } from 'react';
import FileCard from './FileCard';
import { Box, Grid, Container, CircularProgress } from '@mui/material';

export default function ListFiles(){
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/v0/api/files`)
      .then(async (res) => {
        setFiles(await res.json());
      })
      .catch((err) => console.error('Failed to fetch files:', err));
    setLoading(false);    
  }, []);

  return (
    <div>
      {loading && 
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <CircularProgress />
      </Box>}
      {files.length === 0 ? (
        <p style={{ textAlign: "center"}}>No Files Uploaded</p>
      ) : (
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {files.map((file, index) => (
                <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}      
                    md={4}     
                    lg={3}   
                >
                    <FileCard file={file} />
                </Grid>
                ))}
            </Grid>
        </Container>
      )}
    </div>
  );
};
