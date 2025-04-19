
/**
 * Utility function to correctly prefix image paths for GitHub Pages deployment
 * 
 * @param path The relative path to the image
 * @returns The properly formatted image path with base prefix if needed
 */
export const getImagePath = (path: string): string => {
  // Check if the path already starts with the base path
  if (path.startsWith('/variety-stores-showcase/')) {
    return path;
  }
  
  // Check if the path is an absolute URL (starts with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Add the base path prefix to the path
  return `/variety-stores-showcase${path.startsWith('/') ? path : `/${path}`}`;
};
