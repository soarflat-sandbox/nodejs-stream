const fs = require('fs');
const request = require('request');
const writable = fs.createWriteStream('file.txt');

const url = 'https://qiita.com/trend';

request
  .get(url)
  .on('error', err => {
    console.log(err)
  })
  .on('end', () => {
    console.log('end')
  })
  // 読み取り可能なすべてのデータは 'file.txt'に格納される
  .pipe(writable);