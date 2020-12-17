const fs = require("fs");
const { parse, getFieldMeta } = require("@youngjuning/interface-comments-parser");
const resolvePackage = require("resolve-package");

resolvePackage("definitelyTyped").then((packageRoot) => {
  const result = parse(`${packageRoot}/types/tuya-panel-kit/index.d.ts`, "ButtonProps");
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }
  fs.writeFile("./dist/typeData.json", JSON.stringify(result, null, 2), function(err){
    if(err) console.log(err)
    else console.log('写文件操作成功');
  })

  const meta = result.map(o => getFieldMeta(o, "zh-CN"));
  fs.writeFile("./dist/typeData.zh-CN.json", JSON.stringify(meta, null, 2), function(err){
    if(err) console.log(err)
    else console.log('写中文文件操作成功');
  })

  const metaEN = result.map(o => getFieldMeta(o, "en-US"));
  fs.writeFile("./dist/typeData.en-US.json", JSON.stringify(metaEN, null, 2), function(err){
    if(err) console.log(err)
    else console.log('写英文文件操作成功');
  })
})