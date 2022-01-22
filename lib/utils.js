const os = require("os");
const fs = require("fs");
const {config: xdgConfig} = require("xdg-basedir");
const tmuxnUtils = require("tmuxn/lib/utils");

const dir = xdgConfig
  ? `${xdgConfig}/tmuxinator`
  : `${os.homedir()}/.tmuxinator`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, {recursive: true});
}

module.exports = {
  ...tmuxnUtils,
  dir,
}
