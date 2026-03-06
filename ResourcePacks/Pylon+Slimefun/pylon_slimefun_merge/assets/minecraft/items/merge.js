// welcome to my shitty script of merging the items from slimefun
// step 1: paste items from pylon that also have items in slimefun into this folder
// step 2: run this script and it will merge the fallback of the slimefun item into the pylon item

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '.');
const compDir = path.join(__dirname, '../../../../assets/minecraft/items');

fs.readdirSync(rootDir).forEach(file => {
  const filePath = path.join(rootDir, file);
  const stats = fs.statSync(filePath);

  // check if there is an equivalent file in the compDir
  const compFilePath = path.join(compDir, file);
  if (fs.existsSync(compFilePath)) {

    // load json data for both files
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const compFileData = JSON.parse(fs.readFileSync(compFilePath, 'utf-8'));

    const oldFallback = fileData.model.fallback;

    if (oldFallback.type !== 'minecraft:model') {
      if (!JSON.stringify(fileData).includes('slimefun'))
        return console.warn(`WARN: File ${file} does not contain 'slimefun' in its data, please manually check if it should be merged or not.`);
      else
        return console.info(`INFO: Skipping ${file} as its fallback is not of type minecraft:model`);
    }
    
    compFileData.model.fallback = oldFallback;
    fileData.model.fallback = compFileData.model;

    // write the merged data back to the file
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf-8');
    console.info(`INFO: Merged fallback from ${compFilePath} into ${filePath}`);
  } else {
    console.info(`INFO: No equivalent file found for ${file} in ${compDir}`);
  }
});