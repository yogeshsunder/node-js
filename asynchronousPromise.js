let a=20;
let b=30;



let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },3000)
})

waitingData.then((data)=>{
    console.log(a+data);
})

