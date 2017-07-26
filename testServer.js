const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/views'));

// app.get('/',(req, res) => {
//   res.send('Hello express!!');
// })

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
