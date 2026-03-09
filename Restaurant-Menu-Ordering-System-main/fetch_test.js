const http = require('http');

http.get('http://localhost:4200/cart', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.substring(0, 500)); 
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
