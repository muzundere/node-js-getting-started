// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .post('*', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
};
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('*', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
