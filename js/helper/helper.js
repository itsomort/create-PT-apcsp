/**
 * Uses the data in list1 to sort both lists using bubble sort.
 * @example 
 * sortByList1({1, 3, 2}, {"one", "three", "two"});
 * returns {{1, 2, 3}, {"one", "two", "three"}}
 * @param {Array<Number>} list1 
 * @param {Array<Number>} list2 
 * @returns {Array<Array<any>>} list1 and list2 sorted by the date in list1.
 */

function sortByList1(list1, list2) {
    var c1 = list1;
    var c2 = list2;
    var length = c1.length;
    for(var i = 0; i < length-1; i++) {
        for(var j = 0; j < length-i-1; j++) {
            if(c1[j] > c1[j+1]) { 
                var temp = c1[j];
                var tempt = c2[j];
                c1[j] = c1[j+1];
                c2[j] = c2[j+1];
                c1[j+1] = temp;
                c2[j+1] = tempt;
            } 
        }
    }
    var ret = [0, 0];
    ret[0] = c1;
    ret[1] = c2;
    return ret;
}
/**
 * This changes the ISO form of a date into a human readable form.
 * It goes from a format of YYYY-MM-DDTHH:MM:SS.MSZ
 * To a format of Month, DD, YYYY
 * @param {String} date ISO date
 * @returns {String} string form of date
 */
function getDate(date) {
    var c = date + '';
    var p1 = c.split("T");
    var p2 = p1[0].split("-");
    p2[1] = getMonth(parseInt(p2[1]));
    return `${p2[1]} ${p2[2]}, ${p2[0]}`;
}

/**
 * 
 * @param {Number} inMonth Number representing the month.
 * @returns {String} String representation of month corresponding to the number.
 */

function getMonth(inMonth) {
    var month;
    switch(inMonth) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February"
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "Undefined";
            break;
    }
    return month;
}

/**
 * This takes the element given, gets its id, which is "t${some number}" representing the path to the specific theme.
 * It then changes the href of the theme style element to change the colors on the page, effectively changing the theme of the page.
 * @param {Element} element This is the <a> element that I get the ID from to form the path to the theme.
 */

function changeTheme(element) {
    var style = document.getElementById("theme");
    var theme = element.id;
    style.href = `css/themes/${theme}/${theme}.css`
}