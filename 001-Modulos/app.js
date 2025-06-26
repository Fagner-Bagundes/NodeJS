const { Pessoa}  = require(`./modulo1`)
const axios = require(`axios`)
const p1 = new Pessoa(`Nalda`, `Maria`)

console.log(p1);

const objsPessoas = axios(`https://jsonplaceholder.typicode.com/users`)
.then((respose) =>{console.log(respose.data);})
.catch((e)=>{console.log(e);
})