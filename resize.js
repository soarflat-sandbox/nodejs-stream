const request = require('request');
const fs = require('fs');
const sharp = require('sharp');

const r = fs.createReadStream('ai.png');
const transformer = sharp().resize(300);
const transformer2 = sharp().resize(300);
const w = fs.createWriteStream('ai_resize.png');

r.pipe(transformer).pipe(w);

request('https://4.bp.blogspot.com/-OtfkvQ6YhEI/V5XczoV8lOI/AAAAAAAA8uM/ks16au6Xssw78rdg9F6VDRhv6naz2jqlgCLcB/s800/job_it_dokata.png')
  .pipe(transformer2)
  .pipe(fs.createWriteStream('it_dokata.png'));