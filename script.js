// Ambil data dari spreadsheet
function getDataFromSpreadsheet() {
    // Ganti URL spreadsheet dengan URL spreadsheet Anda
    var spreadsheetURL = "https://docs.google.com/spreadsheets/d/19NkLclKSTXMFxQ4ha2sUlnZze47Z-t5IwFY_ZrdLwew/edit?usp=sharing";

    // Gunakan Google Sheets API untuk mengambil data JSON
    $.getJSON(spreadsheetURL, function (data) {
        // Proses data spreadsheet di sini
        displayData(data);
    });
}

// Tampilkan data di halaman HTML
function displayData(data) {
    var spreadsheetDataElement = document.getElementById("spreadsheet-data");

    // Tampilkan data sesuai kebutuhan
    // Contoh: Menampilkan nama kolom pertama dari setiap baris
    data.feed.entry.forEach(function (entry) {
        var cellData = entry.content.$t;
        spreadsheetDataElement.innerHTML += "<p>" + cellData + "</p>";
    });
}

// Panggil fungsi untuk mengambil data dari spreadsheet saat halaman dimuat
$(document).ready(function () {
    getDataFromSpreadsheet();
});
