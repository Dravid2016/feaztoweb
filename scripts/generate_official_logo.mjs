import sharp from 'sharp';
import fs from 'fs';

async function main() {
  const src = 'public/brand/feazto-logo-official.png';
  const meta = await sharp(src).metadata();
  const width = meta.width;
  const height = meta.height;
  const rx = 18;

  // 1. Generate rounded pill PNG
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect x="0" y="0" width="${width}" height="${height}" rx="${rx}" ry="${rx}" fill="white"/></svg>`
  );

  await sharp(src)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile('public/brand/feazto-logo-pill.png');

  // 2. Also update feazto-logo.png with pill version for clean rendering
  await sharp(src)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile('public/brand/feazto-logo.png');

  console.log('Successfully generated public/brand/feazto-logo.png and feazto-logo-pill.png');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
