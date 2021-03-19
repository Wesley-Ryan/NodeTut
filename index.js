const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello from the serverrrrr :{');
});
app.listen(port || 3669, () => {
  console.log(`server go brrrrppppppp ${port}`);
});
