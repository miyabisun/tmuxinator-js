const fs = require("fs");
const R = require("ramda");
const {dir} = require("../lib/utils");
const pipe = (v, ...args) => R.pipe(...args)(v);

module.exports = {
  command: ["list", "ls", "l"],
  desc: "Lists all tmuxinnator projects",
  handler: async argv => {
    const files = await fs.readdirSync(dir);
    console.info("tmuxinator projects:");
    pipe(
      files,
      R.filter(R.match(/\.yml$/)),
      R.map(R.replace(/\.yml$/, "")),
      R.forEach(it => process.stdout.write(`  ${it}\n`))
    )
  }
}
