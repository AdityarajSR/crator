const express = require('express')
const app = express()
app.set('view-engine', 'ejs')
app.use(express.static("public"));


app.get('/', (req, res) => {
    
    res.render('index.ejs');
})
app.get('/home', (req, res) => {
    
    res.render('home.ejs');
})


app.get('/crator1', (req, res) => {

    res.render('crator1.ejs');
})
app.get('/crator2', (req, res) => {

    res.render('crator2.ejs');
})
app.get('/crator3', (req, res) => {
    
    res.render('crator3.ejs');
})
app.get('/crator4', (req, res) => {
    
    res.render('crator4.ejs');
})
app.get('/crator5', (req, res) => {
    
    res.render('crator5.ejs');
})

app.listen(3000 , function(){
    console.log('server started')
  })