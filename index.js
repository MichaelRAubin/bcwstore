// @ts-ignore
require("dotenv").config()
// @ts-ignore
require = require("esm")(module)
module.exports = require("./server/main.js")