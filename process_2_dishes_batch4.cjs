const sharp = require('sharp');
const path = require('path');

const srcDir = 'C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\63a3ca16-fb8e-4065-bb5e-8e9b6405febf\\.user_uploaded';
const outDir = 'c:\\Users\\USER\\Documents\\feazto\\feaztoweb\\public\\brand';

async function process2Dishes() {
  const dishes = [
    {
      name: 'Kolkata Lucchi with Kosha Mangsho',
      input: path.join(srcDir, 'media_1792500510891.jpg'),
      output: path.join(outDir, 'plate-kosha-mangsho.png'),
      cx: 516.5,
      cy: 421.5,
      r: 412
    },
    {
      name: 'Ambalapuzha Palada Pradhaman',
      input: path.join(srcDir, 'media_1792500511036.png'),
      output: path.join(outDir, 'plate-palada-pradhaman.png'),
      cx: 496,
      cy: 343.5,
      r: 310
    }
  ];

  for (const d of dishes) {
    const img = sharp(d.input);
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

    const width = info.width;
    const height = info.height;
    const channels = info.channels;
    const outBuf = Buffer.alloc(width * height * 4);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const inIdx = (y * width + x) * channels;
        const outIdx = (y * width + x) * 4;

        outBuf[outIdx] = data[inIdx];
        outBuf[outIdx + 1] = data[inIdx + 1];
        outBuf[outIdx + 2] = data[inIdx + 2];

        const dx = x - d.cx;
        const dy = y - d.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= d.r - 2) {
          outBuf[outIdx + 3] = channels === 4 ? data[inIdx + 3] : 255;
        } else if (dist <= d.r) {
          const factor = (d.r - dist) / 2;
          const origA = channels === 4 ? data[inIdx + 3] / 255 : 1;
          outBuf[outIdx + 3] = Math.round(origA * factor * 255);
        } else {
          outBuf[outIdx + 3] = 0;
        }
      }
    }

    // Crop precisely to the circular plate diameter with 8px margin
    const size = Math.ceil(d.r * 2) + 16;
    const left = Math.max(0, Math.round(d.cx - d.r - 8));
    const top = Math.max(0, Math.round(d.cy - d.r - 8));
    const extractW = Math.min(width - left, size);
    const extractH = Math.min(height - top, size);

    await sharp(outBuf, { raw: { width, height, channels: 4 } })
      .extract({ left, top, width: extractW, height: extractH })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(d.output);

    console.log(`Saved clean circular plate: ${path.basename(d.output)} (${d.name})`);
  }
}

process2Dishes().catch(console.error);
