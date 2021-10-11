var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("demo");
    var myobj = { name: "Company Sri", address: "Salem"};
    dbo.collection("demoCollection1").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 document inserted successfully");
        db.close();
    });
});