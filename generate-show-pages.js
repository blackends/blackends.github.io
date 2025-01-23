const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// Load service account credentials via JSON key file path
const credentials = require("./zeta-structure-244003-b0439c023056.json");

// Authenticate with Google
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

// Initialize Sheets API
const sheets = google.sheets({ version: "v4", auth });

// Fetch data from Google Sheet
async function fetchSheetData(spreadsheetId, range) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return response.data.values;
}

// Generate Markdown
function generateMarkdown(data) {
  const headers = data[0];
  const rows = data.slice(1);
  const files = {};

  rows.forEach((row, index) => {
    const event = {};
    headers.forEach((header, i) => {
      event[header] = row[i];
    });

    const markdownContent = `---
layout: show
location: "${event.location || ""}"
venue: "${event.venue || ""}"
bands: "${event.bands || ""}"
link: "${event.link || ""}"
poster: "${event.poster || ""}"
youtube: "${event.youtube || ""}"
---

${event.notes || ""}
`;
    const filename = generateJekyllFilename(event.date, `${event.venue}-${event.location}`)
    files[filename] = markdownContent;
  });
  
  return files;
}

function generateLatLonFile(latlonData) {
    const latlonObj = (() => {
        let obj = {};
        latlonData.forEach(ll => {
            obj[ll[0]] = { lat: ll[1], lon: ll[2] };
        });
        return obj;
    })();
    return { "latlons.js": "const latlons = " + JSON.stringify(latlonObj, null, 4) };
}

function generateJekyllFilename(date, title) {
  const formattedDate = formatDateForJekyllFilename(date);
  const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `${formattedDate}-${sanitizedTitle}.md`;
}

function formatDateForJekyllFilename(datestr) {
  const date = new Date(datestr);

  // Format date as YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function writeFiles(files, outputDir) {
    Object.keys(files).forEach(filename => {
        const filePath = path.join(outputDir, filename);
        fs.writeFileSync(filePath, files[filename]);
        console.log(`File written: ${filePath}`);
    });
}

function makeDir(outputDir) {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
}

// Main function
async function main() {
    const spreadsheetId = "1F5RSBPbCGLBLyBr7SJDrZeAVtoj3brZlrsUAVbPPtk4"; // Replace with your spreadsheet ID

    const showDir = path.resolve("./shows/_posts");
    const latlonDir = path.resolve("./assets/js");
    makeDir(showDir);
    makeDir(latlonDir);

    try {
        const showData = await fetchSheetData(spreadsheetId, "Shows!A1:G");
        const showFiles = generateMarkdown(showData);
        writeFiles(showFiles, showDir);

        const latlonData = await fetchSheetData(spreadsheetId, "latlons!A2:C");
        const latlonFiles = generateLatLonFile(latlonData);
        writeFiles(latlonFiles, latlonDir);

        console.log("All data processed.");
    } catch (err) {
        console.error("Error fetching or processing data:", err.message);
    }
}

main();
