module.exports= reqFilter=(req, resp, next)=>{
    if(!req.query.age){
        resp.send('Please enter age');
    }
    else if(req.query.age<18){
        resp.send('You cannot access the page as you age is less than 18 years.');
    }
    else{
        next();
    }
    
}