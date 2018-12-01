var express = require('express')

app = express();


// setup template engine
app.set('view engine', 'ejs')



// static files
app.use('/assets',express.static('assets'))



var cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'anamalia',
    api_key: '468158869114662',
    api_secret: 'IX3CBUJDeOLeDwU7NkBtpOn9Cw0'
})

app.get('/', (req, res)=>{
    res.render('card-hackathon')
})

app.get('/use/1',  (req, res)=>{
    res.render('card_input_1')
})


app.get('/use/2',  (req, res)=>{
    res.render('card_input_2')
})


app.get('/use/3',  (req, res)=>{
    res.render('card_input_3')
})


app.get('/use/4',  (req, res)=>{
    res.render('card_input_4')
})


app.get('/use/5',  (req, res)=>{
    res.render('card_input_5')
})


app.listen(8000)
console.log('youre listening on port 8000')