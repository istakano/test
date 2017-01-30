/*
 * 同期的に処理を実行したい場合にはexecSync
 *
 * 参考：http://tkybpp.hatenablog.com/entry/2016/04/25/163246
 */
const execSync = require('child_process').execSync;
const result =  execSync('git pull master');
console.log(result);
