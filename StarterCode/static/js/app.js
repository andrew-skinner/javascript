// from data.js
var tableData = data;

var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn")
button.on("click", function() {
    d3.event.preventDefault();
});

var inputField = d3.select("#datetime")

inputField.on("change", function() {
    
    d3.select("tbody").remove();
    table.append("tbody");
    
    var newText = d3.event.target.value;
    tableData.forEach(encounter => {
        if (encounter.datetime == newText) {
            console.log(encounter);
            var tbody = d3.select("tbody");
            var row = tbody.append("tr");
            row.append("td").text(encounter.datetime);
            row.append("td").text(encounter.city);
            row.append("td").text(encounter.state);
            row.append("td").text(encounter.country);
            row.append("td").text(encounter.shape);
            row.append("td").text(encounter.durationMinutes);
            row.append("td").text(encounter.comments);
        };    
    });
});

tableData.forEach(encounter => {
    console.log(encounter);
    var row = tbody.append("tr");
    row.append("td").text(encounter.datetime);
    row.append("td").text(encounter.city);
    row.append("td").text(encounter.state);
    row.append("td").text(encounter.country);
    row.append("td").text(encounter.shape);
    row.append("td").text(encounter.durationMinutes);
    row.append("td").text(encounter.comments);
});
// YOUR CODE HERE!
