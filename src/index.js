const express = require('express');
const path = require('path')
const app = express();

//Setting
app.set('port', 8080);
app.set('view engine', 'ejs');
//Se establece la ruta de views
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
//Routes
app.use(require('./routes/index.js'));
//Static File
app.use(express.static(path.join(__dirname, 'public')))
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
