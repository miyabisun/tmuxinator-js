const R = require("ramda");

module.exports = (v, ...args) => R.pipe(...args)(v);
