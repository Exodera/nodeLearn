const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname, 'nodeLearn','starter.txt'), 'utf8' , (err, data)=>{
    if(err) throw(err);
    console.log(data);
})

console.log("Hello fren");

fs.writeFile(path.join(__dirname, 'nodeLearn','reply.txt'),'File created', (err)=>{
    if(err) throw(err);
    console.log("Write complete")

    fs.appendFile(path.join(__dirname,'nodelearn', 'reply.txt'), '\n\nHello I have appended',(err, data)=>{
        console.log(data);
    })
   
})

fs.readFile(path.join(__dirname, 'nodeLearn', 'lorem.txt'), 'utf8' , (err, data)=>{
    console.log(data);
})



process.on('uncaughtException', err=>{
    console.error(`There was an error: ${err}`);
    process.exit(1);
})
