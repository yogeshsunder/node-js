const { name } = require('ejs');
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')

// app.use(express.static(publicPath));
app.get('',(_, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_, resp)=>{
    const user={
        name:'Yogesh',
        email:'yogi@gmail.com',
        city:'Zirakpur',
        skills: ['QA', 'Automation', 'asp.net', 'nodejs']
    }
    resp.render('profile',{user});
})

app.get('/login',(_, resp)=>{
    const user={
        name:'Yogesh',
        email:'yogi@gmail.com',
        city:'Zirakpur',
        skills: ['QA', 'Automation', 'asp.net', 'nodejs']
    }
    resp.render('login',{user});
})

app.get('/about',(_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_, resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*',(_, resp)=>{
    resp.sendFile(`${publicPath}/pageNotFound.html`)
})

app.listen(4400);