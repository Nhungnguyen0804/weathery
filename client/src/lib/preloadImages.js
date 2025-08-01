export function preloadImages(imageList) {
  imageList.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
