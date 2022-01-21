const fs = require("fs/promises");
const R = require("ramda");
const pipe = (v, ...args) => R.pipe(...args)(v);

module.exports = {
  command: ["list", "ls", "l"],
  desc: "Lists all tmuxinnator projects",
  handler: async argv => {
    const path = `${process.env.HOME}/.config/tmuxinator`;
    await fs.mkdir(path, {recursive: true})
    const files = await fs.readdir(path);
    console.info("tmuxinator projects:");
    pipe(
      files,
      R.filter(R.match(/\.yml$/)),
      R.map(R.replace(/\.yml$/, "")),
      R.forEach(it => process.stdout.write(`  ${it}\n`))
    )
  }
}
