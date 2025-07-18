const currentYear = new Date().getFullYear();


const footerParagraph = document.getElementById('copyright-year');

if (footerParagraph) {
  footerParagraph.textContent = `© ${currentYear} || Dillan Torres || Ecuador`;
}


const nLastModif = Date.parse(document.lastModified);
const readableDate = new Date(nLastModif);

document.getElementById("lastModified").textContent = "Last Modification: " + readableDate.toLocaleString();

const temperatureF = 10
const windSpeedMph = 5

function calculateWindChill(temperatureF, windspeedMph) {
    return (
    35.74 +
    0.6215 * temperatureF -
    35.75 * Math.pow(windSpeedMph, 0.16) +
    0.4275 * temperatureF * Math.pow(windSpeedMph, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.getElementById("windChill");

    if (temperatureF <= 50 && windSpeedMph > 3) {
        const chill = calculateWindChill(temperatureF, windSpeedMph);
        windChillElement.textContent = `${chill} °F`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

displayWindChill()