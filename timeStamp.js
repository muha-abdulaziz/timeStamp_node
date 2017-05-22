//Not a Date Error.
NaD = new Error("Not a Valid Date.");

var months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

function checkDate(aDate) {
    var date = new Date(aDate);
    if (date == "Invalid Date") return "";
    
    return date;
};

function timeStampe (aDate) {
    //console.log(aDate);
    var unixtime = Number(aDate);
    if (unixtime) var date = checkDate(unixtime);
    else var date = checkDate(aDate);
    
    //var date = checkDate(aDate);
    //console.log(date);

    result = {}
    if (!date) {
        result.unix = null;
        result.natural = null;
    } else {
        var day = date.getDate();
        var month = date.getMonth();
        var monthName = months[month];
        var year = date.getFullYear();

        result.unix = date.getTime();
        result.natural = monthName + " " + day + "," + year;

        return result;
    }
}

module.exports = timeStampe;