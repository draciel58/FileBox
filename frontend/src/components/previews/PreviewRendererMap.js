import ImagePreview from './ImagePreview';
import PdfPreview from './PdfPreview';
import IconPreview from './IconPreview';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export const fileRenderMap = {
  jpg: ImagePreview,
  jpeg: ImagePreview,
  png: ImagePreview,
  gif: ImagePreview,
  webp: ImagePreview,

  pdf: PdfPreview,

  doc: (props) => <IconPreview icon={<InsertDriveFileIcon fontSize="large" />} {...props} />,
  docx: (props) => <IconPreview icon={<InsertDriveFileIcon fontSize="large" />} {...props} />,
  xls: (props) => <IconPreview icon={<InsertDriveFileIcon fontSize="large" />} {...props} />,
  xlsx: (props) => <IconPreview icon={<InsertDriveFileIcon fontSize="large" />} {...props} />,
};
