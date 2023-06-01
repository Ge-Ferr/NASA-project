//imports
const http  = require('http');
const app = require('./app');
const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.envPORT || 8000;

const server = http.createServer(app);

//loading data before listening to port
async function startServer (){
  await loadPlanetsData();
  //ended loading sata
  server.listen(PORT, () =>{
    console.log(`Server listening on port: ${PORT}`);
  });
}

startServer();


 