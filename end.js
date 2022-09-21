// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
FILE = FileManager.local()
FILEPATH = FILE.joinPath(FILE.libraryDirectory(), "/DJG.js")
const { DJG, Runing } = importModule(FILEPATH);
log(DJG)