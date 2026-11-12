import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE_URL = 'http://localhost:4173/';
const OUTPUT_DIR = './test_screenshots_v3';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'iPhone-SE-320x568', width: 320, height: 568, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'Galaxy-Redmi-360x800', width: 360, height: 800, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
  { name: 'iPhone-8-375x667', width: 375, height: 667, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'iPhone-14-390x844', width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
  { name: 'Pixel-S23-412x915', width: 412, height: 915, deviceScaleFactor: 2.625, isMobile: true, hasTouch: true },
  { name: 'Pro-Max-430x932', width: 430, height: 932, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
  { name: 'Android-Landscape-800x360', width: 800, height: 360, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'iPad-Mini-768x1024', width: 768, height: 1024, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'iPad-Air-820x1180', width: 820, height: 1180, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'Tablet-Landscape-1024x768', width: 1024, height: 768, deviceScaleFactor: 2, isMobile: false, hasTouch: false },
  { name: 'Laptop-1280x800', width: 1280, height: 800, deviceScaleFactor: 1, isMobile: false, hasTouch: false },
  { name: 'MacBook-1440x900', width: 1440, height: 900, deviceScaleFactor: 2, isMobile: false, hasTouch: false },
  { name: 'Desktop-1920x1080', width: 1920, height: 1080, deviceScaleFactor: 1, isMobile: false, hasTouch: false },
  { name: 'Ultrawide-2560x1440', width: 2560, height: 1440, deviceScaleFactor: 1, isMobile: false, hasTouch: false },
];

const ROUTES = [
  '/',
  '/#/our-story',
  '/#/kitchen-verification',
  '/#/download',
  '/#/careers',
  '/#/faq',
  '/#/contact',
  '/#/discover'
];

async function runAudit() {
  console.log(`Starting Puppeteer layout audit using ${CHROME_PATH}...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  let totalIssues = 0;
  const results = [];

  for (const vp of VIEWPORTS) {
    await page.setViewport(vp);
    console.log(`\n============================================================`);
    console.log(`Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`============================================================`);

    // Test Home page thoroughly
    const targetUrl = `${BASE_URL}`;
    await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
    await new Promise((r) => setTimeout(r, 800));

    // Measure document overflow
    const layout = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const bodyW = document.body.scrollWidth;

      // Find any elements sticking out beyond the screen
      const allEls = Array.from(document.querySelectorAll('*'));
      const overflowing = [];

      for (const el of allEls) {
        // Skip hidden or zero-size elements
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;

        // Check if an ancestor clips this element within the viewport bounds
        let isClipped = false;
        let parent = el.parentElement;
        while (parent && parent !== document.documentElement && parent !== document.body) {
          const parentStyle = window.getComputedStyle(parent);
          const ox = parentStyle.overflowX;
          const o = parentStyle.overflow;
          if (ox === 'hidden' || ox === 'clip' || o === 'hidden' || o === 'clip') {
            const pRect = parent.getBoundingClientRect();
            if (pRect.right <= winW + 2) {
              isClipped = true;
              break;
            }
          }
          parent = parent.parentElement;
        }

        // Check if element right exceeds viewport without being clipped
        if (!isClipped && rect.right > winW + 1.5 && rect.left >= 0) {
          overflowing.push({
            tag: el.tagName.toLowerCase(),
            class: (el.className && typeof el.className === 'string') ? el.className.slice(0, 50) : '',
            id: el.id || '',
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            left: Math.round(rect.left)
          });
        }
      }

      const headerActions = document.querySelector('.actions-pill-island');
      const headerBrand = document.querySelector('.brand-pill-island');
      const mobileToggle = document.querySelector('.mobile-pill-toggle');

      return {
        docW,
        winW,
        bodyW,
        hasHorizontalScroll: docW > winW + 1,
        overflowDelta: Math.max(0, docW - winW),
        overflowElements: overflowing.slice(0, 5),
        header: {
          brandRight: headerBrand ? Math.round(headerBrand.getBoundingClientRect().right) : null,
          actionsLeft: headerActions ? Math.round(headerActions.getBoundingClientRect().left) : null,
          actionsRight: headerActions ? Math.round(headerActions.getBoundingClientRect().right) : null,
          actionsWidth: headerActions ? Math.round(headerActions.getBoundingClientRect().width) : null,
          mobileToggleVisible: mobileToggle ? window.getComputedStyle(mobileToggle).display !== 'none' : false,
          mobileToggleRight: mobileToggle ? Math.round(mobileToggle.getBoundingClientRect().right) : null,
        }
      };
    });

    const isPass = !layout.hasHorizontalScroll && layout.overflowElements.length === 0;
    if (!isPass) {
      totalIssues++;
      console.error(`❌ FAIL: Horizontal scroll detected (${layout.docW}px > ${layout.winW}px, delta +${layout.overflowDelta}px)`);
      if (layout.overflowElements.length > 0) {
        console.error('Overflow elements:', layout.overflowElements);
      }
    } else {
      console.log(`✅ PASS: Perfect fit! docW=${layout.docW}px, winW=${layout.winW}px, scroll=false`);
    }

    console.log(`Header layout: Brand right=${layout.header.brandRight}px, Actions left=${layout.header.actionsLeft}px, Actions right=${layout.header.actionsRight}px (width=${layout.header.actionsWidth}px, toggleVisible=${layout.header.mobileToggleVisible})`);

    // Capture screenshot
    const shotPath = path.join(OUTPUT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });

    results.push({ viewport: vp.name, ...layout, passed: isPass });
  }

  // Also verify secondary routes on mobile 360x800 and desktop 1280x800
  console.log(`\n============================================================`);
  console.log(`Testing Secondary Pages Across Breakpoints`);
  console.log(`============================================================`);

  for (const route of ROUTES) {
    if (route === '/') continue;
    for (const testW of [360, 1280]) {
      await page.setViewport({ width: testW, height: 800 });
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
      await new Promise((r) => setTimeout(r, 600));

      const routeCheck = await page.evaluate(() => {
        return {
          docW: document.documentElement.scrollWidth,
          winW: window.innerWidth,
          hasScroll: document.documentElement.scrollWidth > window.innerWidth + 1
        };
      });

      if (routeCheck.hasScroll) {
        totalIssues++;
        console.error(`❌ FAIL Route ${route} @ ${testW}px: docW=${routeCheck.docW} > winW=${routeCheck.winW}`);
      } else {
        console.log(`✅ PASS Route ${route} @ ${testW}px (docW=${routeCheck.docW} === winW=${routeCheck.winW})`);
      }
    }
  }

  await browser.close();

  console.log(`\n============================================================`);
  console.log(`AUDIT COMPLETE: ${totalIssues === 0 ? 'ALL 14 VIEWPORTS & ROUTES PASSED (0 ERRORS)' : `${totalIssues} ISSUES FOUND`}`);
  console.log(`============================================================`);
  return { totalIssues, results };
}

runAudit().then(res => {
  if (res.totalIssues > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}).catch(err => {
  console.error('Audit fatal error:', err);
  process.exit(1);
});
