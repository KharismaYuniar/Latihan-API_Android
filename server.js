const express = require ('express');
const app = express();

const bodyParser= require('body-parser');
const cors = require('cors');

var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://agan:12345@localhost:27017/toko';

MongoClient.connect(url, function (err, db){
    console.log("Terhubung Ke MongoDB!")
});


app.use(bodyParser.json());
app.use(cors())


app.get('/data',(req, res)=>{
MongoClient.connect(url,(err, db)=>{
var collection = db.collection('karyawan');
collection.find({}).toArray((err,docs)=>{
console.log(docs);
res.send(docs);

}); }); });


app.post('/data', (req, res)=>{
MongoClient.connect(url, (err, db)=>{
var data = {nama:'susi', usia :22, kota:'semarang'};
var collection = db.collection('karyawan');
collection.insert(data, (err, result)=>{
console.log(result);
res.send(result);

}); }); });

app.listen(3500,()=>{
    console.log('server @port 3500')
})