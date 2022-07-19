const fs = require("fs");
const yaml = require("yaml");
const kexec = require("@jcoreio/kexec");
const {ScriptBuilder} = require("tmuxn/lib/script_builder");
const {dir, checkHealth} = require("../lib/utils");

module.exports = {
  command: ["start <name>", "s <name>"],
  desc: "Start a tmux session using a project's a name",
  handler: ({name}) => {
    checkHealth();

    const filePath = `${dir}/${name}.yml`;
    if (!fs.existsSync(filePath)) {
      console.error(`Project file not exists: ${filePath}`);
      return;
    }

    const loadedData = yaml.parse(fs.readFileSync(filePath).toString());
    const execString = new ScriptBuilder(loadedData).buildScript();
    // console.log(execString);
    // return;
    kexec(execString);
  }
}
