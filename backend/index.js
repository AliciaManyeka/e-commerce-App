// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.send('Fashion Vogue Womens')
// })

// app.listen(3001, () => {
//     console.log('Server listening on port 3001');
//   });
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Fashion Vogue Womens')
})

app.listen(3001, () => {
    console.log('Server listening on port 3001 correctly');
  });

//   app.use