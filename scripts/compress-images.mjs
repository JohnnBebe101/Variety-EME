import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

const portfolioDir = path.join(process.cwd(), 'public/assets/images/portfolio');

const images = [
  { name: 'rural-electrification', targetKB: 40 },
  { name: 'mofed-dc', targetKB: 38 }
];

async function compress() {
  for (const img of images) {
    const filePath = path.join(portfolioDir, `${img.name}.webp`);
    
    try {
      const inputBuffer = await fs.readFile(filePath);
      const metadata = await sharp(inputBuffer).metadata();
      console.log(`\n${img.name}:`);
      console.log(`  Original: ${metadata.width}x${metadata.height} (${Math.round(inputBuffer.length/1024)}KB)`);
      
      let quality = 70;
      let buffer;
      let resized = false;
      
      while (quality >= 20) {
        const ops = [];
        if (resized) {
          ops.push(sharp(inputBuffer).resize(Math.round(metadata.width * 0.9), Math.round(metadata.height * 0.9)));
        }
        const pipeline = resized 
          ? sharp(inputBuffer).resize(Math.round(metadata.width * 0.85), Math.round(metadata.height * 0.85))
          : sharp(inputBuffer);
        
        buffer = await pipeline.webp({ quality }).toBuffer();
        
        if (buffer.length / 1024 <= img.targetKB) break;
        
        quality -= 10;
        if (quality < 60 && !resized) { resized = true; quality = 70; }
      }
      
      await fs.writeFile(filePath, buffer);
      
      console.log(`  Compressed: ${Math.round(buffer.length/1024)}KB (quality: ${quality})`);
      console.log(`  Target: ≤${img.targetKB}KB ${buffer.length/1024 <= img.targetKB ? '✓' : '!'}`);
      
    } catch (err) {
      console.error(`Error processing ${img.name}:`, err.message);
    }
  }
}

compress();