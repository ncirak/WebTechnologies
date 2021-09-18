function calculateFee() {
    const e = document.forms["feeCalculator"]["duration"];

    //duration is renew period of membership
    var duration = e.options[e.selectedIndex].value;

    const payment = document.forms["feeCalculator"]["payment"].value;

    const times = document.forms["feeCalculator"]["time"].value;

    //console.log(payment);
    //var getSelectedValue = document.querySelector('input[name="season"]:checked');
    //membership fee for each time duration
    const yearFee = 150;
    const monthFee = 20;
    const weekFee = 7;

    //membership fee discount in advance payments for each time duration in percantage

    const yearFeeDiscount = 10;
    const monthFeeDiscount = 7;
    const weekFeeDiscount = 5;

    const message = "Your calculated membership fee for selected period is: ";

    if (duration === "weekly") {
        if (payment == "annual") { document.getElementById("cost").innerHTML = message + times * weekFee; }
        else {
            document.getElementById("cost").innerHTML = message + (times * (weekFee * (100 - weekFeeDiscount) / 100)).toFixed(3);
        }
    }
    else if (duration === "yearly") {
        if (payment == "annual") { document.getElementById("cost").innerHTML = message + times * yearFee; }
        else {
            document.getElementById("cost").innerHTML = message + (times * (yearFee * (100 - yearFeeDiscount) / 100)).toFixed(3);
        }
    }
    else if (duration === "monthly") {
        if (payment == "annual") { document.getElementById("cost").innerHTML = message + times * monthFee; }
        else {
            document.getElementById("cost").innerHTML = message + (times * (monthFee * (100 - monthFeeDiscount) / 100)).toFixed(3);
        }
    }

}