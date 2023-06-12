const fs  = require('fs')
const csv = require('csv-parser')

const result =[]
fs.createReadStream('sample.csv')
.pipe(csv())
.on("data",(data)=>{
  result.push(data)
})
.on("end",()=>{
  let max=0;
  let city="";
  result.forEach(data =>{
    if(max < Number(data.Population) && data.Gender==="Male"){
      max = Number(data.Population);
      city = data.City;
    }
  })
  console.log(max, city)
})