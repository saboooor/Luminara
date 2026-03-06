// welcome to my shitty script of merging the items from slimefun
// step 1: paste items from pylon that also have items in slimefun into this folder
// step 2: run this script and it will merge block atlas

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '.');
const compDir = path.join(__dirname, '../../../../assets/minecraft/atlases');

fs.readdirSync(rootDir).forEach(file => {
  const filePath = path.join(rootDir, file);
  const stats = fs.statSync(filePath);

  // check if there is an equivalent file in the compDir
  const compFilePath = path.join(compDir, file);
  if (fs.existsSync(compFilePath)) {

    // load json data for both files
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const compFileData = JSON.parse(fs.readFileSync(compFilePath, 'utf-8'));
  
    // add the atlas from the compFileData to the fileData
    fileData.sources = [
      ...fileData.sources,
      ...compFileData.sources
    ]

    // check for duplicates in the sources and remove them
    fileData.sources = fileData.sources.filter((source, index, self) =>
      index === self.findIndex((s) => (
        s.type === source.type && s.resource === source.resource
      ))
    );

    // write the merged data back to the file
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf-8');
    console.info(`INFO: Merged atlas from ${compFilePath} into ${filePath}`);
  } else {
    console.info(`INFO: No equivalent file found for ${file} in ${compDir}`);
  }
});