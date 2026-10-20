const sharp = require('sharp');
const path = require('path');

async function buildTransparentIPhone() {
  const srcJpg = 'C:/Users/USER/.gemini/antigravity-ide/brain/63a3ca16-fb8e-4065-bb5e-8e9b6405febf/.user_uploaded/media_1792493031291.jpg';
  const outPath = path.join(__dirname, 'public/brand/feazto-kozhikode-phone.png');

  // In media_1792493031291.jpg:
  // The phone screen is from left: 114 to 565 (width = 452)
  // top: 32 to 981 (height = 950)
  // Let's crop the screen content directly from the original uncompressed user image:
  // We can enhance the screen quality using sharpen
  const screenContent = await sharp(srcJpg)
    .extract({ left: 114, top: 32, width: 452, height: 950 })
    .sharpen({ sigma: 0.8, m1: 1.0, m2: 2.0 })
    .toBuffer();

  // Desired phone outline dimensions:
  // Let's create an ultra-crisp 2x resolution iPhone mockup:
  // Canvas width: 700, height: 950
  // Phone outer width: 500, height: 860 (aspect ratio ~1.72, not overly tall/stretched, perfectly proportioned!)
  // Screen inner width: 468, height: 828
  // Screen corner radius: 46
  // Outer shell corner radius: 58
  const canvasW = 682;
  const canvasH = 920; // Reduced height from 1024 to 920 so it's not overly long!

  const phoneW = 464;
  const phoneH = 830;
  const phoneX = Math.round((canvasW - phoneW) / 2); // 109
  const phoneY = 40;

  const borderWidth = 14;
  const screenX = phoneX + borderWidth; // 123
  const screenY = phoneY + borderWidth; // 54
  const screenW = phoneW - borderWidth * 2; // 436
  const screenH = phoneH - borderWidth * 2; // 802
  const screenRx = 44;
  const phoneRx = 56;

  // Resize the screen content with high quality Lanczos3
  const screenResized = await sharp(screenContent)
    .resize(screenW, screenH, { fit: 'fill', kernel: 'lanczos3' })
    .toBuffer();

  // Create mask for rounded screen
  const screenMaskSvg = Buffer.from(
    `<svg width="${screenW}" height="${screenH}">
      <rect x="0" y="0" width="${screenW}" height="${screenH}" rx="${screenRx}" ry="${screenRx}" fill="white"/>
    </svg>`
  );

  const roundedScreen = await sharp(screenResized)
    .composite([{ input: screenMaskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Dynamic Island on top of screen:
  // Centered at screenW/2 = 218
  // Width: 116, Height: 32, Rx: 16
  const diW = 116;
  const diH = 32;
  const diX = phoneX + Math.round((phoneW - diW) / 2);
  const diY = screenY + 11;

  // Create the transparent outline shell iPhone SVG:
  // Outer frame: sleek titanium dark gradient outline + glass highlight rim + dynamic island
  const phoneShellSvg = Buffer.from(`
    <svg width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Titanium Outer Rim Gradient -->
        <linearGradient id="titaniumRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8E8E93" stop-opacity="0.95"/>
          <stop offset="25%" stop-color="#D1D1D6" stop-opacity="1"/>
          <stop offset="50%" stop-color="#48484A" stop-opacity="0.95"/>
          <stop offset="75%" stop-color="#C7C7CC" stop-opacity="1"/>
          <stop offset="100%" stop-color="#636366" stop-opacity="0.95"/>
        </linearGradient>

        <!-- Inner Bezel Gradient -->
        <linearGradient id="innerBezel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1C1C1E"/>
          <stop offset="100%" stop-color="#000000"/>
        </linearGradient>

        <!-- Glass Sheen Glare across top-right corner -->
        <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.22"/>
          <stop offset="35%" stop-color="#FFFFFF" stop-opacity="0.08"/>
          <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0"/>
        </linearGradient>

        <!-- Speaker Earpiece Grille -->
        <linearGradient id="speakerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2C2C2E"/>
          <stop offset="100%" stop-color="#1C1C1E"/>
        </linearGradient>
      </defs>

      <!-- Soft Outer Ambient Drop Shadow -->
      <rect 
        x="${phoneX - 3}" 
        y="${phoneY - 2}" 
        width="${phoneW + 6}" 
        height="${phoneH + 6}" 
        rx="${phoneRx + 3}" 
        ry="${phoneRx + 3}" 
        fill="rgba(0, 0, 0, 0.22)" 
        filter="blur(8px)"
      />

      <!-- Outer Titanium Outer Shell (Metallic Chamfer) -->
      <rect 
        x="${phoneX}" 
        y="${phoneY}" 
        width="${phoneW}" 
        height="${phoneH}" 
        rx="${phoneRx}" 
        ry="${phoneRx}" 
        fill="url(#innerBezel)"
        stroke="url(#titaniumRim)"
        stroke-width="3.5"
      />

      <!-- Slim Inner Highlight Line for Premium Glass Bezel -->
      <rect 
        x="${phoneX + 3}" 
        y="${phoneY + 3}" 
        width="${phoneW - 6}" 
        height="${phoneH - 6}" 
        rx="${phoneRx - 2}" 
        ry="${phoneRx - 2}" 
        fill="none"
        stroke="rgba(255, 255, 255, 0.16)"
        stroke-width="1.2"
      />

      <!-- Side Buttons (Mute switch, Volume, Power) -->
      <!-- Left side buttons -->
      <rect x="${phoneX - 3.5}" y="${phoneY + 110}" width="3.5" height="26" rx="1.5" fill="#8E8E93"/>
      <rect x="${phoneX - 3.5}" y="${phoneY + 155}" width="3.5" height="48" rx="1.5" fill="#8E8E93"/>
      <rect x="${phoneX - 3.5}" y="${phoneY + 215}" width="3.5" height="48" rx="1.5" fill="#8E8E93"/>
      <!-- Right side power button -->
      <rect x="${phoneX + phoneW}" y="${phoneY + 160}" width="3.5" height="72" rx="1.5" fill="#8E8E93"/>

      <!-- Dynamic Island (Precise Pill Shape with Camera Lens + Sensor dot) -->
      <rect 
        x="${diX}" 
        y="${diY}" 
        width="${diW}" 
        height="${diH}" 
        rx="16" 
        ry="16" 
        fill="#000000"
        stroke="rgba(255, 255, 255, 0.08)"
        stroke-width="1"
      />
      <!-- Camera lens reflection -->
      <circle cx="${diX + diW - 24}" cy="${diY + 16}" r="5.5" fill="#141416"/>
      <circle cx="${diX + diW - 24}" cy="${diY + 16}" r="2.5" fill="#0C1B2A" opacity="0.8"/>
      <circle cx="${diX + diW - 23}" cy="${diY + 15}" r="1" fill="#4B9CD3" opacity="0.6"/>
      <!-- Ambient sensor -->
      <circle cx="${diX + 26}" cy="${diY + 16}" r="3" fill="#18181A"/>

      <!-- Subtle Front Glass Glare Arc (Non-intrusive) -->
      <path 
        d="M ${screenX} ${screenY + 44} 
           A 44 44 0 0 1 ${screenX + 44} ${screenY} 
           L ${screenX + screenW - 44} ${screenY} 
           A 44 44 0 0 1 ${screenX + screenW} ${screenY + 44} 
           L ${screenX + screenW} ${screenY + 340} 
           Q ${screenX + screenW * 0.4} ${screenY + 120} ${screenX} ${screenY + 280} Z" 
        fill="url(#glassGlare)" 
        pointer-events="none"
      />

      <!-- Subtle Bottom Home Indicator Bar (Transparent iPhone Touch Bar) -->
      <rect 
        x="${phoneX + Math.round((phoneW - 134) / 2)}" 
        y="${screenY + screenH - 12}" 
        width="134" 
        height="4" 
        rx="2" 
        fill="#1C1C1E" 
        opacity="0.75"
      />
    </svg>
  `);

  // Composite screen into canvas, then overlay phone shell
  const baseCanvas = sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  });

  await baseCanvas
    .composite([
      {
        input: roundedScreen,
        left: screenX,
        top: screenY
      },
      {
        input: phoneShellSvg,
        left: 0,
        top: 0
      }
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outPath);

  console.log('Successfully created high-definition transparent outline shell iPhone banner!');
}

buildTransparentIPhone().catch(console.error);
