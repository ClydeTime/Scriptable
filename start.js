// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: magic;
var json=["Installer","https://gitee.com/ClydeTime/scriptable/raw/master/DJG.js"];
text=`${json[1]}`;

D = await new Request(text).load();
const file = FileManager.local();

const path = file.joinPath(file.libraryDirectory(), "DJG.js");

file.write(path, D);
