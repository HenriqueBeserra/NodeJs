const os = require('os');
const express = require('express');


const {arch, totalmem, freemem, platform} = os;
const tRAM = totalmem()/ 1000 / 1000;
const fMEM = freemem()/ 1000  / 1000;

const app = express();

setInterval(() => {
    
    app.use('/', (req, res) =>{
        
        const status = {
            Os: platform(),
            Arch: arch(),
            TotalMem: tRAM.toFixed(2)+" MG",
            FreeMem: fMEM.toFixed(2)+" MG"
        }
        console.clear()
        console.table(status)
    
        return res.json(status)
    })
    
},  1000)

app.listen(2000, () => {console.log("MEM View at port => http://localhost:2000")})