// === AUTHORHEADER ===
// @SpcFORK
// $internal: true
// Deps:
// -- authorheader.js --
// === ===

const fs = require("fs"),
  path = require("path"),
  chai = require("chai"),
  ah = require("./authorheader.js"),
  expect = chai.expect,
  assert = chai.assert,
  should = chai.should(),
  OM_ = {
    async scanDir(dirPath) {
      let returnObj = {};
      let dir = fs.readdirSync(dirPath);
      let dirs = [];
      let files = [];

      for (let file of dir) {
        let filePath = path.join(dirPath, file);
        let stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          dirs.push(filePath);
        } else {
          files.push(filePath);
        }
      }

      for (let dir of dirs) {
        let dirObj = await OM_.scanDir(dir);
        returnObj[dir.split("/").pop()] = dirObj;
      }

      for (let file of files) {
        let file = fs.readFileSync(file, "utf8");
        let formatted = await ah
          .AuthorHeader({
            location: file,
          })
          .compile();

        returnObj[file.split("/").pop()] = formatted;
      }

      return returnObj;
    },
  };

module.exports = OM_;
