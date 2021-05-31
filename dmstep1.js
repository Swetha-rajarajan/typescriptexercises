//Task1
//1.write a program to read the query string as input and split them into words.
var inputstring = 'select * from ipl.csv where season > 2014 and city = Bangalore';
var splitstring = inputstring.split(" ");
console.log(splitstring);
//2. Get only file name from the query string.
function getFileName(inputvalue) {
    var fileName = inputvalue.split('from')[1].split(' ')[1].trim();
    //  var fileName = inputvalue.split('from')[1].split('where')[0].trim();
    console.log(fileName);
}
getFileName('select * from ipl.csv where season > 2014 and city = Bangalore');
//3.Get only base part(before `where` word) of the query from the given query string. 
function getBasePart(inputquery) {
    var basequery = inputquery.split('where')[0].trim();
    console.log(basequery);
}
getBasePart('select * from ipl.csv where season > 2014 and city = Bangalore');
//Task2
//1)Extract the selected fields/information from the given query.
function getSelectedQuery(query) {
    var selectedfield = query.split('from')[0].split(' ')[1].trim();
    console.log(selectedfield);
}
getSelectedQuery('select * from ipl.csv where season > 2014 and city = Bangalore');
getSelectedQuery('select city,winner,player_match from ipl.csv where season > 2014 and city =Bangalore');
//2)Get only filter part(after `where` word before'group by or order by' if they exist in the query) of the query from the given query string.
function getFilterPart(query) {
    var filterpart = query.split('order by')[0].split('group by')[0].split('where')[1].trim();
    console.log(filterpart);
}
getFilterPart('select city from ipl.csv where season > 2014 or city =Bangalore order by city');
getFilterPart('select * from ipl.csv where season > 2014 and city = Bangalore');
//3) As there will be multiple conditions, separate each condition and display in different line.
function getConditions(query) {
    var conditions = query.split('order by')[0].split('group by')[0].split('where')[1].trim();
    console.log(conditions.split('and' || 'or' || 'not'));
}
getConditions('select city from ipl.csv where season > 2014 and city =Chennai order by city');
//Task 3
//1)Extract the logical operators in sequence from the given query string. 
function getLogicalOperators(query) {
    var logicaloperators = query.split(" ");
    for (var i in logicaloperators) {
        if (logicaloperators[i] == ('or')) {
            var logop = " " + logicaloperators[i];
            console.log(logop);
        }
        else if (logicaloperators[i] == ('and')) {
            var logop = " " + logicaloperators[i];
            console.log(logop);
        }
        else if (logicaloperators[i] == ('not')) {
            var logop = " " + logicaloperators[i];
            console.log(logop);
        }
    }
}
getLogicalOperators('select city from ipl.csv where season > 2014 or city =Chennai order by city');
getLogicalOperators('select season,winner,player_match from ipl.csv where season > 2014 and city =Bangalore or date > 31-12-2014');
//2)Extract the order by field from the given string.
function getOrderbyField(query) {
    var field = query.split('order by')[1].trim();
    console.log(field);
}
getOrderbyField('select city from ipl.csv where season > 2014 or city =Chennai order by city');
//Task 4
//1)Extract the group by field from the given string.
function getGroupbyField(query) {
    var field = query.split('group by')[1].trim();
    //  var filed = query.split('group by')[1].split('order by')[0].trim();
    console.log(field);
}
getGroupbyField('select team1, city from ipl.csv where season > 2016 and city = Bangalore group by team1');
//2)  User may require the information like who is getting maximum salary or minimum age etc.. these are called aggregate functions (minimum, maximum, count, average, sum)
function getAggregateFunctions(query) {
    var aggregatefunction = query.split('from')[0].split(' ')[1].trim().split(',');
    console.log(aggregatefunction);
}
getAggregateFunctions('select avg(win_by_wickets),min(win_by_runs) from ipl.csv ');
