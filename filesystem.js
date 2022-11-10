// const fs = require('fs');
const fs = require('fs').promises;

// (async () => {
const myFunction = async()=>{
    try {        
        const data = await fs.readFile('./text.txt', "utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
myFunction()    
console.log('end')
// })()




// fs.readFile('./text.txt', "utf-8")
// .then(data=>{
//     console.log('data: ',data)
// })
// .catch(err=>{
//     console.log(err)
// })





// const data = fs.readFileSync('./text.txt', "utf-8");

// console.log(data)

// console.log('end')


// fs.readFile('./text.txt', "utf-8", (err, data) => {
//     if (err) {
//         console.log('error: ', err)
//     } else {
//         console.log('data: ', data)
//     }
// })

// console.log('end')

// fs.writeFile('./text.txt','Beni',(err)=>{
//     console.log('writing to file')
//     if(err){
//         console.log(err)
//     }
// });


// fs.appendFile('./text.txt','bla bla bla bla',(err)=>{
//     if(err){
//         console.log(err)
//     }
// });

