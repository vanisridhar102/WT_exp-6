http = require("http");
url = require("url");
var qs = require('query-string');

function onRequest(request, response) {
    if (request.method == 'POST') {
        var body =  '';

        request.on('data', function (data) {
            body += data;

            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            //console.log(post['age']);
            //console.log(post.age);
            //response.write("<h1>"+post['age']+"</h1>");
    
            var c11,c21,c31,c41;
    if(post['c1'] != undefined||null||''){
        c11=post['c1'];
    }else{
        c11='';
    }
    if(post['c2'] != undefined||null||''){
        c21=post['c2'];
    }else{
        c21='';
    }
    if(post['c3'] != undefined||null||''){
        c31=post['c3'];
    }else{
        c31='';
    }
    if(post['c4'] != undefined||null||''){
        c41=post['c4'];
    }else{
        c41='';
    }

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<center>");
    response.write("<body style='background-color: wheat;'>");
    response.write("<div style='border-radius: 80px; width: 60%; background-color: yellow; border: 3px solid blue;'>");
    response.write("<h1 style='color:red;'>Name : "+post['firstname']+" "+post['lastname']+"</h1>");
    response.write("<h1 style='color:blue;'>Number : "+post['num']+"</h1>");
    response.write("<h1 style='color:green;'>Gender : "+post['gender']+"</h1>");
    response.write("</div><br><br>");

    response.write("<div style='border-radius: 80px; width: 60%; background-color: black; border: 3px solid red;'>");
    response.write("<h1 style='color:red;'>Address : "+post['address']+"</h1>");
    response.write("<h1 style='color:blue;'>Email : "+post['email']+"</h1>");
    response.write("<h1 style='color:green;'>Age : "+post['age']+"</h1>");
    response.write("</div><br><br>");

    response.write("<div style='border-radius: 80px; width: 60%; background-color: yellow; border: 3px solid blue;'>");
    response.write("<h1 style='color:red;'>Area_Of-Interest : "+post['aoi']+"</h1>");
    response.write("<h1 style='color:blue;'>Qualification : "+post['qual']+"</h1>");  
    response.write("<h1 style='color:green;'>Language_Known : </h1>");
    response.write("<h2 style='color: black'>"+c11+' '+c21+' '+c31+' '+c41+"</h2>");
    response.write("</div>");

    response.write("</body>");
    response.write("</center>");
    response.end();
        });
    }
}

http.createServer(onRequest).listen(7777);
console.log("Server has started !!!");