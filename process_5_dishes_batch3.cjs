const sharp = require('sharp');
const path = require('path');

const srcDir = 'C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\63a3ca16-fb8e-4065-bb5e-8e9b6405febf\\.user_uploaded';
const outDir = 'c:\\Users\\USER\\Documents\\feazto\\feaztoweb\\public\\brand';

// Direct pixel circle extraction for guaranteed anti-aliased clean transparent circle plate
async function extractCircularPlate(inputPath, outputPath, cx, cy, r) {
  const size = Math.round(r * 2);
  const left = Math.round(cx - r);
  const top = Math.round(cy - r);

  const { data, info } = await sharp(inputPath)
    .extract({
      left: Math.max(0, left),
      top: Math.max(0, top),
      width: size,
      height: size
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x - r;
      const dy = y - r;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const idx = (y * size + x) * 4;
      if (dist > r) {
        data[idx + 3] = 0; // Transparent background
      } else if (dist > r - 1.5) {
        const factor = Math.max(0, Math.min(1, r - dist));
        data[idx + 3] = Math.round(data[idx + 3] * factor);
      }
    }
  }

  await sharp(data, {
    raw: {
      width: size,
      height: size,
      channels: 4
    }
  })
  .resize(600, 600)
  .png()
  .toFile(outputPath);

  console.log(`Saved clean circular plate: ${path.basename(outputPath)}`);
}

async function run() {
  // 1. Goan Prawn Curry with Toddy Vinegar (media_1792497950462.png: 740x740)
  // White ceramic bowl with tiger prawns, curry leaves, crimson sauce
  // cx: 368.5, cy: 358.5, r: 278
  await extractCircularPlate(
    path.join(srcDir, 'media_1792497950462.png'),
    path.join(outDir, 'plate-goan-prawn.png'),
    368.5, 358.5, 278
  );

  // 2. Slow-Stewed Nizami Mutton Haleem (media_1792497950478.png: 554x554)
  // Round earthenware bowl with birista, lemon wedges, mint, coriander
  // cx: 279.5, cy: 281, r: 212
  await extractCircularPlate(
    path.join(srcDir, 'media_1792497950478.png'),
    path.join(outDir, 'plate-nizami-haleem.png'),
    279.5, 281, 212
  );

  // 3. Fermented Palappam & Veg Ishtu (media_1792497950498.png: 480x480)
  // Blue-rimmed ceramic enamel bowl with coconut stew, ginger, curry leaves, veggies
  // cx: 240, cy: 240, r: 226
  await extractCircularPlate(
    path.join(srcDir, 'media_1792497950498.png'),
    path.join(outDir, 'plate-palappam-stew.png'),
    240, 240, 226
  );

  // 4. Andhra Gongura Mamsam & Pappu (media_1792498161527.jpg: 1024x1024)
  // Authentic terracotta plate with gongura pappu in terracotta bowl with millets/rice
  // cx: 513, cy: 507.5, r: 494
  await extractCircularPlate(
    path.join(srcDir, 'media_1792498161527.jpg'),
    path.join(outDir, 'plate-gongura-mamsam.png'),
    513, 507.5, 494
  );

  // 5. Irani Cafe Mutton Kheema Pav (media_1792498489708.png: 1024x736)
  // Round ceramic plate with spiced minced kheema, buttered ladi pav, lemon, peas
  // cx: 525.5, cy: 408.5, r: 320
  await extractCircularPlate(
    path.join(srcDir, 'media_1792498489708.png'),
    path.join(outDir, 'plate-irani-kheema.png'),
    525.5, 408.5, 320
  );
}

run().catch(console.error);
