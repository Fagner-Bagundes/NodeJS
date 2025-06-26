const axios = require(`axios`)


// const Pessoas = axios(`https://jsonplaceholder.typicode.com/users`)
// .then((respose)=>{console.log(respose.data);
// }).catch((e)=>{console.log(e);
// })

async function pessoas (id) {
    const response = await axios(`https://jsonplaceholder.typicode.com/users`)
    const pessoas = response.data
    console.log(pessoas[id].name);
}


pessoas(0)