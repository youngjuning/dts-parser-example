const path = require("path")
const fs = require("fs")
const TJS = require("typescript-json-schema")

// In larger projects type names may not be unique,
// while unique names may be enabled.
const settings = {
  required: true,
  noExtraProps: true
};

// optionally pass ts compiler options
const compilerOptions = {
  lib: ["es2015"]
};

// optionally pass a base nath
const basePath = "./";

const program = TJS.getProgramFromFiles(
  [path.resolve("index.d.ts")],
  compilerOptions,
  basePath
);

// We can either get the schema for one file and one type...
const schema = TJS.generateSchema(program, "ButtonProps", settings);

fs.writeFile("./typeData.json", JSON.stringify(schema, null, 2), function(err){
  if(err) console.log(err)
  else console.log('写文件操作成功');
})