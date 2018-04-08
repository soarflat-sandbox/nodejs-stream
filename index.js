const http = require('http');

const server = http.createServer((req, res) => {
  // reqはhttp.IncomingMessageであり、読み取り可能なストリーム
  // resはhttp.ServerResponseであり、書き込み可能なストリーム

  let body = '';
  // データをutf8 stringsで取得する
  // エンコーディングが設定されていない場合、Bufferオブジェクトが受信される
  req.setEncoding('utf8');

  // 読み込み可能なストリームは、リスナーが追加されると 'data'イベントを送出する
  req.on('data', (chunk) => {
    body += chunk;
  });

  // endイベントはボディ全体が受信されたことを示す
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // データの型を返す
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);