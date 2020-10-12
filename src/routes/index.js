const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res)=>{
    console.log(__dirname + '/view/index.html')
    //Asi se pasa el contexto a las vistas
    res.render('index', {title: 'Titulo en contexto'})
});

router.get('/contact', (req, res)=>{
    //Asi se pasa el contexto a las vistas
    res.render('contact', {title: 'Titulo en contexto'})
});


module.exports = router;
