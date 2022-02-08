const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const path = require('path');
const baseUrl = "http://localhost:3000/files/";

//http://localhost:3000/cer/cer17
app.get('/cer/:cer', (req,res) => {
  
	let rawdata = fs.readFileSync(path.resolve(__dirname, './data/cer.json'));
	
	let d1 = JSON.parse(rawdata);
	
	cer = req.params.cer
	
	let reqData = d1[cer]
	//console.log(req.params.cer);
	res.send(reqData)
});

app.get('/sscp/:sscp', (req,res) => {
  
	let rawdata = fs.readFileSync(path.resolve(__dirname, './data/sscp.json'));
	
	let d1 = JSON.parse(rawdata);
	
	sscp = req.params.sscp
	
	let reqData = d1[sscp]
	//console.log(req.params.cer);
	res.send(reqData)
});

app.get('/device', (req,res) => {
  
	let rawdata = fs.readFileSync(path.resolve(__dirname, './data/device.json'));
	
	let d1 = JSON.parse(rawdata);
	
	res.send(d1)
});

// To handle the download file request

app.get("/download/:type/:name", function (req, res) {
  
  type = req.params.type
  name = req.params.name
  
  res.download(__dirname + "/data/"+type+"/"+name+".xml", function (err) {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));