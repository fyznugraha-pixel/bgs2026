const sharp = require('sharp');
const path = require('path');

async function createIcon() {
  const inputPath = path.join(__dirname, 'public', 'logo', 'Logo BGS 2026.webp');
  const outputPath = path.join(__dirname, 'src', 'app', 'icon.png');
  
  try {
    await sharp(inputPath)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    console.log('Icon generated successfully!');
  } catch (err) {
    console.error('Error generating icon:', err);
  }
}

createIcon();
