const path = require("path");
const resolvePackage = require("resolve-package");

resolvePackage("@types/tuya-native-components").then((fp) => {
  console.log(fp)
})