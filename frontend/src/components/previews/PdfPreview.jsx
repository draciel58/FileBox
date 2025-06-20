const PdfPreview = ({ file, url }) => (
    <iframe
      src={url}
      title="PDF Preview"
      width="100%"
      height="160"
      style={{ border: 'none' }}
    />
  );
  
  export default PdfPreview;
  