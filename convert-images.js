const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'e-commerce.png',
  'booking.png',
  'website.png',
  'Dashboard.png'
];

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = inputDir;

async function convertToWebP() {
  console.log('🔄 Converting PNG images to WebP...\n');

  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image.replace('.png', '.webp'));

    try {
      const info = await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = info.size;
      const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);

      console.log(`✅ ${image}`);
      console.log(`   Original: ${(inputSize / 1024).toFixed(0)} KB`);
      console.log(`   WebP: ${(outputSize / 1024).toFixed(0)} KB`);
      console.log(`   Savings: ${savings}%\n`);
    } catch (error) {
      console.error(`❌ Error converting ${image}:`, error.message);
    }
  }

  console.log('✨ Conversion complete!');
}

convertToWebP();
