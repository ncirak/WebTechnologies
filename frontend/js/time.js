var happyHourDate = new Date("May 19, 2021 17:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var toHappyHour = happyHourDate - now;
    var days = Math.floor(toHappyHour / (1000 * 60 * 60 * 24));
    var hours = Math.floor((toHappyHour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((toHappyHour % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((toHappyHour % (1000 * 60)) / 1000);

    //display remaning time
    document.getElementById("countDown").innerHTML = "To Happy Hour " + '<br/>' + days + " Days " + hours + " Hours "
        + minutes + " Minutes " + seconds + " Seconds Left";

    //when countdown is done
    if (toHappyHour < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "HAPPY HOURR!!!";
    }
}, 1000);