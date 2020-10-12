const express = require('express');
const router = require('./router')
const jobs=require('./jobs')
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/stock/get-analysis', async (req, res) => {
  console.log(req.query);
  try{
    var json= await router.getAnalysisHelper(req.query)
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
  }catch(error){
    console.log(error)
    res.status(500);
    res.send("Talk to administrator")
  }
});
app.get('/stock/get-news', async (req, res) => {
  console.log(req.query);
  try{
    var json= await router.getNewsHelper(req.query)
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
  }catch(error){
    console.log(error)
    res.status(500);
    res.send("Talk to administrator")
  }
});

app.listen(PORT, HOST);
setTimeout(()=>{
  jobs()
},500)
console.log(process.env);
console.log(`Running on http://${HOST}:${PORT}`);
