const express = require('express')
const cookie = require('cookie-parser')



const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('form');

})

app.listen(3000)