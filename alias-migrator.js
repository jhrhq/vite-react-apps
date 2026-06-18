import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ESM node scripts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target folder to process
const TARGET_DIR = path.resolve(__dirname, './src/apps/game-hub');

// Regex to capture relative imports/exports like: from './components' or from '../../hooks'
const IMPORT_REGEX = /(from\s+['"])(\.\.?\/.*?)(['"])/g;

function processFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // This function calculates how to change the relative path to @game-hub
  const updatedContent = fileContent.replace(IMPORT_REGEX, (match, prefix, importPath, suffix) => {
    // Skip if it's importing a global utility or absolute/node_module package
    if (!importPath.startsWith('.')) return match;

    // Resolve the absolute path of the imported file
    const fileDir = path.dirname(filePath);
    const absoluteImportPath = path.resolve(fileDir, importPath);

    // Calculate its path relative to the game-hub root folder
    const relativeToGameHub = path.relative(TARGET_DIR, absoluteImportPath);

    // If the import goes OUTSIDE of game-hub, leave it alone (so it can use globals or @/)
    if (relativeToGameHub.startsWith('..')) {
      return match; 
    }

    // Standardize slashes for Windows compatibility
    const standardizedPath = relativeToGameHub.replace(/\\/g, '/');

    // Reconstruct the import using @game-hub
    // If it points directly to the root index, handle the trailing slash gracefully
    const cleanPath = standardizedPath ? `@game-hub/${standardizedPath}` : '@game-hub';
    
    console.log(`  🔄 Replaced: "${importPath}" ➔ "${cleanPath}"`);
    return `${prefix}${cleanPath}${suffix}`;
  });

  if (fileContent !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return true;
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDirectory(fullPath); // Recursively look through folders
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      console.log(`Checking: ${path.relative(__dirname, fullPath)}`);
      const updated = processFile(fullPath);
      if (updated) {
        console.log(`  ✅ Updated!`);
      }
    }
  });
}

console.log('🚀 Starting relative import to @game-hub migration...');
if (fs.existsSync(TARGET_DIR)) {
  walkDirectory(TARGET_DIR);
  console.log('\n🎉 Migration complete successfully!');
} else {
  console.error(`❌ Error: Target directory "${TARGET_DIR}" does not exist.`);
}