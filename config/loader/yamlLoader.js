const YAML = require("yaml");
/**
 *
 * @param {string|Buffer} content 源文件的内容
 * @param {object} [map] 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
 * @param {any} [meta] meta 数据，可以是任何内容
 */
module.exports = function(content, map, meta) {
  // console.log('this',this);
  const options = this.getOptions();
  console.log(options,'options');
  const data = YAML.parse(content);
  data.options = options;
  var callback = this.async();
  setTimeout(() => {
    const codeString = JSON.stringify(data);
    // return `module.exports = ${codeString}`;
    callback(null,`module.exports = ${codeString}`);
  }, 3000);
 
};