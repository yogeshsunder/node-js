const express = require('express');
const path = require('path');

const app =express();


const filePath = path.join(__dirname, "public")

console.log(filePath)

app.use(express.static(filePath))


app.listen(4400);