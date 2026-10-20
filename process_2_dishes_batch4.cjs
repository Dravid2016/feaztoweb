const sharp = require('sharp');
const fs = require('fs');

async function processDish(srcPath, outPath, cx, cy, r, size = 600) {
  console.log(`Processing: ${srcPath} -> ${outPath}`);
  const img = sharp(srcPath);
  const meta = await img.metadata();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const w = info.width;
  const h = info.height;

  // New buffer with RGBA (4 channels)
  const outBuf = Buffer.alloc(w * h * 4);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * channels;
      const dstIdx = (y * w + x) * 4;

      const rVal = data[srcIdx];
      const gVal = data[srcIdx + 1];
      const bVal = data[srcIdx + 2];
      const aVal = channels === 4 ? data[srcIdx + 3] : 255;

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Feather / anti-alias the circular border
      let circleAlpha = 1;
      if (dist > r) {
        circleAlpha = 0;
      } else if (dist > r - 1.5) {
        circleAlpha = (r - dist) / 1.5;
      }

      outBuf[dstIdx] = rVal;
      outBuf[dstIdx + 1] = gVal;
      outBuf[dstIdx + 2] = bVal;
      outBuf[dstIdx + 3] = Math.round(aVal * circleAlpha);
    }
  }

  // Crop to square bounding box around the circle [cx - r, cy - r, 2r, 2r]
  const cropLeft = Math.max(0, Math.floor(cx - r));
  const cropTop = Math.max(0, Math.floor(cy - r));
  const cropSize = Math.min(
    w - cropLeft,
    h - cropTop,
    Math.ceil(r * 2)
  );

  await sharp(outBuf, {
    raw: {
      width: w,
      height: h,
      channels: 4
    }
  })
  .extract({
    left: cropLeft,
    top: cropTop,
    width: cropSize,
    height: cropSize
  })
  .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ quality: 95 })
  .toFile(outPath);

  console.log(`Saved clean circular plate: ${outPath}`);
}

async function main() {
  const baseUploads = 'C:/Users/USER/.gemini/antigravity-ide/brain/63a3ca16-fb8e-4065-bb5e-8e9b6405febf/.user_uploaded/';
  
  // 1. Kolkata Lucchi with Kosha Mangsho
  await processDish(
    baseUploads + 'media_1792498747584.jpg',
    'public/brand/plate-kosha-mangsho.png',
    511,
    409,
    388,
    600
  );

  // 2. Ambalapuzha Palada Pradhaman
  await processDish(
    baseUploads + 'media_1792499256057.png',
    'public/brand/plate-palada-pradhaman.png',
    496,
    344,
    304,
    600
  );
}

main().catch(console.error);
