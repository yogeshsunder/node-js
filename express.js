const express = require('express');

const app = express();

app.get('',(req, res)=>{
    res.send(`
    <h1>Welcome, This is home page.</h1>
    <a href="/about">Go to About page</a>
    <a href="/help">Go to help page</a>
    `);
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type = "Text", placeholder="username" value="${req.query.name}" />
    <button>CLick Here</button>
    <a href="/">Go to home page</a>
    <a href="/help">Go to help page</a>
    `)
})

app.get('/help',(req,res)=>{
    res.send(`
    [{
        name: 'anshu',
        email: 'anshu@gmail.com'
    },
    {
        name: 'yogesh',
        email: 'yogesh@gmail.com'
    },
    {
        name: 'mishti',
        email: 'mishti@gmail.com'
    },
    {
        name: 'pooja',
        email: 'pooja@gmail.com'
    }
]
<a href="/">Go to home page</a>
    <a href="/about">Go to About page</a>
`);
})

app.listen(5000);