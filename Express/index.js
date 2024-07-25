import express from 'express';
const app = express();
app.use(express.json())

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]
console.log(users[0])

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
    const numberOfHealthyKidneys = johnKidneys.filter(kidney => kidney.healthy === true).length
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys
    })
});


app.post('/', (req, res) => {
   const isHealthy = req.body.isHealthy
   users[0].kidneys.push({
    healthy: isHealthy
   })
   res.json({
    msg: "Done!"
   })
});

app.put('/', (req, res) => {
   for(let i=0; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true
   }
   res.json({})
});

app.delete('/', (req, res) => {

    // if no unhealthy kidenys => send appropriate error code
    let unHealthy = 0
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy === false) {
            unHealthy++;
        }
    }
    
    if(unHealthy === 0){
        res.status(400).json({msg: "no unhealthy kidneys to remove!!!"})
    }
    else{
        const newKidneys = []
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }

        users[0].kidneys = newKidneys 
        res.json({msg: "all unhealthy kidneys deleted"})
    }
})

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
