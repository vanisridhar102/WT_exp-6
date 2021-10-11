http = require("http");
url = require("url");
querystring = require("querystring")

function onRequest(request, response){
    var path = url.parse(request.url).pathname;
    console.log("Request for " + path + " received.");

    var query=url.parse(request.url).query;
    var name1=querystring.parse(query)["firstname"];
    var name2=querystring.parse(query)["lastname"];
    var gender=querystring.parse(query)["gender"];
    var number=querystring.parse(query)["num"];

    var address=querystring.parse(query)["address"];
    var email=querystring.parse(query)["email"];
    var age=querystring.parse(query)["age"];

    var aoi=querystring.parse(query)["aoi"];
    var qual=querystring.parse(query)["qual"];

    var c1=querystring.parse(query)["c1"];
    var c2=querystring.parse(query)["c2"];
    var c3=querystring.parse(query)["c3"];
    var c4=querystring.parse(query)["c4"];
    var c11,c21,c31,c41;
    if(c1 != undefined||null||''){
        c11=c1;
    }else{
        c11='';
    }
    if(c2 != undefined||null||''){
        c21=c2;
    }else{
        c21='';
    }
    if(c3 != undefined||null||''){
        c31=c3;
    }else{
        c31='';
    }
    if(c4 != undefined||null||''){
        c41=c4;
    }else{
        c41='';
    }

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<center>");
    response.write("<body style='background-color: wheat;'>");
    response.write("<div style='border-radius: 80px; width: 60%; background-color: black; border: 3px solid blue;'>");
    response.write("<h1 style='color:red;'>Name : "+name1+" "+name2+"</h1>");
    response.write("<h1 style='color:blue;'>Number : "+number+"</h1>");
    response.write("<h1 style='color:green;'>Gender : "+gender+"</h1>");
    response.write("</div><br><br>");

    response.write("<div style='border-radius: 80px; width: 60%; background-color: yellow; border: 3px solid red;'>");
    response.write("<h1 style='color:red;'>Address : "+address+"</h1>");
    response.write("<h1 style='color:blue;'>Email : "+email+"</h1>");
    response.write("<h1 style='color:green;'>Age : "+age+"</h1>");
    response.write("</div><br><br>");

    response.write("<div style='border-radius: 80px; width: 60%; background-color: black; border: 3px solid blue;'>");
    response.write("<h1 style='color:red;'>Area_Of-Interest : "+aoi+"</h1>");
    response.write("<h1 style='color:blue;'>Qualification : "+qual+"</h1>");  
    response.write("<h1 style='color:green;'>Language_Known : </h1>");
    response.write("<h2 style='color:skyblue'>"+c11+' '+c21+' '+c31+' '+c41+"</h2>");
    response.write("</div>");

    response.write("</body>");
    response.write("</center>");
    response.end();
}

http.createServer(onRequest).listen(7777);
console.log("Server has started !!!");