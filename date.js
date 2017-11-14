function timer() {
    var Today = new Date();
    var date = Today.getDate();
    var month = Today.getMonth();
    var year = Today.getFullYear();
    document.write("Today is " + date + "/" + month + "/" + year + "<br>");
    var hours = Today.getHours();
    var minutes = Today.getMinutes();
    var seconds = Today.getSeconds();
    var milliseconds = Today.getMilliseconds();
    document.write("Time is " + hours + ":" + minutes + ":" + seconds + ":" + milliseconds);
}
timer();
//setInterval(Today_Date,1000);






//document.write("Hello");
