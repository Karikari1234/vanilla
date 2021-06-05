//import "handsontable/dist/handsontable.full.css";

// This is an example script - don't forget to change it!

// mixpanel.init("26393110afa29af5d52b9e0b9c922b80");
// mixpanel.track('Button Click', {
//   'source': "Pat's affiliate site",
//   'Opted out of email': true,
// });


LogRocket.identify("xhntst/nafiz-rahman", {
  name: "James Morrison",
  email: "jamesmorrison@example.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
});

// LogRocket.getSessionURL(function (sessionURL) {
//   mixpanel.track('LogRocket', { sessionURL: sessionURL });
// });

const data = [
  ["Year", "Tesla", "Volvo", "Toyota", "Ford"],
  ["2019", 10, 11, 12, 13],
  ["2020", 20, 11, 14, 13],
  ["2021", 30, 15, 12, 13],
];

const container = document.getElementById("example");
const hot = new Handsontable(container, {
  data: data,
  rowHeaders: true,
  colHeaders: true,
  licenseKey: "non-commercial-and-evaluation",
});

var button1 = document.getElementById("export-file");
var exportPlugin1 = hot.getPlugin("exportFile");
var myTextarea = document.getElementById("code-mirror");
var codeSubmitBtn = document.getElementById("code-submit");
var resetConsole = document.getElementById("reset");
var map = document.getElementById("map");

button1.addEventListener("click", function () {
  exportPlugin1.downloadFile("csv", {
    bom: false,
    columnDelimiter: ",",
    columnHeaders: false,
    exportHiddenColumns: true,
    exportHiddenRows: true,
    fileExtension: "csv",
    filename: "Handsontable-CSV-file_[YYYY]-[MM]-[DD]",
    mimeType: "text/csv",
    rowDelimiter: "\r\n",
    rowHeaders: true,
  });
});

var editor = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
  mode: "javascript",
});

codeSubmitBtn.addEventListener("click", () => {
  editor.save();
  //console.log("Clicked");
  //console.log(editor.getValue());
  eval(editor.getValue());
});

resetConsole.addEventListener("click", () => {
  var logger = document.getElementById("log");
  logger.innerHTML = "";
});

(function () {
  if (!console) {
    console = {};
  }
  var old = console.log;
  var logger = document.getElementById("log");
  console.log = function (message) {
    if (typeof message == "object") {
      logger.innerHTML +=
        (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) +
        "<br />";
    } else {
      logger.innerHTML += message + "<br />";
    }
  };
})();

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
