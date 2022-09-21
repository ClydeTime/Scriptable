// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: magic;
var json=["Installer","https://gitee.com/script_djg/scriptable/raw/master/Script/DJG.js"];
text=`${json[1]}`;

D = await new Request(text);
const file = FileManager.local();

const path = file.joinPath(file.libraryDirectory(), "DJG_backup.js");

file.write(path, D);

log(D);