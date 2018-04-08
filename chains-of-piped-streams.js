const fs = require('fs');
const zlib = require('zlib');

// データ（file.txt）を読み取りができるReadable Streamを生成する
const r = fs.createReadStream('file.txt');
// データを書き込んだり読み込んだりするときに、データを変更または変換できるTransform Streamを生成する
const z = zlib.createGzip();
// データ（file.txt.gz）を書き込みができるWritable Streamを生成する
const w = fs.createWriteStream('file.txt.gz');

// file.txtはgzに変換され、file.txt.gzという名前で保存される一連の処理
r.pipe(z).pipe(w);