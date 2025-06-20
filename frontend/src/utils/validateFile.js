const MAX_FILE_SIZE = process.env.REACT_APP_MAX_FILE_SIZE;
const allowedTypes = process.env.REACT_APP_ALLOWED_FILE_TYPES?.split(',') || [];

export const validateFile = (file) => {
  if (!file) return { valid: false, reason: 'No file selected' };

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, reason: 'Unsupported file type' };
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, reason: 'File size exceeds 5MB limit' };
  }

  return { valid: true };
};
