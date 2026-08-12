const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDirs = [
  path.join(__dirname, 'public', 'aset visual'),
  path.join(__dirname, 'public', 'logo'),
  path.join(__dirname, 'public', 'aset logo'), // Added the new logo directory
  path.join(__dirname, 'public') // root public for any floating pngs
];

const srcDir = path.join(__dirname, 'src');

const imgExtensions = ['.png', '.jpg', '.jpeg'];

async function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imgExtensions.includes(ext)) {
        const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          
          fs.unlinkSync(fullPath); // Delete old file
          console.log(`Successfully converted & deleted original: ${file}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

function updateReferences(directory) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updateReferences(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      imgExtensions.forEach(ext => {
        // Simple string replace for .png, .jpg, .jpeg, ignoring case but preserving the rest of the string
        // Since we are changing extensions to .webp, we can use a global regex.
        // We only want to replace extensions that are part of image paths.
        // Regex looks for .png", .png', .png`, or .jpg", etc.
        const regex = new RegExp(`\\${ext}(["'\`\\?\\#\\s])`, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, `.webp$1`);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated references in ${file}`);
      }
    }
  }
}

async function main() {
  console.log("Starting conversion...");
  for (const dir of publicDirs) {
    await processDirectory(dir);
  }
  
  console.log("Updating codebase references...");
  updateReferences(srcDir);
  
  console.log("Done!");
}

main();
