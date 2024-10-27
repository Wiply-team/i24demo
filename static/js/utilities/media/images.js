// imagePlaceholder :: String
// Using a placeholder on the CDN enables us to use our Imaginary service to
// resize it/change its format on demand
export const imagePlaceholder =
  "https://cdn.i24news.tv/upload/image/placeholder.jpg";

// i24newsLogo :: String
export const i24newsLogo =
  "https://cdn.i24news.tv/uploads/ae/06/64/bc/85/ef/69/fb/c2/13/ef/4f/e2/a0/3b/df/ae0664bc85ef69fbc213ef4fe2a03bdf.png";

// i24newsUpdatesLogo :: String
export const i24newsUpdatesLogo =
  "https://cdn.i24news.tv/uploads/77/3e/cf/97/0a/f8/ea/dd/0c/92/f5/cc/a1/0c/5b/07/773ecf970af8eadd0c92f5cca10c5b07.png";

// acceptedImageTypes :: [String]
export const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];

// maxFileSize :: Number
// The max file size supported in bytes
export const maxFileSize = 2000000;

// buildImage :: Image -> Object
export const buildImage = (image) => ({
  src: image ? image.href : imagePlaceholder,
  alt: image ? image.legend : "i24NEWS",
});
