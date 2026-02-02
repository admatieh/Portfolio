export function preloadImages(srcList, onProgress) {
  const unique = Array.from(new Set(srcList)).filter(Boolean);
  if (unique.length === 0) {
    onProgress?.(100);
    return Promise.resolve();
  }

  let loaded = 0;

  const update = () => {
    const pct = (loaded / unique.length) * 100;
    onProgress?.(pct);
  };

  update();

  const promises = unique.map(
    (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = async () => {
          loaded += 1;
          update();
          resolve();
        };
        img.onerror = () => {
          // Don’t block the whole app on one broken image
          loaded += 1;
          update();
          resolve();
        };
        img.src = src;
      })
  );

  return Promise.all(promises).then(() => onProgress?.(100));
}
