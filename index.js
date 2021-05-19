const express = require('express');
const {join} = require('path');
const morgan = require('morgan');
const { static } = require('express');
const app = express();

const port = 3000;
console.log(__dirname);
//tạo một đường dẫn url tĩnh của thư mục public ta làm như sau : 
app.use(express.static(join(__dirname,"public")));
app.set('views',join(__dirname,'views'));

//use template engine pub
app.set('view engine', 'pug');

//HTTP logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
    return res.render('pages/home.pug',{title: "pUB", message : "hello"});
})

app.listen(3000);