const fs = require("fs");
const R = require("ramda");
const {dir, checkHealth} = require("../lib/utils");

module.exports = {
  command: ["new <name>", "n <name>"],
  desc: "Create a new project file and open it in your editor",
  handler: ({name}) => {
    checkHealth();

    const filePath = `${dir}/${name}.yml`;
    if (fs.existsSync(filePath)) {
      console.info(`Project file already exists: ${filePath}`);
      return;
    }

    const samplePath = `${__dirname}/../node_modules/tmuxn/assets/sample.yml`;
    const sampleFile = fs.readFileSync(samplePath, 'utf-8')
      .toString()
      .replace(/\$\$name\$\$/g, name);
    fs.writeFileSync(filePath, sampleFile, 'utf-8');
    console.info(`Created project file: ${filePath}`);
  }
}
