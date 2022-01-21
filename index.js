const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");

const argv = hideBin(process.argv)
yargs(argv.length ? argv : ["--help"])
  .commandDir("commands")
  .alias("h", "help")
  .alias("v", "version")
  .parse();
