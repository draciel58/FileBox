import React from 'react';
import UploadForm from '../components/UploadForm';
import ListFiles from '../components/ListFiles';

function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        bgcolor: '#f0f4f8',
        p: 4,
      }}
    >
      <UploadForm />
      <ListFiles />
    </div>
  );
}

export default HomePage;