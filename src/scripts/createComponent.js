const fs = require('fs-extra');
const componentsDir = `${ __dirname }/../components`;

// if user hasn't passed in a name for the component, stop
if (process.argv.length < 4) {
  throw new Error('\n\nYou must pass in the new component name and component level as arguments into the "createComponent" script.\nFor example: "npm run createComponent -- atoms NewComponent"\n\n');
}

const componentLevel = process.argv[2];
const componentName = process.argv[3];
const componentDir = `${ componentsDir }/${ componentLevel }/${ componentName }`;

// if component already exists, stop
fs.stat(componentDir, (err, stats) => {
  if (stats && stats.isDirectory()) {
    throw new Error(`\n\nComponent with name ${ componentName } already exists!\nIf you want to create a new one at this path you must delete the old files manually.\n\n`);
  }
});

function replaceName(inFile, outFile) {
  const reader = fs.createReadStream(inFile, 'utf8');
  const writer = fs.createWriteStream(outFile, 'utf8');

  reader.on('data', (data) => {
    writer.write(data.replace(/{{name}}/g, componentName).replace(/{{level}}/g, componentLevel));
  });
}

// create files based on files in Templates dir.
// we don't have to check for the directory first
// beause we are using fs-extra's `ensureFile`.
fs.readdir(`${ __dirname }/templates`, (err, files) => {
  if (err) {
    throw new Error(err);
  }

  files.forEach((file) => {
    const newName = `${ file.split('.template')[0] }${ file.split('.template')[1] }`;

    const newPath = `${ componentDir }/${ newName }`;
    fs.ensureFile(newPath, (err) => {
      if (err) {
        throw new Error(err);
      }

      replaceName(`${ __dirname }/templates/${ file }`, newPath);
    });
  });
});