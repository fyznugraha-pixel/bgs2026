import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
      const parsedPath = path.parse(fullPath);
      const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
      
      console.log(`Converting ${fullPath} to ${webpPath}...`);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        console.log(`Successfully converted. Deleting original: ${fullPath}`);
        await fs.unlink(fullPath);
      } catch (error) {
        console.error(`Failed to convert ${fullPath}:`, error);
      }
    }
  }
}

const publicDir = path.resolve('./public');
console.log(`Starting compression in ${publicDir}`);
await processDirectory(publicDir);
console.log('Finished converting all images to WebP.');
