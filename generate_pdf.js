const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const htmlPath = path.resolve('D:/Front_End/My_Portfolio/My_Portfolio/cv_en.html');
  await page.goto('file:///' + htmlPath, { waitUntil: 'networkidle0' });
  
  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  
  await page.pdf({
    path: 'D:/Front_End/My_Portfolio/My_Portfolio/Ahmed_CV_EN.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    preferCSSPageSize: false,
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();
