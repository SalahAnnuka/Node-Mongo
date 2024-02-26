const express = require('express');
var app = express();
const {MongoClient} = require('mongodb');

var connection = 'mongodb+srv://smohammadannuka:0ExPKeHPcTAH14hI@cluster0.gymtp4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(connection);

async function run() {
    await client.connect();
}
run();

const mydb = client.db('db1');
const collection = mydb.collection('users');
console.log(client);

collection.insertMany([
    { "username": "john_smith", "password": "Grapes#21Orange" },
    { "username": "emma_jones", "password": "P@ssw0rd!123" },
    { "username": "michael_davis", "password": "Dav1s$ecure" },
    { "username": "sarah_wilson", "password": "S@r@hP@$$w0rd" },
    { "username": "chris_miller", "password": "M!llerStr0ng" },
    { "username": "lisa_thompson", "password": "Thompson#2023" },
    { "username": "james_white", "password": "J@mesWh!teP@ss" },
    { "username": "jennifer_taylor", "password": "T@yl0r$ecur3" },
    { "username": "david_thomas", "password": "D@vidTh0m@s!" },
    { "username": "emily_martin", "password": "3m!lyM@rt!n" },
    { "username": "matthew_anderson", "password": "Anders0n!982" },
    { "username": "jessica_harris", "password": "H@rr!sP@ssw0rd" },
    { "username": "ryan_clark", "password": "C!@rk2024" },
    { "username": "amanda_miller", "password": "M!ll3r2023" },
    { "username": "daniel_carter", "password": "D@n!elC@rt3r" },
    { "username": "ashley_young", "password": "Y0ung@shl3y" },
    { "username": "matt_hall", "password": "H@llP@$$2022" },
    { "username": "samantha_evans", "password": "S@m@nth@Ev@n$!" },
    { "username": "robert_wilson", "password": "R0b3rtW!ls0n" },
    { "username": "olivia_brown", "password": "Br0wn@2021" }
])


app.get('/',function(req,res){
    
    res.send('Server Started');
});

app.get('/users',async(req,res)=>{
    const users = await collection.find({}).toArray();
    res.send(users);
});


app.get('/user/:username',async(req,res)=>{
    const users = await collection.findOne({'username': req.params.username});
    res.send(users);
});

app.get('/form',function(req,res){
    res.sendFile(__dirname+'/form.html');
});

/*
app.post('/login',urlEncoded,async(req,res)=>{
    const finduser = await collection.findOne({'username': req.body.username});
    if (finduser)
        res.sendFile(__dirname+'/userinfo.html');
    else res.sendFile(__dirname+'/register.html');
})
*/
var bodyParse = require('body-parser');
var urlEncoded = bodyParse.urlencoded({extended: false});
 
var server = app.listen(7777,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is listening at port: "+port);
});