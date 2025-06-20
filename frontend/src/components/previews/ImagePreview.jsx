const ImagePreview = ({ file, url }) => (
    <img
      src={url}
      alt={file}
      style={{ width: '100%', height: 160, objectFit: 'cover' }}
    />
  );
  
  export default ImagePreview;
  