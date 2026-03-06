// welcome to my shitty script of merging the items from slimefun
// step 1: paste items from pylon that also have items in slimefun into this folder
// step 2: run this script and it will merge the fallback of the slimefun item into the pylon item

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '.');
const pylonDir = path.join(__dirname, '../../../../pylon_untouched/assets/minecraft/items');
const comp1216Dir = path.join(__dirname, '../../../../overlay_1_21_6_plus/assets/minecraft/items');
const compDir = path.join(__dirname, '../../../../assets/minecraft/items');

fs.readdirSync(rootDir).forEach(file => {
  const filePath = path.join(rootDir, file);
  const pylonFilePath = path.join(pylonDir, file);
  const stats = fs.statSync(filePath);

  // check if there is an equivalent file in the compDir
  const compFilePath = path.join(compDir, file);
  const comp1216FilePath = path.join(comp1216Dir, file);
  if (fs.existsSync(compFilePath) || fs.existsSync(comp1216FilePath)) {

    // load json data for both files
    // load file data from pylon to get fresh data
    const fileData = JSON.parse(
      fs.existsSync(pylonFilePath)
      ? fs.readFileSync(pylonFilePath, 'utf-8')
      : fs.readFileSync(filePath, 'utf-8')
    );
    // prefer the 1.21.6+ version if it exists, otherwise fall back to the regular version
    let compFileData = JSON.parse(
      fs.existsSync(comp1216FilePath)
      ? fs.readFileSync(comp1216FilePath, 'utf-8')
      : fs.readFileSync(compFilePath, 'utf-8')
    );

    const oldFallback = fileData.model.fallback;

    compFileData.model.fallback = oldFallback;
    fileData.model.fallback = compFileData.model;

    // write the merged data back to the file
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf-8');
    console.info(`INFO: Merged fallback from ${compFilePath} into ${filePath}`);
  } else {
    console.info(`INFO: No equivalent file found for ${file} in ${compDir}`);
  }
});