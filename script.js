function getDataFromSpreadsheet() {
    var spreadsheetURL = "https://docs.google.com/spreadsheets/d/19NkLclKSTXMFxQ4ha2sUlnZze47Z-t5IwFY_ZrdLwew/edit#gid=1838407717";

    $.getJSON(spreadsheetURL, function (data) {
        displayData(data);
    });
}

function displayData(data) {
    var spreadsheetDataElement = document.getElementById("spreadsheet-data");


    data.feed.entry.forEach(function (entry) {
        var cellData = entry.content.$t;
        spreadsheetDataElement.innerHTML += "<p>" + cellData + "</p>";
    });
}

$(document).ready(function () {
    getDataFromSpreadsheet();
});
