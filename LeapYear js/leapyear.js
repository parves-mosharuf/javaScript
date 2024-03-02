function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
let year = 1900;
if (isLeapYear(year)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}